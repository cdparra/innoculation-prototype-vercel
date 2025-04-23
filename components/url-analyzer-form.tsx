"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, LinkIcon } from "lucide-react"
import { analyzeNewsUrl } from "@/actions/analyze-news"
import { useRouter } from "next/navigation"

export function UrlAnalyzerForm() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!url) {
      setError("Please enter a URL")
      return
    }

    // Simple URL validation
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      setError("Please enter a valid URL starting with http:// or https://")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const result = await analyzeNewsUrl(url)
      if (result.success) {
        // Redirect to the analysis page
        router.push(`/analysis/${result.analysisId}`)
      } else {
        setError(result.error || "Failed to analyze the URL")
      }
    } catch (err) {
      setError("An unexpected error occurred")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Analyze News Article</CardTitle>
        <CardDescription>
          Enter a URL to a news article and we'll generate alternative versions to help you identify potential bias and
          misinformation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="url"
                placeholder="https://example.com/news-article"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="pl-9"
                disabled={isLoading}
              />
            </div>
            <Button type="submit" disabled={isLoading} className="whitespace-nowrap">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Article"
              )}
            </Button>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </form>
      </CardContent>
      <CardFooter className="bg-slate-50 border-t text-xs text-slate-500">
        Note: This is a prototype. In a real implementation, this would use AI to analyze the article and generate
        variations.
      </CardFooter>
    </Card>
  )
}
