'use client'

import { Metadata } from 'next'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Contact</h1>
      <p className="text-gray-600 mb-10 text-center">
        Une question sur ExplainMyCode, un bug ou une remarque ? 
        Écrivez-nous et nous vous répondrons rapidement.
      </p>
      
      <form 
        action="https://formspree.io/f/xyzrbprk"
        method="POST"
        className="space-y-6 bg-white border border-gray-200 rounded-lg p-6 md:p-8"
      >
        <input type="hidden" name="_subject" value="Nouveau message depuis ExplainMyCode" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
            <input
              type="text"
              name="prenom"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-gray-500 focus:ring-1 focus:ring-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
            <input
              type="text"
              name="nom"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-gray-500 focus:ring-1 focus:ring-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Adresse email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-gray-500 focus:ring-1 focus:ring-gray-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Votre message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-gray-500 focus:ring-1 focus:ring-gray-400 focus:outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors font-medium"
        >
          Envoyer
        </button>
      </form>
    </div>
  )
}
