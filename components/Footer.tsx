"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Heart, Download } from "lucide-react"

export default function Footer() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/app-release.apk"
    link.download = "Zen-Mind-App.apk"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section principale */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image src="/logo.png" alt="Zen_Mind Logo" width={32} height={32} className="breathing-animation" />
              <div>
                <span className="text-xl font-bold text-violet-600">Zen_Mind</span>
                <p className="text-xs text-gray-500 -mt-1">Par Nohaila Lourak 🇲🇦</p>
              </div>
            </Link>
            <p className="text-gray-600 text-sm mb-4 max-w-md">
              L'application #1 de méditation au Maroc. Plus de 25 000 utilisateurs font confiance à Zen_Mind pour leur
              bien-être quotidien.
            </p>
            <button
              onClick={handleDownload}
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center shadow-sm hover:shadow-md transition-all"
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger APK
            </button>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-violet-600 transition-colors text-sm">
                Accueil
              </Link>
              <Link href="/conseils" className="block text-gray-600 hover:text-violet-600 transition-colors text-sm">
                Conseils
              </Link>
              <Link href="/blog" className="block text-gray-600 hover:text-violet-600 transition-colors text-sm">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-violet-600 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 text-sm">
                <Mail className="w-4 h-4 mr-2 text-violet-500" />
                louraknouhaila@gmail.com
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-violet-500" />
                Casablanca, Maroc
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-100 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Zen_Mind. Créé avec <Heart className="w-4 h-4 inline text-violet-500" /> par Nohaila Lourak.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/mentions-legales" className="text-gray-500 hover:text-violet-600 transition-colors">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-500 hover:text-violet-600 transition-colors">
                Confidentialité
              </Link>
              <Link href="/cgu" className="text-gray-500 hover:text-violet-600 transition-colors">
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
