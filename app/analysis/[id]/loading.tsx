import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">Content Bias Inoculation</h1>
          <span className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full">Research Prototype</span>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <Loader2 className="h-12 w-12 animate-spin text-slate-400" />
        <p className="mt-4 text-slate-600 text-lg">Analyzing article content...</p>
        <p className="mt-2 text-slate-500 text-sm max-w-md text-center">
          We're processing the article and generating alternative versions with different biases. This may take a
          moment.
        </p>
      </main>

      <footer className="bg-slate-800 text-slate-200 py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            This is a research prototype designed to explore how exposure to content variants might help build cognitive
            resistance to biased and editorialized information.
          </p>
        </div>
      </footer>
    </div>
  )
}
