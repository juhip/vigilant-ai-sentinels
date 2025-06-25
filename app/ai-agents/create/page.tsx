import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function CreateAgentPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center mb-6">
        <Link href="/ai-agents" className="mr-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create AI Agent</h1>
          <p className="text-muted-foreground mt-1">Configure a new AI fraud detection agent</p>
        </div>
      </div>

      <Tabs defaultValue="basic" className="mt-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Information</TabsTrigger>
          <TabsTrigger value="detection">Detection Rules</TabsTrigger>
          <TabsTrigger value="actions">Actions & Responses</TabsTrigger>
        </TabsList>
        <TabsContent value="basic" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Set up the core details for your new AI agent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="agent-name">Agent Name</Label>
                <Input id="agent-name" placeholder="e.g., Transaction Monitor" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="agent-description">Description</Label>
                <Textarea
                  id="agent-description"
                  placeholder="Describe what this agent does and its primary purpose"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="agent-type">Agent Type</Label>
                <Select>
                  <SelectTrigger id="agent-type">
                    <SelectValue placeholder="Select agent type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transaction">Transaction Monitor</SelectItem>
                    <SelectItem value="account">Account Security</SelectItem>
                    <SelectItem value="pattern">Pattern Analyzer</SelectItem>
                    <SelectItem value="risk">Risk Assessor</SelectItem>
                    <SelectItem value="behavior">Behavior Monitor</SelectItem>
                    <SelectItem value="custom">Custom Agent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="agent-active">Active Status</Label>
                  <p className="text-sm text-muted-foreground">Enable or disable this agent</p>
                </div>
                <Switch id="agent-active" defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Continue to Detection Rules</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="detection" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Detection Rules</CardTitle>
              <CardDescription>Configure how this agent detects suspicious activity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="data-sources">Data Sources</Label>
                <Select>
                  <SelectTrigger id="data-sources">
                    <SelectValue placeholder="Select data sources" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transactions">Transaction Data</SelectItem>
                    <SelectItem value="logins">Login Activity</SelectItem>
                    <SelectItem value="user-behavior">User Behavior</SelectItem>
                    <SelectItem value="account-changes">Account Changes</SelectItem>
                    <SelectItem value="all">All Data Sources</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="detection-sensitivity">Detection Sensitivity</Label>
                    <p className="text-sm text-muted-foreground">Higher sensitivity may increase false positives</p>
                  </div>
                  <Slider id="detection-sensitivity" defaultValue={[70]} max={100} step={1} className="w-[200px]" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="confidence-threshold">Confidence Threshold</Label>
                    <p className="text-sm text-muted-foreground">Minimum confidence level to trigger an alert</p>
                  </div>
                  <Slider id="confidence-threshold" defaultValue={[65]} max={100} step={1} className="w-[200px]" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="custom-rules">Custom Detection Rules</Label>
                <Textarea
                  id="custom-rules"
                  placeholder="Enter custom rules in JSON format or natural language"
                  rows={5}
                />
                <p className="text-xs text-muted-foreground">
                  Example: "Flag transactions over $1000 from new accounts" or "Alert on login attempts from unusual
                  locations"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="learning-enabled">Adaptive Learning</Label>
                  <p className="text-sm text-muted-foreground">Allow agent to learn from new patterns</p>
                </div>
                <Switch id="learning-enabled" defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Back</Button>
              <Button>Continue to Actions & Responses</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="actions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Actions & Responses</CardTitle>
              <CardDescription>Configure how this agent responds to detected fraud</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-alert">Generate Alerts</Label>
                    <p className="text-sm text-muted-foreground">Automatically create alerts for detected issues</p>
                  </div>
                  <Switch id="auto-alert" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-case">Create Cases</Label>
                    <p className="text-sm text-muted-foreground">Automatically create cases for investigation</p>
                  </div>
                  <Switch id="auto-case" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-block">Block Transactions</Label>
                    <p className="text-sm text-muted-foreground">Automatically block suspicious transactions</p>
                  </div>
                  <Switch id="auto-block" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-users">Notify Users</Label>
                    <p className="text-sm text-muted-foreground">Send notifications to affected users</p>
                  </div>
                  <Switch id="notify-users" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="alert-template">Alert Template</Label>
                <Textarea
                  id="alert-template"
                  placeholder="Template for alert messages"
                  rows={3}
                  defaultValue="Potential fraud detected: {{issue_type}} with confidence {{confidence}}%. Transaction ID: {{transaction_id}}."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notification-channels">Notification Channels</Label>
                <Select>
                  <SelectTrigger id="notification-channels">
                    <SelectValue placeholder="Select notification channels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                    <SelectItem value="slack">Slack</SelectItem>
                    <SelectItem value="webhook">Webhook</SelectItem>
                    <SelectItem value="all">All Channels</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Back</Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Create Agent
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
