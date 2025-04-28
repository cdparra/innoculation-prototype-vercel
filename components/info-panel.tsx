import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export function InfoPanel() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Content Bias Inoculation Research</CardTitle>
            <CardDescription>
              Exploring how exposure to content variants might help build resistance to biased information
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/social-listening" className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              Configure Sources
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="about">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
            <TabsTrigger value="theory">Theory</TabsTrigger>
            <TabsTrigger value="instructions">Instructions</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-4 mt-4">
            <p>
              This prototype demonstrates how AI can generate alternative versions of news content to help people
              recognize different types of content bias, including forms of political bias, in media.
            </p>
            <p>Each article is presented in three versions:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Original:</strong> The factual, unbiased version of the news
              </li>
              <li>
                <strong>Political Bias:</strong> The same news reframed with political bias
              </li>
              <li>
                <strong>Editorialized:</strong> The news with editorialized content that may not be factually accurate
                or contain highly opinionated content
              </li>
            </ul>
          </TabsContent>

          <TabsContent value="how-it-works" className="space-y-4 mt-4">
            <p>
              This platform combines social listening with AI-powered content analysis to help you identify and
              understand bias in news and articles:
            </p>

            <h3 className="font-semibold text-lg mt-6 mb-2">Social Listening</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Monitor Specific Sources:</strong> Configure the platform to monitor news sites, blogs, and
                social media channels that interest you
              </li>
              <li>
                <strong>Real-time Updates:</strong> Receive notifications when new content is published from your
                monitored sources
              </li>
              <li>
                <strong>Topic Filtering:</strong> Focus on specific topics or keywords that matter to you
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-6 mb-2">Content Analysis</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Bias Detection:</strong> Our system analyzes incoming content to identify potential bias markers
              </li>
              <li>
                <strong>Alternative Versions:</strong> For each article, we generate alternative versions showing how
                the same information could be presented with different biases
              </li>
              <li>
                <strong>Highlight Differences:</strong> Compare versions side-by-side with highlighted differences to
                see exactly how language choices affect perception
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mt-4">
              <p className="text-sm text-blue-800">
                To get started with social listening, visit the{" "}
                <Link href="/social-listening" className="underline font-medium">
                  Configure Sources
                </Link>{" "}
                page to set up your monitored sites and notification preferences.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="theory" className="space-y-4 mt-4">
            <p>
              This prototype is based on the concept of "inoculation theory" - the idea that exposing people to weakened
              forms of misinformation can help them build resistance to it, similar to how vaccines work by exposing the
              immune system to weakened forms of a virus.
            </p>
            <p>
              Research suggests that pre-emptively exposing people to techniques commonly used to spread misinformation
              can help them identify and resist such content when they encounter it in the wild.
            </p>
          </TabsContent>

          <TabsContent value="instructions" className="space-y-4 mt-4">
            <p>To use this prototype:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Read through the original version of each article</li>
              <li>Compare it with the politically biased and editorialized content versions</li>
              <li>Click "Show Analysis" to see explanations of how the content was modified</li>
              <li>Try to identify patterns and techniques used to manipulate information</li>
            </ol>
            <p>Additional features:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Show Differences:</strong> Click this button to highlight potential differences between the
                original and modified versions
              </li>
              <li>
                <strong>Show Analysis:</strong> Click this button to see explanations of how and why the content was
                modified
              </li>
              <li>
                <strong>Configure Sources:</strong> Set up social listening to monitor specific sites for new content
              </li>
            </ul>
            <p className="text-sm text-slate-500 mt-4">
              Note: All articles in this prototype are for demonstration purposes only.
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
