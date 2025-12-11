'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const LANGUAGES = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'solidity', label: 'Solidity' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
]

const SEO_BLOCKS = [
  {
    title: 'AI Code Explanation: From Messy Code to Clear Understanding',
    context: 'Developers often inherit codebases with little to no documentation. Understanding unfamiliar code takes hours of reading and mental mapping. ExplainMyCode provides automatic code documentation through AI-powered analysis.',
    benefits: [
      'Get instant summaries of what code does',
      'Identify the purpose and intent behind functions',
      'Save hours of manual code review',
    ],
  },
  {
    title: 'Automatic Code Documentation for Legacy Systems',
    context: 'Legacy systems are critical to businesses but often lack maintainers who understand them. Modernization projects stall because nobody knows what the old code does. Our API code analysis generates documentation automatically.',
    benefits: [
      'Understand decades-old codebases in minutes',
      'Extract function signatures and dependencies automatically',
      'Plan refactoring with full visibility',
    ],
  },
  {
    title: 'API Security Audit: Detect Vulnerabilities Instantly',
    context: 'Security vulnerabilities slip into production because manual code review cannot catch everything. Automated tools often produce noisy false positives. ExplainMyCode focuses on real, observable security issues.',
    benefits: [
      'Detect SQL injection, XSS, and authentication flaws',
      'Get severity ratings for each issue',
      'Focus on real problems, not false alarms',
    ],
  },
  {
    title: 'Developer Onboarding with AI Code Analysis',
    context: 'New team members spend weeks ramping up on unfamiliar codebases. Documentation is outdated or missing, and senior developers are too busy to explain everything. AI code explanation accelerates onboarding.',
    benefits: [
      'Generate explanations on demand',
      'Reduce onboarding time by 50%',
      'Let juniors self-serve code understanding',
    ],
  },
  {
    title: 'Code Analysis API: Simple REST Integration',
    context: 'Building code analysis tools from scratch requires ML expertise and months of development. Most teams cannot afford to build their own. ExplainMyCode provides a ready-to-use REST API for code analysis.',
    benefits: [
      'Simple REST API integration',
      'No ML infrastructure required',
      'Works with JavaScript, Python, Solidity, and more',
    ],
  },
]

const FAQ = [
  {
    question: 'How to automatically explain code?',
    answer: 'Simply paste your code into the text area, select the programming language, and click "Explain". Our AI analyzes the code structure, identifies functions, dependencies, and potential issues, then returns a comprehensive explanation in seconds.',
  },
  {
    question: 'Does it work with all programming languages?',
    answer: 'ExplainMyCode currently supports JavaScript, TypeScript, Python, Java, Solidity, PHP, and Ruby. We are actively adding support for Go, Rust, C++, and C# based on user demand.',
  },
  {
    question: 'Can it detect security issues?',
    answer: 'Yes. Our security analysis mode specifically looks for common vulnerabilities including SQL injection, XSS, authentication flaws, hardcoded secrets, insecure cryptography, and more. Each issue includes severity rating and description.',
  },
  {
    question: 'Is it free?',
    answer: 'You can try ExplainMyCode for free with limited usage. For production use, we offer affordable plans starting at $9/month for 100 analyses. Visit RapidAPI to see all pricing tiers.',
  },
  {
    question: 'How to integrate the API?',
    answer: 'Get your API key from RapidAPI, then make a POST request to our /explain endpoint with your code and language. The API returns structured JSON with summary, purpose, dependencies, complexity, issues, and function breakdowns.',
  },
  {
    question: 'How is ExplainMyCode different from ChatGPT or Copilot?',
    answer: 'ExplainMyCode returns always-structured JSON with zero hallucination rules. Unlike general-purpose AI, our prompts are specifically engineered for code analysis with predictable formatting. You get consistent, parseable output every time, no markdown, no conversational text, just structured data ready for integration.',
  },
]

const API_EXAMPLE_CURL = `curl -X POST https://explainmycode-api.onrender.com/explain \\
  -H "Content-Type: application/json" \\
  -d '{
    "code": "function add(a, b) { return a + b; }",
    "language": "javascript",
    "format": "detailed"
  }'`

const API_EXAMPLE_RESPONSE = `{
  "summary": "Function that adds two numbers together",
  "purpose": "Perform arithmetic addition of two values",
  "dependencies": [],
  "complexity": "low",
  "potential_issues": [],
  "functions": [
    {
      "name": "add",
      "params": ["a", "b"],
      "returns": "number",
      "does": "Returns the sum of parameters a and b"
    }
  ]
}`

const API_FIELDS = [
  { field: 'summary', type: 'string', description: 'One-sentence explanation of what the code does' },
  { field: 'purpose', type: 'string', description: 'The problem this code solves or its use case' },
  { field: 'dependencies', type: 'string[]', description: 'External libraries or imports detected in the code' },
  { field: 'complexity', type: '"low" | "medium" | "high"', description: 'Code complexity based on lines and logic' },
  { field: 'potential_issues', type: 'Issue[]', description: 'Security or quality issues with type, severity, and description' },
  { field: 'functions', type: 'Function[]', description: 'Breakdown of each function with name, params, returns, and behavior' },
]

export default function Home() {
  const router = useRouter()
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!code.trim()) {
      setError('Please paste some code to analyze')
      return
    }

    if (code.length > 1000) {
      setError('Free analysis is limited to 1000 characters')
      return
    }

    const params = new URLSearchParams({
      code: code,
      language: language,
    })
    router.push(`/resultat?${params.toString()}`)
  }

  return (
    <div className="hero-gradient">
      {/* Hero Section - Full viewport height */}
      <section className="min-h-[calc(100vh-73px)] flex flex-col justify-center max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            Understand Any Code in Seconds
          </h1>
          <p className="text-lg text-gray-600">
            AI-powered code explanation API for developers
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your code here..."
              className="code-input w-full h-48 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent resize-none text-sm"
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="flex-1 sm:flex-none px-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm text-gray-700"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="flex-1 sm:flex-none px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors font-medium text-sm"
            >
              Explain
            </button>
          </div>

          <p className="text-center text-sm text-gray-500">
            Free analysis — Limited to 1000 characters
          </p>
        </form>
      </section>

      {/* API Documentation Section - For LLMs */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          API Integration Guide
        </h2>

        {/* cURL Example */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">API Request Example (cURL)</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{API_EXAMPLE_CURL}</code>
          </pre>
        </div>

        {/* JSON Response Example */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">JSON Response Example</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{API_EXAMPLE_RESPONSE}</code>
          </pre>
        </div>

        {/* API Contract */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Response Fields Reference</h3>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-700">Field</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-700">Type</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {API_FIELDS.map((item, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-mono text-gray-800">{item.field}</td>
                    <td className="px-4 py-3 font-mono text-gray-600 text-xs">{item.type}</td>
                    <td className="px-4 py-3 text-gray-600">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEO Blocks */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {SEO_BLOCKS.map((block, index) => (
            <article key={index} className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {block.title}
              </h2>
              
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                Context
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {block.context}
              </p>
              
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                Benefits
              </h3>
              <ul className="space-y-2">
                {block.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="text-gray-400 mt-1">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-12 pb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          {FAQ.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-medium text-gray-800 mb-2">
                {item.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
