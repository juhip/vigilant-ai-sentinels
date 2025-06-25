import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentAlerts() {
  const alerts = [
    {
      id: "alert-1",
      title: "Unusual Transaction Pattern",
      description: "Multiple high-value transactions in short succession",
      severity: "high",
      time: "10 minutes ago",
      user: {
        name: "Alex Johnson",
        image: "/placeholder.svg?height=32&width=32",
        initials: "AJ",
      },
    },
    {
      id: "alert-2",
      title: "Suspicious Login Location",
      description: "Login attempt from unrecognized location",
      severity: "medium",
      time: "45 minutes ago",
      user: {
        name: "Maria Garcia",
        image: "/placeholder.svg?height=32&width=32",
        initials: "MG",
      },
    },
    {
      id: "alert-3",
      title: "Potential Account Takeover",
      description: "Multiple failed password attempts followed by success",
      severity: "high",
      time: "2 hours ago",
      user: {
        name: "Sam Wilson",
        image: "/placeholder.svg?height=32&width=32",
        initials: "SW",
      },
    },
    {
      id: "alert-4",
      title: "Velocity Check Failed",
      description: "Too many transactions in different locations",
      severity: "medium",
      time: "3 hours ago",
      user: {
        name: "Taylor Kim",
        image: "/placeholder.svg?height=32&width=32",
        initials: "TK",
      },
    },
  ]

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div key={alert.id} className="flex items-start space-x-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={alert.user.image || "/placeholder.svg"} alt={alert.user.name} />
            <AvatarFallback>{alert.user.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold">{alert.title}</h4>
              <Badge variant={alert.severity === "high" ? "destructive" : "outline"}>
                {alert.severity === "high" ? "High" : "Medium"}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{alert.description}</p>
            <p className="text-xs text-muted-foreground">{alert.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
