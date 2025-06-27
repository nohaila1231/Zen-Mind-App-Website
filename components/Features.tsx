import { Card, CardContent } from "@/components/ui/card"
import { Wind, Heart, Leaf, Moon, Sun, Waves } from "lucide-react"

const features = [
  {
    icon: Wind,
    title: "Exercices de Respiration",
    description: "Techniques guidées pour maîtriser votre souffle et réduire le stress instantanément.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Heart,
    title: "Cohérence Cardiaque",
    description: "Synchronisez votre cœur et votre esprit pour un bien-être optimal.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Leaf,
    title: "Méditation Guidée",
    description: "Séances de méditation adaptées à tous les niveaux pour cultiver la paix intérieure.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Moon,
    title: "Relaxation Nocturne",
    description: "Programmes spéciaux pour améliorer la qualité de votre sommeil.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Sun,
    title: "Réveil en Douceur",
    description: "Commencez chaque journée avec sérénité grâce à nos routines matinales.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Waves,
    title: "Sons de la Nature",
    description: "Bibliothèque de sons apaisants pour créer votre environnement zen.",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Votre boîte à outils bien-être</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une collection complète d'outils et techniques pour cultiver la sérénité dans votre vie
            quotidienne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-xl mb-4`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
