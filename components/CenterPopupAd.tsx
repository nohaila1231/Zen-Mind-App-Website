"use client"

import { useState, useEffect } from "react"
import { X, ExternalLink, Gift, Star, Clock } from "lucide-react"
import Image from "next/image"

interface PopupAdProps {
  delay?: number // Délai avant affichage en millisecondes
  frequency?: number // Fréquence d'affichage en minutes
}

const popupAds = [
  {
    id: 1,
    title: "🧠 Headspace Premium - Offre Spéciale !",
    subtitle: "Méditation scientifiquement prouvée",
    description: "Accédez à plus de 500 méditations guidées, exercices de sommeil et techniques anti-stress.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format&q=80",
    offer: "30 jours gratuits",
    originalPrice: "12.99€/mois",
    discountPrice: "GRATUIT",
    url: "https://www.headspace.com/",
    badge: "POPULAIRE",
    badgeColor: "bg-blue-500",
    gradient: "from-blue-500 to-indigo-600",
    features: ["500+ méditations", "Programmes sommeil", "Suivi progrès", "Hors ligne"],
    rating: 4.8,
    users: "70M+",
  },
  {
    id: 2,
    title: "🌙 Calm - App #1 Sommeil",
    subtitle: "Dormez mieux dès ce soir",
    description: "Histoires pour dormir, sons de la nature, méditations nocturnes et programmes anti-insomnie.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop&auto=format&q=80",
    offer: "7 jours gratuits",
    originalPrice: "49.99€/an",
    discountPrice: "GRATUIT",
    url: "https://www.calm.com/",
    badge: "NOUVEAU",
    badgeColor: "bg-green-500",
    gradient: "from-green-500 to-teal-600",
    features: ["Histoires sommeil", "Sons nature", "Méditation guidée", "Programmes 21 jours"],
    rating: 4.9,
    users: "100M+",
  },
  {
    id: 3,
    title: "🛏️ Emma Matelas - Révolution Sommeil",
    subtitle: "Le matelas préféré des français",
    description: "Matelas primé avec 100 nuits d'essai gratuit. Livraison et retour offerts.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&auto=format&q=80",
    offer: "100 nuits d'essai",
    originalPrice: "599€",
    discountPrice: "-40%",
    url: "https://www.emma-matelas.fr/",
    badge: "PROMO",
    badgeColor: "bg-red-500",
    gradient: "from-red-500 to-pink-600",
    features: ["100 nuits essai", "Livraison gratuite", "Garantie 10 ans", "Retour gratuit"],
    rating: 4.7,
    users: "2M+",
  },
  {
    id: 4,
    title: "🎧 AirPods Pro 2 - Méditation Immersive",
    subtitle: "Son spatial pour méditation",
    description: "Réduction de bruit active, audio spatial et autonomie 30h pour vos séances de méditation.",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&auto=format&q=80",
    offer: "Livraison gratuite",
    originalPrice: "279€",
    discountPrice: "249€",
    url: "https://www.apple.com/fr/airpods-pro/",
    badge: "APPLE",
    badgeColor: "bg-gray-800",
    gradient: "from-gray-700 to-gray-900",
    features: ["Réduction bruit", "Audio spatial", "30h autonomie", "Résistant eau"],
    rating: 4.9,
    users: "50M+",
  },
  {
    id: 5,
    title: "🧘‍♀️ Tapis Yoga Premium Manduka",
    subtitle: "Le tapis des professionnels",
    description: "Tapis écologique avec garantie à vie. Adhérence parfaite et confort optimal.",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop&auto=format&q=80",
    offer: "Livraison 48h",
    originalPrice: "120€",
    discountPrice: "89€",
    url: "https://www.manduka.com/eu/",
    badge: "ECO",
    badgeColor: "bg-green-600",
    gradient: "from-green-600 to-emerald-700",
    features: ["Garantie à vie", "Écologique", "Antidérapant", "6mm épaisseur"],
    rating: 4.8,
    users: "1M+",
  },
]

export default function CenterPopupAd({ delay = 10000, frequency = 5 }: PopupAdProps) {
  const [showPopup, setShowPopup] = useState(false)
  const [currentAd, setCurrentAd] = useState(0)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a accepté les cookies marketing
    const cookieConsent = localStorage.getItem("zen-mind-cookie-consent")
    if (!cookieConsent) return

    const consent = JSON.parse(cookieConsent)
    if (!consent.marketing) return

    // Vérifier la dernière fois qu'une popup a été affichée
    const lastPopup = localStorage.getItem("zen-mind-last-popup")
    const now = Date.now()

    if (lastPopup) {
      const timeSinceLastPopup = now - Number.parseInt(lastPopup)
      const frequencyMs = frequency * 60 * 1000 // Convertir minutes en millisecondes

      if (timeSinceLastPopup < frequencyMs) return
    }

    // Afficher la popup après le délai
    const timer = setTimeout(() => {
      setCurrentAd(Math.floor(Math.random() * popupAds.length))
      setShowPopup(true)
      localStorage.setItem("zen-mind-last-popup", now.toString())
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, frequency])

  const closePopup = () => {
    setIsClosing(true)
    setTimeout(() => {
      setShowPopup(false)
      setIsClosing(false)
    }, 300)
  }

  const handleAdClick = () => {
    // Ouvrir le lien dans un nouvel onglet
    window.open(popupAds[currentAd].url, "_blank")
    closePopup()
  }

  if (!showPopup) return null

  const ad = popupAds[currentAd]

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={closePopup}
      >
        {/* Popup */}
        <div
          className={`bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-300 ${
            isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header avec image */}
          <div className="relative">
            <Image
              src={ad.image || "/placeholder.svg"}
              alt={ad.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />

            {/* Badge */}
            <div className="absolute top-4 left-4">
              <span className={`${ad.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>{ad.badge}</span>
            </div>

            {/* Bouton fermer */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Gradient overlay */}
            <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t ${ad.gradient} opacity-80`}></div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-2">{ad.title}</h2>
            <p className="text-purple-600 font-semibold text-sm mb-3">{ad.subtitle}</p>

            {/* Rating & Users */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="flex items-center mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(ad.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm font-semibold text-gray-700 ml-1">{ad.rating}</span>
                </div>
                <span className="text-xs text-gray-500">{ad.users} utilisateurs</span>
              </div>
              <div className="flex items-center text-green-600">
                <Gift className="w-4 h-4 mr-1" />
                <span className="text-sm font-semibold">{ad.offer}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{ad.description}</p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {ad.features.map((feature, index) => (
                <div key={index} className="flex items-center text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                  {feature}
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-2xl font-bold text-green-600">{ad.discountPrice}</span>
                {ad.originalPrice !== ad.discountPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">{ad.originalPrice}</span>
                )}
              </div>
              <div className="flex items-center text-orange-500">
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-xs font-semibold">Offre limitée</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <button
                onClick={closePopup}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Plus tard
              </button>
              <button
                onClick={handleAdClick}
                className={`flex-2 px-6 py-3 bg-gradient-to-r ${ad.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center`}
              >
                Découvrir maintenant
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-400 text-center mt-4">
              🔒 Partenaire officiel • Offre valable jusqu'au 31/12/2024
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
