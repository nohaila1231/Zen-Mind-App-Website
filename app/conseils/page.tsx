import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wind, Heart, Leaf, Clock, Users, Star } from "lucide-react"
import TempAd from "@/components/TempAd"

const conseils = [
  {
    id: 1,
    title: "Respiration 4-7-8 pour l'endormissement",
    description: "Technique simple et efficace pour s'endormir rapidement et naturellement.",
    icon: Wind,
    duration: "5 min",
    difficulty: "Débutant",
    category: "Respiration",
    content: `
      La technique 4-7-8 est une méthode de respiration développée par le Dr Andrew Weil, 
      basée sur les pratiques de pranayama du yoga. Elle est particulièrement efficace 
      pour réduire l'anxiété et favoriser l'endormissement.

      **Comment pratiquer :**
      1. Expirez complètement par la bouche
      2. Fermez la bouche et inspirez par le nez en comptant jusqu'à 4
      3. Retenez votre souffle en comptant jusqu'à 7
      4. Expirez complètement par la bouche en comptant jusqu'à 8
      5. Répétez le cycle 3 à 4 fois

      **Bienfaits :**
      - Réduit le stress et l'anxiété
      - Favorise l'endormissement
      - Améliore la concentration
      - Régule le système nerveux
    `,
  },
  {
    id: 2,
    title: "Cohérence Cardiaque : 5 minutes pour la sérénité",
    description: "Synchronisez votre cœur et votre respiration pour un bien-être immédiat.",
    icon: Heart,
    duration: "5 min",
    difficulty: "Débutant",
    category: "Cohérence Cardiaque",
    content: `
      La cohérence cardiaque est une technique de respiration qui permet de réguler 
      la variabilité du rythme cardiaque et d'induire un état de calme et de bien-être.

      **La règle du 365 :**
      - 3 fois par jour
      - 6 respirations par minute
      - Pendant 5 minutes

      **Technique :**
      1. Inspirez pendant 5 secondes
      2. Expirez pendant 5 secondes
      3. Maintenez ce rythme pendant 5 minutes

      **Bienfaits scientifiquement prouvés :**
      - Réduction du cortisol (hormone du stress)
      - Amélioration de la variabilité cardiaque
      - Renforcement du système immunitaire
      - Meilleure gestion émotionnelle
    `,
  },
  {
    id: 3,
    title: "Méditation de pleine conscience pour débutants",
    description: "Initiez-vous à la méditation avec cette pratique simple et accessible.",
    icon: Leaf,
    duration: "10 min",
    difficulty: "Débutant",
    category: "Méditation",
    content: `
      La méditation de pleine conscience consiste à porter son attention sur le moment 
      présent, sans jugement. C'est une pratique accessible à tous qui apporte de nombreux bienfaits.

      **Préparation :**
      1. Trouvez un endroit calme
      2. Asseyez-vous confortablement
      3. Fermez les yeux ou fixez un point
      4. Détendez votre corps

      **Pratique :**
      1. Concentrez-vous sur votre respiration naturelle
      2. Observez les sensations sans les modifier
      3. Quand votre esprit divague, revenez doucement à la respiration
      4. Accueillez toutes les pensées sans jugement

      **Conseils pour débuter :**
      - Commencez par 5-10 minutes par jour
      - Soyez patient et bienveillant avec vous-même
      - La régularité est plus importante que la durée
    `,
  },
]

export default function ConseilsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Conseils & Techniques Bien-être</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos guides pratiques pour intégrer la relaxation et la respiration consciente dans votre
            quotidien.
          </p>
        </div>
      </section>

      {/* Bannière publicitaire */}
      {/* <AdBanner slot="conseils-top-banner" format="horizontal" className="w-full max-w-4xl mx-auto mb-12" /> */}

      {/* Conseils Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar avec pub */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="zen-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      Conseil du Jour
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      "Prenez 3 respirations profondes avant chaque repas. Cette simple habitude améliore la digestion
                      et réduit le stress."
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Plus de conseils
                    </Button>
                  </CardContent>
                </Card>

                {/* Pub sidebar */}
                <TempAd slot="conseils-sidebar" format="rectangle" className="w-full" />
              </div>
            </div>

            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-8">
              {conseils.map((conseil, index) => (
                <Card
                  key={conseil.id}
                  className="zen-card border-0 hover:scale-[1.02] transition-transform duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-green-100 rounded-xl">
                          <conseil.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-slate-800">{conseil.title}</CardTitle>
                          <p className="text-slate-600 mt-1">{conseil.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {conseil.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {conseil.difficulty}
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        {conseil.category}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="prose prose-slate max-w-none">
                      {conseil.content.split("\n").map((paragraph, i) => {
                        if (paragraph.trim().startsWith("**") && paragraph.trim().endsWith("**")) {
                          return (
                            <h3 key={i} className="text-lg font-semibold text-slate-800 mt-6 mb-3">
                              {paragraph.replace(/\*\*/g, "")}
                            </h3>
                          )
                        }
                        if (paragraph.trim().startsWith("- ")) {
                          return (
                            <li key={i} className="text-slate-600 ml-4">
                              {paragraph.replace("- ", "")}
                            </li>
                          )
                        }
                        if (paragraph.trim()) {
                          return (
                            <p key={i} className="text-slate-600 mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          )
                        }
                        return null
                      })}
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <Button className="zen-gradient text-white hover:opacity-90">Essayer maintenant</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Bannière entre articles */}
              {conseils.length > 1 && <TempAd slot="conseils-content-banner" format="horizontal" className="w-full" />}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
