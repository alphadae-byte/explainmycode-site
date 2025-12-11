import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales d\'Utilisation - ExplainMyCode',
}

export default function CGU() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Conditions Générales d&apos;Utilisation</h1>
      
      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">1. Objet</h2>
          <p className="text-gray-600">
            Les présentes conditions générales d&apos;utilisation (CGU) régissent l&apos;accès et l&apos;utilisation 
            du service ExplainMyCode, une API d&apos;analyse de code alimentée par l&apos;intelligence artificielle.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">2. Acceptation des conditions</h2>
          <p className="text-gray-600">
            L&apos;utilisation du service implique l&apos;acceptation pleine et entière des présentes CGU. 
            Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser le service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">3. Description du service</h2>
          <p className="text-gray-600">
            ExplainMyCode fournit une API permettant d&apos;analyser du code source pour en extraire 
            des informations telles que : résumé, objectif, dépendances, complexité, problèmes potentiels 
            et description des fonctions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">4. Utilisation acceptable</h2>
          <p className="text-gray-600">
            L&apos;utilisateur s&apos;engage à utiliser le service de manière légale et conforme aux présentes CGU. 
            Il est interdit d&apos;utiliser le service pour analyser du code malveillant dans le but de l&apos;améliorer 
            ou de contourner des mesures de sécurité.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">5. Limitation de responsabilité</h2>
          <p className="text-gray-600">
            Les analyses fournies par ExplainMyCode sont générées par intelligence artificielle et peuvent 
            contenir des erreurs. L&apos;utilisateur est seul responsable de la vérification et de l&apos;utilisation 
            des résultats. Alpha DAE ne peut être tenu responsable des dommages directs ou indirects 
            résultant de l&apos;utilisation du service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">6. Tarification</h2>
          <p className="text-gray-600">
            Le service propose une offre gratuite limitée et des offres payantes accessibles via RapidAPI. 
            Les tarifs sont susceptibles d&apos;évoluer avec un préavis de 30 jours.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">7. Modification des CGU</h2>
          <p className="text-gray-600">
            Alpha DAE se réserve le droit de modifier les présentes CGU à tout moment. 
            Les utilisateurs seront informés des modifications par publication sur le site.
          </p>
        </section>
      </div>
    </div>
  )
}
