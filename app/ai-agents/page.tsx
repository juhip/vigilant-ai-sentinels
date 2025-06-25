import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { PlusCircle } from "lucide-react"

export default function AIAgentsPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">AI Agents</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Agent
        </Button>
      </div>
      <p className="text-muted-foreground mt-2">Configure and monitor your AI fraud detection agents</p>

      <Tabs defaultValue="active" className="mt-6">
        <TabsList>
          <TabsTrigger value="active">Active Agents</TabsTrigger>
          <TabsTrigger value="configure">Configure</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Transaction Monitor",
                description: "Analyzes transaction patterns to detect anomalies",
                status: "Active",
                detections: 47,
                accuracy: 94.2,
              },
              {
                name: "Account Security",
                description: "Monitors login attempts and account activity",
                status: "Active",
                detections: 23,
                accuracy: 96.8,
              },
              {
                name: "Pattern Analyzer",
                description: "Identifies emerging fraud patterns across users",
                status: "Active",
                detections: 31,
                accuracy: 91.5,
              },
              {
                name: "Risk Assessor",
                description: "Evaluates and scores risk levels for transactions",
                status: "Active",
                detections: 52,
                accuracy: 93.7,
              },
              {
                name: "Behavior Monitor",
                description: "Tracks user behavior for suspicious changes",
                status: "Active",
                detections: 19,
                accuracy: 89.3,
              },
            ].map((agent, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{agent.name}</CardTitle>
                    <div className="rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500">
                      {agent.status}
                    </div>
                  </div>
                  <CardDescription>{agent.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Detections</p>
                      <p className="text-lg font-bold">{agent.detections}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Accuracy</p>
                      <p className="text-lg font-bold">{agent.accuracy}%</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Configure
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="configure" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Agent Configuration</CardTitle>
              <CardDescription>Customize how your AI agents detect and respond to fraud</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="transaction-sensitivity">Transaction Sensitivity</Label>
                    <p className="text-sm text-muted-foreground">
                      Adjust how sensitive the agent is to unusual transactions
                    </p>
                  </div>
                  <Slider id="transaction-sensitivity" defaultValue={[75]} max={100} step={1} className="w-[200px]" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-block">Automatic Blocking</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow agents to automatically block high-risk transactions
                    </p>
                  </div>
                  <Switch id="auto-block" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="learning-mode">Continuous Learning</Label>
                    <p className="text-sm text-muted-foreground">Enable agents to learn from new fraud patterns</p>
                  </div>
                  <Switch id="learning-mode" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="alert-threshold">Alert Threshold</Label>
                    <p className="text-sm text-muted-foreground">Set the confidence threshold for generating alerts</p>
                  </div>
                  <Slider id="alert-threshold" defaultValue={[65]} max={100} step={1} className="w-[200px]" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Configuration</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="performance" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Agent Performance</CardTitle>
              <CardDescription>Monitor the effectiveness of your AI fraud detection agents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Transaction Monitor</h3>
                    <span className="text-sm font-medium text-green-500">94.2% Accuracy</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "94.2%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Account Security</h3>
                    <span className="text-sm font-medium text-green-500">96.8% Accuracy</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "96.8%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Pattern Analyzer</h3>
                    <span className="text-sm font-medium text-green-500">91.5% Accuracy</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "91.5%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Risk Assessor</h3>
                    <span className="text-sm font-medium text-green-500">93.7% Accuracy</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "93.7%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Behavior Monitor</h3>
                    <span className="text-sm font-medium text-amber-500">89.3% Accuracy</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-amber-500" style={{ width: "89.3%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Detailed Reports
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
