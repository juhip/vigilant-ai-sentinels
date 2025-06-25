import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Download, Settings, AlertTriangle, TrendingUp } from "lucide-react"

export default function TransactionsPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transaction Monitoring</h1>
          <p className="text-muted-foreground mt-1">Real-time AML transaction monitoring and rule management</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Configure Rules
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="live" className="space-y-6">
        <TabsList>
          <TabsTrigger value="live">Live Monitoring</TabsTrigger>
          <TabsTrigger value="rules">AML Rules</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Transactions Today</p>
                    <p className="text-2xl font-bold">24,847</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Flagged Transactions</p>
                    <p className="text-2xl font-bold text-red-600">127</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Volume</p>
                    <p className="text-2xl font-bold">$12.4M</p>
                  </div>
                  <div className="text-green-500 text-sm">+8.2%</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">False Positive Rate</p>
                    <p className="text-2xl font-bold text-green-600">2.1%</p>
                  </div>
                  <div className="text-green-500 text-sm">-0.3%</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Live Transaction Feed</CardTitle>
              <CardDescription>Real-time monitoring of all transactions with AML screening</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by customer, transaction ID, or amount..."
                    className="pl-8"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Risk Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Risk Levels</SelectItem>
                    <SelectItem value="high">High Risk</SelectItem>
                    <SelectItem value="medium">Medium Risk</SelectItem>
                    <SelectItem value="low">Low Risk</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3">
                {[
                  {
                    id: "TXN-001",
                    customer: "John Smith",
                    amount: "$25,000",
                    type: "Wire Transfer",
                    risk: "High",
                    status: "Flagged",
                    rules: ["Large Amount", "High-Risk Country"],
                    time: "2 min ago",
                  },
                  {
                    id: "TXN-002",
                    customer: "ABC Corp",
                    amount: "$9,950",
                    type: "ACH Transfer",
                    risk: "Medium",
                    status: "Under Review",
                    rules: ["Structuring Pattern"],
                    time: "5 min ago",
                  },
                  {
                    id: "TXN-003",
                    customer: "Maria Garcia",
                    amount: "$3,200",
                    type: "Cash Deposit",
                    risk: "Low",
                    status: "Cleared",
                    rules: [],
                    time: "8 min ago",
                  },
                ].map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          transaction.risk === "High"
                            ? "bg-red-500"
                            : transaction.risk === "Medium"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                        }`}
                      ></div>
                      <div>
                        <div className="font-medium">{transaction.id}</div>
                        <div className="text-sm text-muted-foreground">{transaction.customer}</div>
                      </div>
                      <div>
                        <div className="font-bold">{transaction.amount}</div>
                        <div className="text-sm text-muted-foreground">{transaction.type}</div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {transaction.rules.map((rule, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {rule}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge
                        variant={
                          transaction.status === "Flagged"
                            ? "destructive"
                            : transaction.status === "Under Review"
                              ? "default"
                              : "outline"
                        }
                      >
                        {transaction.status}
                      </Badge>
                      <div className="text-sm text-muted-foreground">{transaction.time}</div>
                      <Button size="sm" variant="outline">
                        Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AML Rule Engine</CardTitle>
              <CardDescription>Configure and manage anti-money laundering detection rules</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                AML rule configuration interface would be implemented here with rule builder, testing capabilities, and
                performance metrics.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Transaction Analytics</CardTitle>
              <CardDescription>Analyze transaction patterns and AML performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Analytics dashboard would be implemented here with charts, trends, and detailed reporting capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
