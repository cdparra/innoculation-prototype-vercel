import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function InfoPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Misinformation Inoculation Research</CardTitle>
        <CardDescription>
          Exploring how exposure to misinformation variants might help build resistance to false information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="about">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="theory">Theory</TabsTrigger>
            <TabsTrigger value="instructions">Instructions</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-4 mt-4">
            <p>
              This prototype demonstrates how AI can generate alternative versions of news content to help people
              recognize misinformation and political bias in media.
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
                <strong>Misinformation:</strong> The news with false information inserted
              </li>
            </ul>
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
              <li>Compare it with the politically biased and misinformation versions</li>
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
