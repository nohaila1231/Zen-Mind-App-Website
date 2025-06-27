import { Card, CardContent } from "@/components/ui/card"

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/30 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Conditions Générales
            <span className="zen-gradient bg-clip-text text-transparent block">d'Utilisation</span>
          </h1>
          <p className="text-slate-600">Dernière mise à jour : 15 juin 2025</p>
        </div>

        <Card className="zen-card border-0">
          <CardContent className="p-8 prose prose-slate max-w-none">
            <h2>1. Objet</h2>
            <p>
              Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation du site web Zen_Min et de
              l'application mobile associée.
            </p>

            <h2>2. Acceptation des conditions</h2>
            <p>
              L'utilisation de nos services implique l'acceptation pleine et entière des présentes CGU. Si vous
              n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
            </p>

            <h2>3. Description des services</h2>
            <p>Zen_Min propose des services de bien-être incluant :</p>
            <ul>
              <li>Exercices de respiration guidée</li>
              <li>Séances de méditation</li>
              <li>Techniques de relaxation</li>
              <li>Conseils bien-être personnalisés</li>
              <li>Contenu éducatif sur le bien-être</li>
            </ul>

            <h2>4. Utilisation des services</h2>
            <p>Vous vous engagez à :</p>
            <ul>
              <li>Utiliser nos services de manière responsable</li>
              <li>Ne pas porter atteinte aux droits de tiers</li>
              <li>Respecter la propriété intellectuelle</li>
              <li>Ne pas tenter de contourner les mesures de sécurité</li>
            </ul>

            <h2>5. Propriété intellectuelle</h2>
            <p>
              Tous les contenus présents sur le site et l'application (textes, images, sons, vidéos, logos) sont
              protégés par les droits de propriété intellectuelle et appartiennent à Zen_Min ou à ses partenaires.
            </p>

            <h2>6. Responsabilité</h2>
            <p>
              Zen_Min s'efforce de fournir des informations exactes mais ne peut garantir l'exactitude, la complétude ou
              l'actualité des informations diffusées. Les conseils fournis ne remplacent pas un avis médical
              professionnel.
            </p>

            <h2>7. Données personnelles</h2>
            <p>
              Le traitement de vos données personnelles est régi par notre Politique de Confidentialité, accessible sur
              le site.
            </p>

            <h2>8. Modification des CGU</h2>
            <p>
              Zen_Min se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en
              vigueur dès leur publication sur le site.
            </p>

            <h2>9. Droit applicable</h2>
            <p>
              Les présentes CGU sont soumises au droit français. Tout litige sera de la compétence exclusive des
              tribunaux de Paris.
            </p>

            <h2>10. Contact</h2>
            <p>Pour toute question relative aux présentes CGU :</p>
            <p>
              <strong>Email :</strong> legal@zen-min.com
              <br />
              <strong>Adresse :</strong> 123 Rue de la Sérénité, 75001 Paris, France
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
