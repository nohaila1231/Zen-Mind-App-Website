import { Card, CardContent } from "@/components/ui/card"

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/30 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Politique de
            <span className="zen-gradient bg-clip-text text-transparent block">Confidentialité</span>
          </h1>
          <p className="text-slate-600">Dernière mise à jour : 15 décembre 2024</p>
        </div>

        <Card className="zen-card border-0">
          <CardContent className="p-8 prose prose-slate max-w-none">
            <h2>1. Collecte des données</h2>
            <p>Nous collectons les données personnelles que vous nous fournissez volontairement lorsque vous :</p>
            <ul>
              <li>Vous inscrivez à notre newsletter</li>
              <li>Téléchargez notre application</li>
              <li>Nous contactez via le formulaire</li>
              <li>Créez un compte utilisateur</li>
            </ul>

            <h2>2. Utilisation des données</h2>
            <p>Vos données personnelles sont utilisées pour :</p>
            <ul>
              <li>Vous fournir nos services de bien-être</li>
              <li>Personnaliser votre expérience</li>
              <li>Vous envoyer des informations pertinentes</li>
              <li>Améliorer nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2>3. Partage des données</h2>
            <p>
              Nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers. Nous pouvons partager vos
              informations uniquement dans les cas suivants :
            </p>
            <ul>
              <li>Avec votre consentement explicite</li>
              <li>Pour respecter une obligation légale</li>
              <li>Avec nos prestataires de services (hébergement, analytics)</li>
            </ul>

            <h2>4. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre
              l'accès non autorisé, la modification, la divulgation ou la destruction.
            </p>

            <h2>5. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>

            <h2>6. Cookies et technologies similaires</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences de
              cookies dans les paramètres de votre navigateur.
            </p>

            <h2>7. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits,
              contactez-nous à :
            </p>
            <p>
              <strong>Email :</strong> privacy@zen-min.com
              <br />
              <strong>Adresse :</strong> 123 Rue de la Sérénité, 75001 Paris, France
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
