import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CookieConsent from "@/components/CookieConsent"
import CenterPopupAd from "@/components/CenterPopupAd"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Zen_Mind - Application de Relaxation, Méditation et Yoga | Bien-être Maroc",
  description:
    "Découvrez Zen_Mind, l'application #1 de relaxation au Maroc créée par Nohaila Lourak. Techniques de respiration, méditation guidée, yoga et exercices de bien-être pour réduire le stress. Téléchargement gratuit",
  keywords: [
    "relaxation maroc",
    "méditation casablanca",
    "yoga rabat",
    "bien-être maroc",
    "stress marrakech",
    "sommeil fès",
    "application mobile maroc",
    "nohaila lourak",
    "zen mind maroc",
    "détente maroc",
  ].join(", "),
  authors: [{ name: "Nohaila Lourak", url: "https://zen-mind.ma" }],
  creator: "Nohaila Lourak - Développeuse Marocaine",
  publisher: "Zen_Mind Maroc",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://zen-mind.ma",
    title: "Zen_Mind - Application de Relaxation et Méditation #1 au Maroc",
    description:
      "Créée par Nohaila Lourak à Casablanca. Plus de 25 000 marocains utilisent Zen_Mind pour la relaxation, méditation et gestion du stress. Téléchargement gratuit.",
    siteName: "Zen_Mind Maroc",
  },
  alternates: {
    canonical: "https://zen-mind.ma",
  },
  category: "Health & Fitness",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2110412483572077"
         crossOrigin="anonymous"
         ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="google-adsense-account" content="ca-pub-2110412483572077"></meta>
        <meta name="google-site-verification" content="IhpeR-PQeEChJJWXvNm6yTCEWeHUjWJOOtj6FmfYVms" />
        <link rel="canonical" href="https://zen-mind.ma" />

        {/* PropellerAds */}
        <Script
          id="propeller-ads"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, s, id) {
                var js, pjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "//cdn.propellerads.com/tags/tag.js";
                pjs.parentNode.insertBefore(js, pjs);
              }(document, 'script', 'propeller-jssdk'));
            `,
          }}
        />

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
        />

        {/* Raccourcisseurs de liens */}
        <Script
          id="short-links"
          dangerouslySetInnerHTML={{
            __html: `
              // AdFly
              (function(){
                var s = document.createElement('script');
                s.src = 'https://cdn.adf.ly/js/link.js';
                document.head.appendChild(s);
              })();
              
              // Linkvertise
              (function(){
                var s = document.createElement('script');
                s.src = 'https://publisher.linkvertise.com/cdn/linkvertise.js';
                document.head.appendChild(s);
              })();
            `,
          }}
        />

        {/* Schema.org pour le Maroc */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Zen_Mind",
              description: "Application de relaxation et méditation créée au Maroc par Nohaila Lourak",
              applicationCategory: "HealthApplication",
              operatingSystem: "Android",
              author: {
                "@type": "Person",
                name: "Nohaila Lourak",
                nationality: "Marocaine",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "MA",
                  addressLocality: "Casablanca",
                },
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "MAD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "25000",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${poppins.variable}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
        <CenterPopupAd delay={10000} frequency={5} />
      </body>
    </html>
  )
}
