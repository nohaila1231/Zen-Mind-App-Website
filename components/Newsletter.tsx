import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Gift } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="py-20 section-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-xl mb-6">
            <Gift className="w-8 h-8 text-emerald-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Recevez nos conseils bien-être</h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter et recevez chaque semaine des exercices exclusifs, des conseils d'experts
            et des méditations guidées gratuites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="h-12 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Mail className="w-5 h-5 mr-2" />
              S'inscrire
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            🎁 Bonus : Recevez immédiatement notre guide "5 minutes pour la sérénité"
          </p>
        </div>
      </div>
    </section>
  )
}
