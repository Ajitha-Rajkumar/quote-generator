'use client'

import { useState, useEffect } from 'react'

interface Quote {
  text: string
  author: string
}

export default function Home() {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const fetchQuote = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/quote')
      const data = await response.json()
      setQuote(data)
      setIsFavorite(false)
    } catch (error) {
      console.error('Failed to fetch quote:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  const copyToClipboard = () => {
    if (quote) {
      const text = `"${quote.text}" - ${quote.author}`
      navigator.clipboard.writeText(text)
      alert('Quote copied to clipboard!')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Card Container */}
        <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Quote Generator
            </h1>
            <p className="text-slate-400 text-sm md:text-base">
              Discover daily motivation
            </p>
          </div>

          {/* Quote Display */}
          <div className="mb-8 relative">
            <div className="absolute top-0 left-0 text-6xl text-blue-400/20 font-serif">
              "
            </div>
            {quote ? (
              <div className="relative z-10 pt-6 pb-8">
                <p className="text-2xl md:text-3xl font-light text-white mb-4 leading-relaxed">
                  {quote.text}
                </p>
                <p className="text-right text-lg text-slate-300 font-semibold">
                  — {quote.author}
                </p>
              </div>
            ) : (
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-slate-700 rounded"></div>
                <div className="h-8 bg-slate-700 rounded w-3/4"></div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={fetchQuote}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-slate-600 disabled:to-slate-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:opacity-50"
            >
              <span className={isLoading ? 'inline-block animate-spin' : 'inline-block'}>🔄</span>
              New Quote
            </button>

            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 ${
                isFavorite
                  ? 'bg-red-500/20 text-red-300 border border-red-500/50 hover:bg-red-500/30'
                  : 'bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:bg-slate-600/50'
              }`}
            >
              <span>{isFavorite ? '❤️' : '🤍'}</span>
              {isFavorite ? 'Liked' : 'Like'}
            </button>

            <button
              onClick={copyToClipboard}
              disabled={!quote}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 disabled:bg-slate-700/20 disabled:cursor-not-allowed text-slate-300 font-semibold rounded-lg transition-all duration-200 border border-slate-600/50"
            >
              📋 Copy
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-slate-500 text-sm">
            <p>Click "New Quote" to get another inspiration</p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </main>
  )
}
