import { getAnalysisResults } from "@/actions/analyze-news"
import { NewsComparisonCard } from "@/components/news-comparison-card"
import { UrlAnalyzerForm } from "@/components/url-analyzer-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"

interface AnalysisPageProps {
  params: {
    id: string
  }
}

export default async function AnalysisPage({ params }: AnalysisPageProps) {
  const { success, article, error } = await getAnalysisResults(params.id)

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">Misinformation Inoculation</h1>
          <span className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full">Research Prototype</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6">
        <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        <h2 className="text-2xl font-bold mb-6">Analysis Results</h2>

        {success && article ? (
          <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h3 className="font-medium text-slate-700 mb-2">Analyzed Article</h3>
              <p className="text-sm text-slate-500 mb-4">
                We've analyzed the content and generated three versions of the article:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>The original (neutral) version</li>
                <li>A version with political bias</li>
                <li>A version containing misinformation</li>
              </ul>
            </div>

            <NewsComparisonCard article={article} />

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Try Another Article</h3>
              <UrlAnalyzerForm />
            </div>
          </div>
        ) : (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium text-red-800 mb-2">Analysis Failed</h3>
            <p className="text-red-700 mb-4">{error || "Unable to retrieve analysis results"}</p>
            <Button asChild>
              <Link href="/">Try Again</Link>
            </Button>
          </div>
        )}
      </main>

      <footer className="bg-slate-800 text-slate-200 py-6 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            This is a research prototype designed to explore how exposure to misinformation variants might help build
            cognitive resistance to false information.
          </p>
          <p className="text-xs mt-2 text-slate-400">
            Not for distribution. For educational and research purposes only.
          </p>
        </div>
      </footer>
    </div>
  )
}

// Loading state
export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className="h-12 w-12 animate-spin text-slate-400" />
      <p className="mt-4 text-slate-600">Analyzing article content...</p>
    </div>
  )
}
