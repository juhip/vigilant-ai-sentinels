import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, AlertTriangle, Clock, CheckCircle } from "lucide-react"

export function ComplianceAlerts() {
  const reports = [
    {
      id: "SAR-2024-001",
      type: "Suspicious Activity Report",
      customer: "John Smith",
      status: "Filed",
      dueDate: "2024-01-20",
      filedDate: "2024-01-18",
      priority: "High",
    },
    {
      id: "CTR-2024-045",
      type: "Currency Transaction Report",
      customer: "ABC Corp Ltd",
      status: "Pending Review",
      dueDate: "2024-01-16",
      filedDate: null,
      priority: "Medium",
    },
    {
      id: "SAR-2024-002",
      type: "Suspicious Activity Report",
      customer: "Tech Solutions Inc",
      status: "Draft",
      dueDate: "2024-01-22",
      filedDate: null,
      priority: "Critical",
    },
  ]

  const complianceMetrics = [
    {
      title: "Regulatory Compliance Score",
      value: "98.2%",
      status: "Excellent",
      color: "text-green-600",
    },
    {
      title: "Overdue Reports",
      value: "2",
      status: "Attention Required",
      color: "text-red-600",
    },
    {
      title: "Reports Filed (MTD)",
      value: "847",
      status: "On Track",
      color: "text-blue-600",
    },
    {
      title: "Average Filing Time",
      value: "2.3 days",
      status: "Within SLA",
      color: "text-green-600",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {complianceMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">{metric.title}</div>
              <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.status}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Regulatory Reports</CardTitle>
          <CardDescription>Manage SARs, CTRs, and other regulatory filings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`rounded-full p-2 ${
                        report.status === "Filed"
                          ? "bg-green-100"
                          : report.status === "Pending Review"
                            ? "bg-yellow-100"
                            : "bg-red-100"
                      }`}
                    >
                      {report.status === "Filed" && <CheckCircle className="h-4 w-4 text-green-500" />}
                      {report.status === "Pending Review" && <Clock className="h-4 w-4 text-yellow-500" />}
                      {report.status === "Draft" && <AlertTriangle className="h-4 w-4 text-red-500" />}
                    </div>
                    <div>
                      <div className="font-medium">{report.id}</div>
                      <div className="text-sm text-muted-foreground">{report.type}</div>
                    </div>
                  </div>
                  <Badge
                    variant={
                      report.priority === "Critical"
                        ? "destructive"
                        : report.priority === "High"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {report.priority}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-muted-foreground">Customer:</span>
                    <div className="font-medium">{report.customer}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>
                    <Badge
                      variant={
                        report.status === "Filed"
                          ? "outline"
                          : report.status === "Pending Review"
                            ? "default"
                            : "destructive"
                      }
                    >
                      {report.status}
                    </Badge>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Due Date:</span>
                    <div className="font-medium">{report.dueDate}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Filed Date:</span>
                    <div className="font-medium">{report.filedDate || "Not Filed"}</div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    View Report
                  </Button>
                  {report.status !== "Filed" && (
                    <Button size="sm">{report.status === "Draft" ? "Complete Filing" : "Review & File"}</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
