'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface PotentialIssue {
  type: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  description: string
}

interface FunctionInfo {
  name: string
  params: string[]
  returns: string
  does: string
}

interface AnalysisResult {
  summary: string
  purpose: string
  dependencies: string[]
  complexity: 'low' | 'medium' | 'high'
  potential_issues: PotentialIssue[]
  functions: FunctionInfo[]
}

const API_URL = 'https://explainmycode-api.onrender.com/explain'

const severityColors = {
  low: 'bg-blue-100 text-blue-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-orange-100 text-orange-800',
  critical: 'bg-red-100 text-red-800',
}

const complexityColors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
}

export default function ResultatPage() {
  const searchParams = useSearchParams()
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const code = searchParams.get('code') || ''
  const language = searchParams.get('language') || 'javascript'

  useEffect(() => {
    async function analyze() {
      if (!code) {
        setError('No code provided')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code,
            language,
            format: 'detailed',
          }),
        })

        if (!response.ok) {
          throw new Error('Analysis failed')
        }

        const data = await response.json()
        setResult(data)
      } catch (err) {
        setError('Failed to analyze code. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    analyze()
  }, [code, language])

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-2 border-gray-300 border-t-gray-800 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Analyzing your code...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Try Again
          </Link>
        </div>
      </div>
    )
  }

  if (!result) {
    return null
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Analysis Result</h1>

      <div className="space-y-6">
        {/* Summary & Purpose */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 fade-in">
          <div className="mb-4">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Summary</h2>
            <p className="text-gray-800">{result.summary}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Purpose</h2>
            <p className="text-gray-800">{result.purpose}</p>
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Complexity</h2>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${complexityColors[result.complexity]}`}>
              {result.complexity.charAt(0).toUpperCase() + result.complexity.slice(1)}
            </span>
          </div>
        </div>

        {/* Dependencies */}
        {result.dependencies && result.dependencies.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 fade-in delay-1">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Dependencies</h2>
            <div className="flex flex-wrap gap-2">
              {result.dependencies.map((dep, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-mono">
                  {dep}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Potential Issues */}
        {result.potential_issues && result.potential_issues.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 fade-in delay-2">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Potential Issues</h2>
            <div className="space-y-3">
              {result.potential_issues.map((issue, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${severityColors[issue.severity]}`}>
                    {issue.severity}
                  </span>
                  <div>
                    <p className="font-medium text-gray-800">{issue.type}</p>
                    <p className="text-sm text-gray-600">{issue.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Functions */}
        {result.functions && result.functions.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 fade-in delay-3">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Functions</h2>
            <div className="space-y-4">
              {result.functions.map((fn, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-mono text-gray-800 mb-1">
                    {fn.name}({fn.params.join(', ')})
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="text-gray-500">→ returns:</span> {fn.returns}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="text-gray-500">→ does:</span> {fn.does}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 fade-in delay-4">
          <Link
            href="/"
            className="flex-1 text-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors font-medium"
          >
            Analyze Another Code
          </Link>
          <a
            href="https://rapidapi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
          >
            Get API Key on RapidAPI
          </a>
        </div>
      </div>
    </div>
  )
}
