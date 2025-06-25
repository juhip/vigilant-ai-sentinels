import Link from "next/link"
import { Bell, Shield, Activity, Users, Settings, AlertTriangle, TrendingUp, Eye, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AMLMetrics } from "@/components/aml-metrics"
import { TransactionMonitoring } from "@/components/transaction-monitoring"
import { SuspiciousActivities } from "@/components/suspicious-activities"
import { ComplianceAlerts } from "@/components/compliance-alerts"

export default function AMLDashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center">
          <div className="mr-6 flex">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg">AML Shield</span>
                <div className="text-xs text-muted-foreground">Anti-Money Laundering Platform</div>
              </div>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-3">
            <div className="flex items-center space-x-2 text-sm">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">Real-time Monitoring Active</span>
            </div>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                7
              </span>
            </Button>
            <Button variant="outline" size="sm">
              Generate SAR
            </Button>
            <Button size="sm">New Investigation</Button>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8">
        <aside className="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-6">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2.5 text-blue-700 font-medium"
              >
                <Activity className="h-4 w-4" />
                AML Dashboard
              </Link>
              <Link
                href="/transactions"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-muted-foreground hover:bg-gray-100 hover:text-gray-900"
              >
                <TrendingUp className="h-4 w-4" />
                Transaction Monitoring
              </Link>
              <Link
                href="/investigations"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-muted-foreground hover:bg-gray-100 hover:text-gray-900"
              >
                <Eye className="h-4 w-4" />
                Investigations
              </Link>
              <Link
                href="/customers"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-muted-foreground hover:bg-gray-100 hover:text-gray-900"
              >
                <Users className="h-4 w-4" />
                Customer Risk
              </Link>
              <Link
                href="/compliance"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-muted-foreground hover:bg-gray-100 hover:text-gray-900"
              >
                <FileText className="h-4 w-4" />
                Compliance Reports
              </Link>
              <Link
                href="/alerts"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-muted-foreground hover:bg-gray-100 hover:text-gray-900"
              >
                <AlertTriangle className="h-4 w-4" />
                Alert Management
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-muted-foreground hover:bg-gray-100 hover:text-gray-900"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </aside>

        <main className="flex w-full flex-col overflow-hidden py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">AML Dashboard</h1>
              <p className="text-muted-foreground mt-1">Real-time anti-money laundering monitoring and compliance</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-green-600 border-green-200">
                <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                All Systems Operational
              </Badge>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="monitoring">Live Monitoring</TabsTrigger>
              <TabsTrigger value="investigations">Investigations</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <AMLMetrics />

              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>High-Risk Alerts</span>
                      <Badge variant="destructive">7 Active</Badge>
                    </CardTitle>
                    <CardDescription>Suspicious activities requiring immediate attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SuspiciousActivities />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Alerts
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Investigations</CardTitle>
                    <CardDescription>Latest AML investigations and their status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          id: "INV-2024-001",
                          customer: "John Smith",
                          type: "Structuring",
                          status: "Under Review",
                          priority: "High",
                          created: "2 hours ago",
                        },
                        {
                          id: "INV-2024-002",
                          customer: "ABC Corp Ltd",
                          type: "Unusual Transaction Pattern",
                          status: "Escalated",
                          priority: "Critical",
                          created: "5 hours ago",
                        },
                        {
                          id: "INV-2024-003",
                          customer: "Maria Garcia",
                          type: "Cross-Border Activity",
                          status: "Closed",
                          priority: "Medium",
                          created: "1 day ago",
                        },
                      ].map((investigation) => (
                        <div key={investigation.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium">{investigation.id}</span>
                              <Badge
                                variant={
                                  investigation.priority === "Critical"
                                    ? "destructive"
                                    : investigation.priority === "High"
                                      ? "default"
                                      : "secondary"
                                }
                              >
                                {investigation.priority}
                              </Badge>
                            </div>
                            <p className="text-sm font-medium mt-1">{investigation.customer}</p>
                            <p className="text-xs text-muted-foreground">
                              {investigation.type} • {investigation.created}
                            </p>
                          </div>
                          <Badge variant={investigation.status === "Closed" ? "outline" : "default"}>
                            {investigation.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Investigations
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance Summary</CardTitle>
                  <CardDescription>Regulatory reporting and compliance status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">SARs Filed (MTD)</span>
                        <span className="text-2xl font-bold">12</span>
                      </div>
                      <div className="text-xs text-muted-foreground">+3 from last month</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">CTRs Filed (MTD)</span>
                        <span className="text-2xl font-bold">847</span>
                      </div>
                      <div className="text-xs text-muted-foreground">+12% from last month</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Compliance Score</span>
                        <span className="text-2xl font-bold text-green-600">98.2%</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Above regulatory threshold</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6">
              <TransactionMonitoring />
            </TabsContent>

            <TabsContent value="investigations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Investigations</CardTitle>
                  <CardDescription>Manage ongoing AML investigations and case files</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Investigation management interface would be implemented here with case details, evidence tracking,
                    and workflow management.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compliance" className="space-y-6">
              <ComplianceAlerts />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
