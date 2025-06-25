import Link from "next/link"
import { ArrowRight, Bell, Shield, Activity, Users, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentAlerts } from "@/components/recent-alerts"
import { MetricsCards } from "@/components/metrics-cards"
import { AIAgentActivity } from "@/components/ai-agent-activity"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold">Fraud Shield</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                3
              </span>
            </Button>
            <Button variant="outline" size="sm">
              Documentation
            </Button>
            <Button size="sm">Upgrade Plan</Button>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-6 lg:py-8">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-accent-foreground">
                <Activity className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/cases"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Shield className="h-4 w-4" />
                Cases
              </Link>
              <Link
                href="/ai-agents"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Users className="h-4 w-4" />
                AI Agents
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex w-full flex-col overflow-hidden py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <Button>
              Create Alert <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <Tabs defaultValue="overview" className="mt-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
              <TabsTrigger value="ai-agents">AI Agents</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <MetricsCards />
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader className="bg-white text-black">
                    <CardTitle className="text-black">Recent Alerts</CardTitle>
                    <CardDescription className="">
                      Latest fraud alerts detected by the system
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentAlerts />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Alerts
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>AI Agent Activity</CardTitle>
                    <CardDescription>Recent actions taken by AI fraud detection agents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AIAgentActivity />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Manage AI Agents
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="alerts" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>All Alerts</CardTitle>
                  <CardDescription>Comprehensive view of all fraud alerts in the system</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This tab would contain a full table of all alerts with filtering and sorting options.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ai-agents" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Agents Overview</CardTitle>
                  <CardDescription>Monitor and configure your AI fraud detection agents</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This tab would contain AI agent configuration, performance metrics, and training options.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
