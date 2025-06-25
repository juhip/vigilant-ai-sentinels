import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Download, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export function TransactionMonitoring() {
  const transactions = [
    {
      id: "TXN-789123",
      customer: "John Smith",
      type: "Wire Transfer",
      amount: "$25,000",
      status: "Flagged",
      riskScore: 8.2,
      destination: "Cayman Islands",
      timestamp: "2024-01-15 14:30:22",
      rules: ["High-Risk Jurisdiction", "Large Amount"],
    },
    {
      id: "TXN-789124",
      customer: "ABC Corp Ltd",
      type: "ACH Transfer",
      amount: "$9,950",
      status: "Under Review",
      riskScore: 7.5,
      destination: "Domestic",
      timestamp: "2024-01-15 14:28:15",
      rules: ["Structuring Pattern"],
    },
    {
      id: "TXN-789125",
      customer: "Maria Garcia",
      type: "Cash Deposit",
      amount: "$8,500",
      status: "Cleared",
      riskScore: 2.1,
      destination: "N/A",
      timestamp: "2024-01-15 14:25:10",
      rules: [],
    },
    {
      id: "TXN-789126",
      customer: "Tech Solutions Inc",
      type: "Wire Transfer",
      amount: "$75,000",
      status: "Flagged",
      riskScore: 9.1,
      destination: "Switzerland",
      timestamp: "2024-01-15 14:20:05",
      rules: ["High-Risk Jurisdiction", "Large Amount", "New Customer"],
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Real-Time Transaction Monitoring</CardTitle>
          <CardDescription>Monitor all transactions in real-time with AML rule engine</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search transactions..." className="pl-8" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Transactions</SelectItem>
                <SelectItem value="flagged">Flagged</SelectItem>
                <SelectItem value="review">Under Review</SelectItem>
                <SelectItem value="cleared">Cleared</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`rounded-full p-2 ${
                        transaction.status === "Flagged"
                          ? "bg-red-100"
                          : transaction.status === "Under Review"
                            ? "bg-yellow-100"
                            : "bg-green-100"
                      }`}
                    >
                      {transaction.status === "Flagged" && <AlertTriangle className="h-4 w-4 text-red-500" />}
                      {transaction.status === "Under Review" && <Clock className="h-4 w-4 text-yellow-500" />}
                      {transaction.status === "Cleared" && <CheckCircle className="h-4 w-4 text-green-500" />}
                    </div>
                    <div>
                      <div className="font-medium">{transaction.id}</div>
                      <div className="text-sm text-muted-foreground">{transaction.customer}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{transaction.amount}</div>
                    <div className="text-sm text-muted-foreground">Risk: {transaction.riskScore}/10</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <div className="font-medium">{transaction.type}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Destination:</span>
                    <div className="font-medium">{transaction.destination}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>
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
                  </div>
                  <div>
                    <span className="text-muted-foreground">Timestamp:</span>
                    <div className="font-medium text-xs">{transaction.timestamp}</div>
                  </div>
                </div>

                {transaction.rules.length > 0 && (
                  <div className="mb-3">
                    <span className="text-sm text-muted-foreground">Triggered Rules:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {transaction.rules.map((rule, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {rule}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  {transaction.status === "Flagged" && <Button size="sm">Start Investigation</Button>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
