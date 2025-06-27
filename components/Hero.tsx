"use client"

import { Button } from "@/components/ui/button"
import { Download, Play, Award, Users, Star, TrendingUp, CheckCircle, MapPin } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/app-release.apk"
    link.download = "Zen-Mind-App.apk"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
      {/* Background avec images de haute qualité */}
      <div className="absolute inset-0 -z-10">
        <div className="grid grid-cols-4 gap-2 opacity-5 h-full">
          <div className="space-y-2">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format&q=80"
              alt="Méditation au coucher du soleil"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-32 float-animation"
            />
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format&q=80"
              alt="Yoga en groupe"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-32 float-animation"
              style={{ animationDelay: "1s" }}
            />
          </div>
          <div className="space-y-2 mt-8">
            <Image
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=300&fit=crop&auto=format&q=80"
              alt="Espace zen"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-32 float-animation"
              style={{ animationDelay: "2s" }}
            />
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&auto=format&q=80"
              alt="Respiration"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-32 float-animation"
              style={{ animationDelay: "3s" }}
            />
          </div>
          <div className="space-y-2">
            <Image
              src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop&auto=format&q=80"
              alt="Sommeil paisible"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-32 float-animation"
              style={{ animationDelay: "4s" }}
            />
            <Image
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop&auto=format&q=80"
              alt="Relaxation famille"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-32 float-animation"
              style={{ animationDelay: "5s" }}
            />
          </div>
          <div className="space-y-2 mt-4">
            <Image
              src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop&auto=format&q=80"
              alt="Yoga pose"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-32 float-animation"
              style={{ animationDelay: "6s" }}
            />
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop&auto=format&q=80"
              alt="Nature zen"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-32 float-animation"
              style={{ animationDelay: "7s" }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 text-gray-800 rounded-full text-sm font-medium mb-6 shadow-sm border">
              <Award className="w-4 h-4 mr-2" />
              🇲🇦 Application #1 Bien-être au Maroc
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Découvrez la
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent block">
                sérénité marocaine
              </span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start mb-4">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-lg text-gray-700 font-medium">Créée à Casablanca par Nohaila Lourak</span>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
              Rejoignez plus de <strong>25 000 marocains</strong> qui ont découvert la paix intérieure avec nos
              techniques de relaxation, méditation guidée et exercices de yoga adaptés à notre culture.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-violet-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Réduction du stress en 5 minutes</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-violet-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Amélioration du sommeil</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-violet-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">200+ exercices en arabe/français</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-violet-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Suivi personnalisé gratuit</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                onClick={handleDownload}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger APK Gratuit 🇲🇦
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-violet-300 text-violet-700 hover:bg-violet-50 px-8 py-4 text-lg border-2"
              >
                <Play className="w-5 h-5 mr-2" />
                Voir la démo (2 min)
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div className="border-r border-gray-200 pr-8 last:border-r-0">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="w-5 h-5 text-violet-600 mr-2" />
                  <div className="text-3xl font-bold text-violet-600">25K+</div>
                </div>
                <div className="text-sm text-gray-600">Utilisateurs marocains</div>
              </div>
              <div className="border-r border-gray-200 pr-8 last:border-r-0">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <div className="text-3xl font-bold text-violet-600">4.9★</div>
                </div>
                <div className="text-sm text-gray-600">Note moyenne</div>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <TrendingUp className="w-5 h-5 text-violet-600 mr-2" />
                  <div className="text-3xl font-bold text-violet-600">200+</div>
                </div>
                <div className="text-sm text-gray-600">Exercices guidés</div>
              </div>
            </div>
          </div>

          {/* Visual avec images de haute qualité */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-4">
                <div className="relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&auto=format&q=80"
                    alt="Méditation au coucher du soleil - Zen_Mind Maroc"
                    width={400}
                    height={250}
                    className="rounded-xl object-cover w-full h-32 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&auto=format&q=80"
                    alt="Séance de yoga en groupe - Casablanca"
                    width={400}
                    height={250}
                    className="rounded-xl object-cover w-full h-32 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=250&fit=crop&auto=format&q=80"
                    alt="Postures de yoga - Zen_Mind"
                    width={400}
                    height={250}
                    className="rounded-xl object-cover w-full h-32 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop&auto=format&q=80"
                    alt="Nature et méditation - Maroc"
                    width={400}
                    height={250}
                    className="rounded-xl object-cover w-full h-32 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Interface de l'app */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-violet-100 relative z-10">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full mb-4 breathing-animation">
                  <Image src="/logo.png" alt="Zen_Mind App Maroc" width={40} height={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Exercice populaire au Maroc</h3>
                <p className="text-gray-600">Respiration 4-7-8 - Endormissement rapide</p>
                <div className="flex items-center justify-center mt-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-500 ml-2">(8,247 avis marocains)</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border border-violet-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="font-medium text-gray-900">Inspiration</span>
                  </div>
                  <span className="text-sm text-violet-700 font-semibold">4 sec</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-900">Rétention</span>
                  </div>
                  <span className="text-sm text-blue-700 font-semibold">7 sec</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-900">Expiration</span>
                  </div>
                  <span className="text-sm text-purple-700 font-semibold">8 sec</span>
                </div>
              </div>

              <Button className="w-full mt-6 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg">
                <Play className="w-4 h-4 mr-2" />
                Commencer l'exercice (5 min)
              </Button>

              <p className="text-center text-xs text-gray-500 mt-3">✨ Utilisé par 3,200+ marocains cette semaine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
