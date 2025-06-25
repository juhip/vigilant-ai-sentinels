import { Bot, CheckCircle, AlertCircle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AIAgentActivity() {
  const activities = [
    {
      id: "activity-1",
      agent: "Transaction Monitor",
      action: "Flagged suspicious transaction pattern",
      status: "alert",
      time: "5 minutes ago",
    },
    {
      id: "activity-2",
      agent: "Account Security",
      action: "Blocked suspicious login attempt",
      status: "success",
      time: "22 minutes ago",
    },
    {
      id: "activity-3",
      agent: "Pattern Analyzer",
      action: "Analyzing new transaction patterns",
      status: "processing",
      time: "Ongoing",
    },
    {
      id: "activity-4",
      agent: "Risk Assessor",
      action: "Updated risk score for merchant ID #8294",
      status: "success",
      time: "1 hour ago",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-4">
          <div className="rounded-full bg-primary/10 p-2">
            <Bot className="h-4 w-4 text-primary" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold">{activity.agent}</h4>
              <Badge
                variant={
                  activity.status === "alert" ? "destructive" : activity.status === "success" ? "outline" : "secondary"
                }
              >
                {activity.status === "alert" && <AlertCircle className="mr-1 h-3 w-3" />}
                {activity.status === "success" && <CheckCircle className="mr-1 h-3 w-3" />}
                {activity.status === "processing" && <Clock className="mr-1 h-3 w-3" />}
                {activity.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
