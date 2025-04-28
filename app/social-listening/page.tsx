"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Plus, Trash2, Bell, BellOff, ExternalLink, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

// Mock data for demonstration
const initialSources = [
  {
    id: "1",
    name: "The Daily News",
    url: "https://www.dailynews.com",
    category: "News",
    active: true,
    lastChecked: "2 hours ago",
    frequency: "hourly",
  },
  {
    id: "2",
    name: "Tech Insights",
    url: "https://www.techinsights.com",
    category: "Technology",
    active: true,
    lastChecked: "4 hours ago",
    frequency: "daily",
  },
  {
    id: "3",
    name: "Health Today",
    url: "https://www.healthtoday.org",
    category: "Health",
    active: false,
    lastChecked: "2 days ago",
    frequency: "weekly",
  },
]

export default function SocialListeningPage() {
  const [sources, setSources] = useState(initialSources)
  const [newSource, setNewSource] = useState({ name: "", url: "", category: "News", frequency: "daily" })
  const [notifications, setNotifications] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(false)

  const handleAddSource = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newSource.name || !newSource.url) return

    setSources([
      ...sources,
      {
        id: Math.random().toString(36).substring(7),
        ...newSource,
        active: true,
        lastChecked: "Just now",
      },
    ])
    setNewSource({ name: "", url: "", category: "News", frequency: "daily" })
  }

  const toggleSourceActive = (id: string) => {
    setSources(sources.map((source) => (source.id === id ? { ...source, active: !source.active } : source)))
  }

  const removeSource = (id: string) => {
    setSources(sources.filter((source) => source.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">Content Bias Inoculation</h1>
          <span className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full">Research Prototype</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6">
        <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Social Listening Configuration</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Notifications</span>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Tabs defaultValue="sources">
              <TabsList className="mb-4">
                <TabsTrigger value="sources">Monitored Sources</TabsTrigger>
                <TabsTrigger value="topics">Topics & Keywords</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="sources" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Add New Source</CardTitle>
                    <CardDescription>
                      Add websites, blogs, or news sources you want to monitor for content analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddSource} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="source-name">Source Name</Label>
                          <Input
                            id="source-name"
                            placeholder="e.g., The Daily News"
                            value={newSource.name}
                            onChange={(e) => setNewSource({ ...newSource, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="source-url">Website URL</Label>
                          <Input
                            id="source-url"
                            placeholder="https://example.com"
                            value={newSource.url}
                            onChange={(e) => setNewSource({ ...newSource, url: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="source-category">Category</Label>
                          <Select
                            value={newSource.category}
                            onValueChange={(value) => setNewSource({ ...newSource, category: value })}
                          >
                            <SelectTrigger id="source-category">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="News">News</SelectItem>
                              <SelectItem value="Politics">Politics</SelectItem>
                              <SelectItem value="Technology">Technology</SelectItem>
                              <SelectItem value="Health">Health</SelectItem>
                              <SelectItem value="Science">Science</SelectItem>
                              <SelectItem value="Business">Business</SelectItem>
                              <SelectItem value="Entertainment">Entertainment</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="check-frequency">Check Frequency</Label>
                          <Select
                            value={newSource.frequency}
                            onValueChange={(value) => setNewSource({ ...newSource, frequency: value })}
                          >
                            <SelectTrigger id="check-frequency">
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hourly">Hourly</SelectItem>
                              <SelectItem value="daily">Daily</SelectItem>
                              <SelectItem value="weekly">Weekly</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button type="submit" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Source
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Monitored Sources</CardTitle>
                    <CardDescription>Sources currently being monitored for content analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {sources.length === 0 ? (
                      <div className="text-center py-8 text-slate-500">
                        No sources added yet. Add your first source above.
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {sources.map((source) => (
                          <div
                            key={source.id}
                            className="flex items-center justify-between p-4 bg-white border rounded-lg"
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`w-3 h-3 rounded-full mt-1.5 ${
                                  source.active ? "bg-green-500" : "bg-slate-300"
                                }`}
                              ></div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">{source.name}</h3>
                                  <Badge variant="outline">{source.category}</Badge>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-blue-600 hover:underline flex items-center"
                                  >
                                    {source.url}
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                  </a>
                                </div>
                                <div className="flex items-center gap-4 mt-2">
                                  <span className="text-xs text-slate-500">Checked: {source.lastChecked}</span>
                                  <span className="text-xs text-slate-500">Frequency: {source.frequency}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => toggleSourceActive(source.id)}
                                title={source.active ? "Disable monitoring" : "Enable monitoring"}
                              >
                                {source.active ? (
                                  <Bell className="h-4 w-4 text-slate-600" />
                                ) : (
                                  <BellOff className="h-4 w-4 text-slate-400" />
                                )}
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeSource(source.id)}
                                title="Remove source"
                              >
                                <Trash2 className="h-4 w-4 text-red-500" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="bg-slate-50 border-t">
                    <div className="w-full flex justify-between items-center">
                      <span className="text-sm text-slate-500">
                        {sources.filter((s) => s.active).length} of {sources.length} sources active
                      </span>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <RefreshCw className="h-3 w-3" />
                        Check Now
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="topics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Topics & Keywords</CardTitle>
                    <CardDescription>
                      Configure specific topics and keywords to monitor across your sources
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Priority Topics</Label>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Climate Change</Badge>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Healthcare</Badge>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Technology</Badge>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Elections</Badge>
                          <Button variant="outline" size="sm" className="h-6">
                            <Plus className="h-3 w-3 mr-1" />
                            Add Topic
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Keywords</Label>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">AI</Badge>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Renewable Energy</Badge>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Vaccine</Badge>
                          <Button variant="outline" size="sm" className="h-6">
                            <Plus className="h-3 w-3 mr-1" />
                            Add Keyword
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Excluded Terms</Label>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Sports</Badge>
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Celebrity</Badge>
                          <Button variant="outline" size="sm" className="h-6">
                            <Plus className="h-3 w-3 mr-1" />
                            Add Exclusion
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Configure how you want to be notified about new content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Browser Notifications</h3>
                          <p className="text-sm text-slate-500">
                            Receive notifications in your browser when new content is available
                          </p>
                        </div>
                        <Switch checked={notifications} onCheckedChange={setNotifications} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Email Notifications</h3>
                          <p className="text-sm text-slate-500">
                            Receive daily digest emails with new content from your sources
                          </p>
                        </div>
                        <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                      </div>

                      <div className="space-y-2">
                        <Label>Notification Frequency</Label>
                        <Select defaultValue="immediate">
                          <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate</SelectItem>
                            <SelectItem value="hourly">Hourly Digest</SelectItem>
                            <SelectItem value="daily">Daily Digest</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Analysis Preferences</CardTitle>
                    <CardDescription>Configure how content is analyzed and presented</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label>Default Analysis View</Label>
                        <Select defaultValue="side-by-side">
                          <SelectTrigger>
                            <SelectValue placeholder="Select view" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="side-by-side">Side by Side</SelectItem>
                            <SelectItem value="tabbed">Tabbed View</SelectItem>
                            <SelectItem value="highlights-only">Highlights Only</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Auto-highlight Differences</h3>
                          <p className="text-sm text-slate-500">
                            Automatically highlight differences between content versions
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Show Analysis Explanations</h3>
                          <p className="text-sm text-slate-500">Show detailed explanations of content modifications</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Monitoring Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-md">
                    <div className="text-sm text-slate-500">Active Sources</div>
                    <div className="text-2xl font-bold">{sources.filter((s) => s.active).length}</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-md">
                    <div className="text-sm text-slate-500">Articles Analyzed</div>
                    <div className="text-2xl font-bold">24</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-md">
                    <div className="text-sm text-slate-500">Last Check</div>
                    <div className="text-lg font-medium">2 hours ago</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-slate-50 border-t">
                <Button variant="outline" className="w-full">
                  View Analysis History
                </Button>
              </CardFooter>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <span>Add diverse sources to get a balanced perspective</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <span>Use specific keywords to focus on topics you care about</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <span>Check the analysis history to track patterns over time</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 text-slate-200 py-6 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            This is a research prototype designed to explore how exposure to content variants might help build cognitive
            resistance to biased and editorialized information.
          </p>
          <p className="text-xs mt-2 text-slate-400">
            Not for distribution. For educational and research purposes only.
          </p>
        </div>
      </footer>
    </div>
  )
}
