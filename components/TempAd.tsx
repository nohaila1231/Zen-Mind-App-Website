interface TempAdProps {
  slot: string
  format: "horizontal" | "rectangle" | "square"
  className?: string
}

export default function TempAd({ slot, format, className = "" }: TempAdProps) {
  const getAdContent = () => {
    const ads = [
      {
        title: "Découvrez Headspace",
        description: "Méditation guidée pour tous niveaux",
        cta: "Essayer gratuitement",
        color: "from-blue-500 to-indigo-500",
      },
      {
        title: "Formation Yoga en Ligne",
        description: "Cours certifiés avec instructeurs experts",
        cta: "Commencer maintenant",
        color: "from-green-500 to-teal-500",
      },
      {
        title: "Matelas Emma",
        description: "100 nuits d'essai - Livraison gratuite",
        cta: "Découvrir l'offre",
        color: "from-purple-500 to-violet-500",
      },
      {
        title: "Compléments Bien-être",
        description: "Vitamines naturelles pour votre santé",
        cta: "Voir les produits",
        color: "from-emerald-500 to-green-500",
      },
    ]

    return ads[Math.floor(Math.random() * ads.length)]
  }

  const ad = getAdContent()

  const getSize = () => {
    switch (format) {
      case "horizontal":
        return "h-24 md:h-32"
      case "rectangle":
        return "h-64 w-full max-w-sm mx-auto"
      case "square":
        return "h-64 w-64 mx-auto"
      default:
        return "h-24 md:h-32"
    }
  }

  return (
    <div className={`${className} my-6`}>
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4">
        <div className="text-center text-gray-500 mb-2">
          <span className="text-xs font-medium">PUBLICITÉ</span>
        </div>
        <div
          className={`bg-gradient-to-r ${ad.color} text-white rounded-lg p-4 ${getSize()} flex flex-col justify-center items-center text-center`}
        >
          <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2">{ad.title}</h3>
          <p className="text-xs md:text-sm mb-2 md:mb-3 opacity-90">{ad.description}</p>
          <button className="bg-white text-gray-800 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-gray-100 transition-colors">
            {ad.cta}
          </button>
        </div>
      </div>
    </div>
  )
}
