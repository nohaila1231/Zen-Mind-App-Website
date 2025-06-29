import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import Newsletter from "@/components/Newsletter"
import TempAd from "@/components/TempAd"
import type { Metadata } from "next"
import VideoGallery from "@/components/VideoGallery"

export const metadata: Metadata = {
  title: "Zen_Mind - Application de Relaxation et Méditation #1 au Maroc",
  description:
    "Découvrez Zen_Mind, l'application de bien-être créée par Nohaila Lourak . Plus de 25 000 utilisateurs utilisent nos techniques de relaxation, méditation guidée et exercices de respiration pour réduire le stress et améliorer leur sommeil. Téléchargement gratuit.",
  keywords:
    "relaxation, méditation, respiration, bien-être, stress, sommeil, yoga, cohérence cardiaque, application gratuite, Maroc, Casablanca",
  openGraph: {
    title: "Zen_Mind - Transformez votre bien-être quotidien",
    description:
      "Rejoignez 25 000+ utilisateurs marocains qui ont découvert la sérénité avec Zen_Mind. Techniques de relaxation scientifiquement prouvées.",
    images: [
      {
        url: "https://zen-mind.ma/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Zen_Mind - Application de relaxation et méditation",
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Bannière publicitaire header */}
      {/* <TempAd slot="header-banner" format="horizontal" className="w-full max-w-6xl mx-auto" /> */}

      <Hero />

      {/* Bannière publicitaire entre sections */}
      <TempAd slot="content-banner-1" format="rectangle" className="w-full max-w-sm mx-auto" />

      <Features />

      <VideoGallery />

      {/* Bannière publicitaire entre sections */}
      <TempAd slot="content-banner-2" format="horizontal" className="w-full max-w-4xl mx-auto" />

      <Testimonials />
      <Newsletter />
    </div>
  )
}
