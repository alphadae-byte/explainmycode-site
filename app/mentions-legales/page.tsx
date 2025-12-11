import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales - ExplainMyCode',
}

export default function MentionsLegales() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Mentions légales</h1>
      
      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Éditeur du site</h2>
          <p className="text-gray-600">
            Le site ExplainMyCode.tech est édité par :<br />
            <strong>Alpha DAE</strong><br />
            Auto-entrepreneur<br />
            France
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Hébergement</h2>
          <p className="text-gray-600">
            Ce site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789, USA
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Propriété intellectuelle</h2>
          <p className="text-gray-600">
            L&apos;ensemble du contenu de ce site (textes, images, logos, code) est la propriété exclusive d&apos;Alpha DAE, 
            sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Responsabilité</h2>
          <p className="text-gray-600">
            Les informations fournies sur ce site le sont à titre indicatif. Alpha DAE ne saurait garantir 
            l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées. L&apos;utilisateur est seul 
            responsable de l&apos;utilisation qu&apos;il fait des résultats d&apos;analyse fournis par l&apos;API.
          </p>
        </section>
      </div>
    </div>
  )
}
