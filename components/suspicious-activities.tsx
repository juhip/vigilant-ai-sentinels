import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, MapPin, Clock } from "lucide-react"

export function SuspiciousActivities() {
  const activities = [
    {
      id: "SA-001",
      type: "Structuring",
      customer: "John Smith",
      amount: "$9,800",
      description: "Multiple cash deposits just under $10K threshold",
      riskScore: 8.5,
      location: "New York, NY",
      time: "15 minutes ago",
      priority: "Critical",
    },
    {
      id: "SA-002",
      type: "Unusual Pattern",
      customer: "ABC Corp Ltd",
      amount: "$45,000",
      description: "Large wire transfer to high-risk jurisdiction",
      riskScore: 7.2,
      location: "Miami, FL",
      time: "1 hour ago",
      priority: "High",
    },
    {
      id: "SA-003",
      type: "Velocity Check",
      customer: "Maria Garcia",
      amount: "$15,000",
      description: "Rapid succession of international transfers",
      riskScore: 6.8,
      location: "Los Angeles, CA",
      time: "2 hours ago",
      priority: "High",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="border rounded-lg p-4 space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <AlertTriangle
                className={`h-4 w-4 ${activity.priority === "Critical" ? "text-red-500" : "text-orange-500"}`}
              />
              <span className="font-medium text-sm">{activity.type}</span>
              <Badge variant={activity.priority === "Critical" ? "destructive" : "default"}>{activity.priority}</Badge>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg">{activity.amount}</div>
              <div className="text-xs text-muted-foreground">Risk: {activity.riskScore}/10</div>
            </div>
          </div>

          <div>
            <div className="font-medium">{activity.customer}</div>
            <div className="text-sm text-muted-foreground">{activity.description}</div>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>{activity.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{activity.time}</span>
              </div>
            </div>
            <Button size="sm" variant="outline">
              Investigate
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
