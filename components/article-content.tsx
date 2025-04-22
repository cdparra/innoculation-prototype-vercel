import Image from "next/image"
import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ArticleContentProps {
  content: string
  source: string
  imageUrl: string
  isOriginal: boolean
  biasType?: "political" | "misinformation"
}

export function ArticleContent({ content, source, imageUrl, isOriginal, biasType }: ArticleContentProps) {
  return (
    <div>
      {!isOriginal && (
        <Alert
          variant="destructive"
          className={
            biasType === "political"
              ? "bg-amber-50 text-amber-800 border-amber-200"
              : "bg-red-50 text-red-800 border-red-200"
          }
        >
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-sm">
            {biasType === "political"
              ? "This version contains political bias and framing."
              : "This version contains false information."}
            {content.includes('class="bg-yellow-200') && (
              <span className="ml-1">Yellow highlights show potential differences from the original.</span>
            )}
          </AlertDescription>
        </Alert>
      )}

      <div className="relative h-48 sm:h-64 md:h-80 w-full my-4 rounded-md overflow-hidden">
        <Image src={imageUrl || "/placeholder.svg"} alt="Article image" fill className="object-cover" />
      </div>

      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />

      <div className="mt-4 text-sm text-slate-500">Source: {source}</div>
    </div>
  )
}
