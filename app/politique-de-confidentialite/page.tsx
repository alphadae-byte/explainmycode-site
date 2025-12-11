import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité - ExplainMyCode',
}

export default function PolitiqueConfidentialite() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Politique de confidentialité</h1>
      
      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">1. Collecte des données</h2>
          <p className="text-gray-600">
            ExplainMyCode collecte uniquement les données nécessaires au fonctionnement du service :
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Code source soumis pour analyse (non stocké)</li>
            <li>Métadonnées de requête (langue, format, timestamp)</li>
            <li>Données d&apos;utilisation anonymisées</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">2. Non-stockage du code</h2>
          <p className="text-gray-600">
            <strong>Important :</strong> Le code source soumis à l&apos;API n&apos;est jamais stocké sur nos serveurs. 
            Il est traité en temps réel puis immédiatement supprimé. Nous ne conservons aucune copie 
            du code analysé.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">3. Utilisation des données</h2>
          <p className="text-gray-600">
            Les métadonnées collectées sont utilisées exclusivement pour :
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Améliorer la qualité du service</li>
            <li>Établir des statistiques d&apos;utilisation</li>
            <li>Détecter et prévenir les abus</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">4. Partage des données</h2>
          <p className="text-gray-600">
            Nous ne vendons ni ne partageons vos données avec des tiers, à l&apos;exception de :
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>OpenAI (traitement IA, soumis à leur politique de confidentialité)</li>
            <li>Obligations légales si requises par la loi</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">5. Cookies</h2>
          <p className="text-gray-600">
            Ce site utilise uniquement des cookies techniques essentiels au fonctionnement. 
            Aucun cookie publicitaire ou de tracking n&apos;est utilisé.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">6. Vos droits</h2>
          <p className="text-gray-600">
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression 
            de vos données. Pour exercer ces droits, contactez-nous via la page Contact.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">7. Contact</h2>
          <p className="text-gray-600">
            Pour toute question relative à cette politique de confidentialité, 
            veuillez nous contacter via notre page de contact.
          </p>
        </section>
      </div>
    </div>
  )
}
