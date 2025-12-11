import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ExplainMyCode - AI Code Analysis API',
  description: 'Understand any code in seconds. AI-powered code explanation API for developers. Get summaries, detect issues, and extract dependencies.',
  keywords: 'code analysis, AI, API, code explanation, developer tools, code review, security audit',
  openGraph: {
    title: 'ExplainMyCode - AI Code Analysis API',
    description: 'Understand any code in seconds with AI-powered analysis.',
    url: 'https://explainmycode.tech',
    siteName: 'ExplainMyCode',
    type: 'website',
  },
}

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors">
          ExplainMyCode
        </Link>
        <nav className="flex items-center gap-6">
          <a 
            href="https://rapidapi.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Get API Key
          </a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Alpha DAE. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <Link href="/mentions-legales" className="hover:text-gray-800 transition-colors">
              Mentions légales
            </Link>
            <Link href="/cgu" className="hover:text-gray-800 transition-colors">
              CGU
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-gray-800 transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/contact" className="hover:text-gray-800 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
