import { NewsComparisonCard } from "@/components/news-comparison-card"
import { InfoPanel } from "@/components/info-panel"
import { newsArticles } from "@/data/sample-news"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">Misinformation Inoculation</h1>
          <span className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full">Research Prototype</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6">
        <InfoPanel />

        <div className="mt-8 space-y-10">
          {newsArticles.map((article) => (
            <NewsComparisonCard key={article.id} article={article} />
          ))}
        </div>
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
