"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, Flag } from "lucide-react"
import MonetizationBanner from "@/components/MonetizationBanner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
          newsletter: false,
        })
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header avec drapeau marocain */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-white to-green-600 relative">
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
            <Flag className="w-4 h-4 mr-2" />
            🇲🇦 Support Client Maroc
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Contactez Nohaila Lourak</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Créatrice de Zen_Mind depuis Casablanca. Je réponds personnellement à tous vos messages pour améliorer votre
            expérience bien-être.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 text-emerald-600 mr-2" />
                  Nohaila Lourak
                </CardTitle>
                <p className="text-sm text-gray-600">Développeuse & Fondatrice de Zen_Mind</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email Personnel</p>
                    <p className="text-gray-600">louraknouhaila@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">WhatsApp</p>
                    <p className="text-gray-600">+212 6 69 31 67 82</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Localisation</p>
                    <p className="text-gray-600">
                      Casablanca, Maroc 🇲🇦
                      <br />
                      Quartier Maarif
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Disponibilité</p>
                    <p className="text-gray-600">
                      Lun-Ven: 9h-18h (GMT+1)
                      <br />
                      Sam: 10h-16h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* À propos de Nohaila */}
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 shadow-xl">
              <CardHeader>
                <CardTitle>À propos de moi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Salut ! Je suis Nohaila, développeuse passionnée de bien-être basée à Casablanca. J'ai créé Zen_Mind
                  pour aider les marocains à gérer le stress et trouver la sérénité dans notre vie moderne. Votre
                  feedback m'aide à améliorer l'app chaque jour ! 🌟
                </p>
              </CardContent>
            </Card>

            {/* Bannière de monétisation */}
            <MonetizationBanner />
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="w-6 h-6 text-emerald-600 mr-2" />
                  Envoyez-moi un message
                </CardTitle>
                <p className="text-gray-600">
                  Je lis personnellement chaque message et réponds dans les 24h. Votre avis compte pour améliorer
                  Zen_Mind ! 💚
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message envoyé ! 🎉</h3>
                    <p className="text-gray-600">
                      Merci pour votre message ! Je vous répondrai à <strong>louraknouhaila@gmail.com</strong> dans les
                      24h.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Votre prénom"
                          className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-emerald-200 rounded-lg focus:border-emerald-400 focus:ring-emerald-400 focus:outline-none"
                      >
                        <option value="">Choisissez un sujet</option>
                        <option value="bug">🐛 Signaler un bug</option>
                        <option value="suggestion">💡 Suggestion d'amélioration</option>
                        <option value="support">❓ Aide et support</option>
                        <option value="partenariat">🤝 Partenariat</option>
                        <option value="feedback">⭐ Feedback général</option>
                        <option value="autre">📝 Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre demande en détail... N'hésitez pas à être précis, cela m'aide à mieux vous aider ! 😊"
                        rows={6}
                        className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <label htmlFor="newsletter" className="text-sm text-gray-600">
                        Je souhaite recevoir les actualités de Zen_Mind et les conseils bien-être de Nohaila
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Envoyer à Nohaila
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      🔒 Vos données sont protégées et ne seront jamais partagées. Réponse garantie sous 24h à
                      louraknouhaila@gmail.com
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
