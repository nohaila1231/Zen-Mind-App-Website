"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const professionalOffers = [
  {
    title: "🧠 Headspace Premium",
    description: "Application de méditation scientifiquement validée",
    url: "https://www.headspace.com/",
    price: "Essai gratuit 30 jours",
    badge: "Recommandé",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "📚 Formations en ligne",
    description: "Cours certifiés de méditation et mindfulness",
    url: "https://www.udemy.com/courses/search/?q=meditation",
    price: "À partir de 19€",
    badge: "Formation",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "🎧 Casques de méditation",
    description: "Audio haute qualité pour vos séances",
    url: "https://www.amazon.fr/s?k=casque+meditation",
    price: "Dès 49€",
    badge: "Matériel",
    color: "from-purple-500 to-pink-600",
  },
]

export default function MonetizationBanner() {
  const [currentOffer, setCurrentOffer] = useState(0)

  const nextOffer = () => {
    setCurrentOffer((prev) => (prev + 1) % professionalOffers.length)
  }

  const offer = professionalOffers[currentOffer]

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
      <div className="text-center text-gray-500 mb-3">
        <span className="text-sm font-medium">RECOMMANDATION</span>
      </div>

      <div className={`bg-gradient-to-r ${offer.color} text-white rounded-lg p-6 relative overflow-hidden`}>
        <div className="absolute top-2 right-2">
          <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">{offer.badge}</span>
        </div>

        <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
        <p className="text-white/90 mb-4">{offer.description}</p>

        <div className="flex items-center justify-between">
          <div className="text-lg font-bold">{offer.price}</div>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={nextOffer}
              className="bg-white/20 hover:bg-white/30 text-white border-0"
            >
              Suivant
            </Button>
            <Link href={offer.url} target="_blank">
              <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                Découvrir
                <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
