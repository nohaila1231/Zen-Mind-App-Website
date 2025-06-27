"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie, X, Settings, Shield, BarChart3 } from "lucide-react"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Toujours activé
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("zen-mind-cookie-consent")
    if (!consent) {
      setShowConsent(true)
    } else {
      // Charger les préférences sauvegardées
      const savedPrefs = JSON.parse(consent)
      setPreferences(savedPrefs)
      loadScripts(savedPrefs)
    }
  }, [])

  const loadScripts = (prefs: typeof preferences) => {
    if (typeof window === "undefined") return

    // Google Analytics
    if (prefs.analytics) {
      const gtag = document.createElement("script")
      gtag.async = true
      gtag.src = "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      document.head.appendChild(gtag)

      const gtagConfig = document.createElement("script")
      gtagConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      `
      document.head.appendChild(gtagConfig)
    }

    // Scripts marketing (PropellerAds, etc.)
    if (prefs.marketing) {
      const propellerScript = document.createElement("script")
      propellerScript.innerHTML = `
        (function(d, s, id) {
          var js, pjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//cdn.propellerads.com/tags/tag.js";
          pjs.parentNode.insertBefore(js, pjs);
        }(document, 'script', 'propeller-jssdk'));
      `
      document.head.appendChild(propellerScript)
    }

    // Scripts fonctionnels
    if (prefs.functional) {
      // Charger les scripts de chat, etc.
      console.log("Scripts fonctionnels chargés")
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("zen-mind-cookie-consent", JSON.stringify(allAccepted))
    loadScripts(allAccepted)
    setShowConsent(false)
    setShowSettings(false)
  }

  const acceptSelected = () => {
    localStorage.setItem("zen-mind-cookie-consent", JSON.stringify(preferences))
    loadScripts(preferences)
    setShowConsent(false)
    setShowSettings(false)
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(onlyNecessary)
    localStorage.setItem("zen-mind-cookie-consent", JSON.stringify(onlyNecessary))
    setShowConsent(false)
    setShowSettings(false)
  }

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === "necessary") return // Ne peut pas être désactivé
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!showConsent) return null

  return (
    <>
      {/* Overlay */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Settings className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Paramètres des Cookies</h2>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <p className="text-gray-600 text-sm">
                Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. Vous pouvez choisir
                quels types de cookies accepter.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4">
                {/* Nécessaires */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Shield className="w-5 h-5 text-green-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Cookies Nécessaires</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Cookies Analytiques</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference("analytics")}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? "bg-purple-500 justify-end" : "bg-gray-300 justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>

                {/* Marketing */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Cookie className="w-5 h-5 text-orange-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Cookies Marketing</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Utilisés pour afficher des publicités pertinentes et mesurer leur efficacité.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference("marketing")}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.marketing ? "bg-purple-500 justify-end" : "bg-gray-300 justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>

                {/* Fonctionnels */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Settings className="w-5 h-5 text-purple-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Cookies Fonctionnels</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Permettent des fonctionnalités avancées comme le chat en direct.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference("functional")}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.functional ? "bg-purple-500 justify-end" : "bg-gray-300 justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200">
              <Button onClick={rejectAll} variant="outline" className="flex-1 border-gray-300 hover:bg-gray-50">
                Refuser tout
              </Button>
              <Button
                onClick={acceptSelected}
                variant="outline"
                className="flex-1 border-purple-300 text-purple-600 hover:bg-purple-50"
              >
                Sauvegarder mes choix
              </Button>
              <Button onClick={acceptAll} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                Accepter tout
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-purple-200 shadow-2xl z-40 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-start flex-1">
              <div className="p-3 bg-purple-100 rounded-full mr-4 flex-shrink-0">
                <Cookie className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">🍪 Nous utilisons des cookies</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pour améliorer votre expérience, analyser notre trafic et afficher des publicités pertinentes. Vos
                  données sont protégées selon notre{" "}
                  <a href="/politique-confidentialite" className="text-purple-600 hover:underline">
                    politique de confidentialité
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full lg:w-auto">
              <Button
                onClick={() => setShowSettings(true)}
                variant="outline"
                size="sm"
                className="border-gray-300 hover:bg-gray-50 text-gray-700"
              >
                <Settings className="w-4 h-4 mr-2" />
                Personnaliser
              </Button>
              <Button
                onClick={rejectAll}
                variant="outline"
                size="sm"
                className="border-gray-300 hover:bg-gray-50 text-gray-700"
              >
                Refuser
              </Button>
              <Button onClick={acceptAll} size="sm" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
                Accepter tous les cookies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
