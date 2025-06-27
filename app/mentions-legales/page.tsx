import { Card, CardContent } from "@/components/ui/card"

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/30 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Mentions
            <span className="zen-gradient bg-clip-text text-transparent block">Légales</span>
          </h1>
        </div>

        <Card className="zen-card border-0">
          <CardContent className="p-8 prose prose-slate max-w-none">
            <h2>Éditeur du site</h2>
            <p>
              <strong>Zen_Min</strong>
              <br />
              Société par actions simplifiée
              <br />
              Capital social : 10 000 €<br />
              RCS Paris : 123 456 789
              <br />
              SIRET : 123 456 789 00012
              <br />
              TVA intracommunautaire : FR12 123456789
            </p>

            <p>
              <strong>Siège social :</strong>
              <br />
              123 Rue de la Sérénité
              <br />
              75001 Paris, France
            </p>

            <p>
              <strong>Directeur de la publication :</strong> Marie Dubois
              <br />
              <strong>Contact :</strong> contact@zen-min.com
              <br />
              <strong>Téléphone :</strong> +33 1 23 45 67 89
            </p>

            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              <strong>Vercel Inc.</strong>
              <br />
              340 S Lemon Ave #4133
              <br />
              Walnut, CA 91789, États-Unis
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la
              propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
              téléchargeables et les représentations iconographiques et photographiques.
            </p>

            <h2>Données personnelles</h2>
            <p>
              Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur
              la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et
              d'opposition aux données personnelles vous concernant.
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et mesurer l'audience. En continuant
              votre navigation, vous acceptez l'utilisation de ces cookies.
            </p>

            <h2>Responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible. Toutefois, Zen_Min ne pourra être
              tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
