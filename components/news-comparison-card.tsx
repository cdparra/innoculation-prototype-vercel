"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import type { Article } from "@/types/article"
import { ArticleContent } from "@/components/article-content"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, AlertCircle, CheckCircle2, Info } from "lucide-react"
import { highlightDifferences } from "@/utils/highlight-differences"

interface NewsComparisonCardProps {
  article: Article
}

export function NewsComparisonCard({ article }: NewsComparisonCardProps) {
  const [showExplanation, setShowExplanation] = useState(false)
  const [highlightDiffs, setHighlightDiffs] = useState(false)

  return (
    <Card className="shadow-md">
      <CardHeader className="bg-slate-50 border-b">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-slate-100">
                {article.category}
              </Badge>
              <span className="text-sm text-slate-500">{article.date}</span>
            </div>
            <CardTitle className="text-xl">{article.title}</CardTitle>
          </div>
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center gap-1 mr-2"
            >
              <Info className="h-4 w-4" />
              {showExplanation ? "Hide" : "Show"} Analysis
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setHighlightDiffs(!highlightDiffs)}
              className="flex items-center gap-1"
            >
              {highlightDiffs ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {highlightDiffs ? "Hide" : "Show"} Differences
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="original">
          <TabsList className="w-full rounded-none border-b grid grid-cols-3">
            <TabsTrigger value="original" className="data-[state=active]:bg-green-50">
              <CheckCircle2 className="h-4 w-4 mr-2 text-green-600" />
              Original
            </TabsTrigger>
            <TabsTrigger value="political" className="data-[state=active]:bg-amber-50">
              <AlertCircle className="h-4 w-4 mr-2 text-amber-600" />
              Political Bias
            </TabsTrigger>
            <TabsTrigger value="false" className="data-[state=active]:bg-red-50">
              <AlertCircle className="h-4 w-4 mr-2 text-red-600" />
              Misinformation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="original" className="p-6">
            <ArticleContent
              content={article.originalContent}
              source={article.source}
              imageUrl={article.imageUrl}
              isOriginal={true}
            />
          </TabsContent>

          <TabsContent value="political" className="p-6">
            <ArticleContent
              content={
                highlightDiffs
                  ? highlightDifferences(article.originalContent, article.politicalBiasContent)
                  : article.politicalBiasContent
              }
              source={`${article.source} (Modified with Political Bias)`}
              imageUrl={article.imageUrl}
              isOriginal={false}
              biasType="political"
            />

            {showExplanation && (
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-md">
                <h4 className="font-semibold text-amber-800 mb-2">Political Bias Analysis</h4>
                <p className="text-sm text-amber-700">{article.politicalBiasExplanation}</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="false" className="p-6">
            <ArticleContent
              content={
                highlightDiffs
                  ? highlightDifferences(article.originalContent, article.misinformationContent)
                  : article.misinformationContent
              }
              source={`${article.source} (Modified with Misinformation)`}
              imageUrl={article.imageUrl}
              isOriginal={false}
              biasType="misinformation"
            />

            {showExplanation && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <h4 className="font-semibold text-red-800 mb-2">Misinformation Analysis</h4>
                <p className="text-sm text-red-700">{article.misinformationExplanation}</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
