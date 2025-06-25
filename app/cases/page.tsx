import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, ArrowUpDown, Clock, CheckCircle, XCircle } from "lucide-react"

export default function CasesPage() {
  const cases = [
    {
      id: "CASE-1234",
      title: "Suspicious Transaction Pattern",
      status: "open",
      priority: "high",
      assignee: {
        name: "Sarah Chen",
        image: "/placeholder.svg?height=32&width=32",
        initials: "SC",
      },
      created: "2 hours ago",
      updated: "10 minutes ago",
    },
    {
      id: "CASE-1233",
      title: "Multiple Failed Login Attempts",
      status: "investigating",
      priority: "medium",
      assignee: {
        name: "James Wilson",
        image: "/placeholder.svg?height=32&width=32",
        initials: "JW",
      },
      created: "5 hours ago",
      updated: "1 hour ago",
    },
    {
      id: "CASE-1232",
      title: "Unusual Cross-Border Activity",
      status: "resolved",
      priority: "low",
      assignee: {
        name: "Alex Johnson",
        image: "/placeholder.svg?height=32&width=32",
        initials: "AJ",
      },
      created: "1 day ago",
      updated: "3 hours ago",
    },
    {
      id: "CASE-1231",
      title: "Potential Account Takeover",
      status: "open",
      priority: "high",
      assignee: {
        name: "Maria Garcia",
        image: "/placeholder.svg?height=32&width=32",
        initials: "MG",
      },
      created: "1 day ago",
      updated: "5 hours ago",
    },
    {
      id: "CASE-1230",
      title: "Velocity Check Failure",
      status: "investigating",
      priority: "medium",
      assignee: {
        name: "Sarah Chen",
        image: "/placeholder.svg?height=32&width=32",
        initials: "SC",
      },
      created: "2 days ago",
      updated: "12 hours ago",
    },
  ]

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Cases</h1>
        <Button>Create Case</Button>
      </div>
      <p className="text-muted-foreground mt-2">Manage and investigate fraud cases</p>

      <div className="flex items-center space-x-2 mt-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search cases..." className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="all" className="mt-6">
        <TabsList>
          <TabsTrigger value="all">All Cases</TabsTrigger>
          <TabsTrigger value="open">Open</TabsTrigger>
          <TabsTrigger value="investigating">Investigating</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Cases</CardTitle>
              <CardDescription>View and manage all fraud cases in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cases.map((case_) => (
                  <div key={case_.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`rounded-full p-2 ${
                          case_.status === "open"
                            ? "bg-red-100"
                            : case_.status === "investigating"
                              ? "bg-amber-100"
                              : "bg-green-100"
                        }`}
                      >
                        {case_.status === "open" && <XCircle className="h-4 w-4 text-red-500" />}
                        {case_.status === "investigating" && <Clock className="h-4 w-4 text-amber-500" />}
                        {case_.status === "resolved" && <CheckCircle className="h-4 w-4 text-green-500" />}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-muted-foreground">{case_.id}</span>
                          <h4 className="font-semibold">{case_.title}</h4>
                          <Badge
                            variant={
                              case_.priority === "high"
                                ? "destructive"
                                : case_.priority === "medium"
                                  ? "outline"
                                  : "secondary"
                            }
                          >
                            {case_.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 mt-1">
                          <p className="text-xs text-muted-foreground">Created: {case_.created}</p>
                          <p className="text-xs text-muted-foreground">Updated: {case_.updated}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={case_.assignee.image || "/placeholder.svg"} alt={case_.assignee.name} />
                          <AvatarFallback>{case_.assignee.initials}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{case_.assignee.name}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="open" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Open Cases</CardTitle>
              <CardDescription>View and manage open fraud cases requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cases
                  .filter((c) => c.status === "open")
                  .map((case_) => (
                    <div key={case_.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-red-100 p-2">
                          <XCircle className="h-4 w-4 text-red-500" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-muted-foreground">{case_.id}</span>
                            <h4 className="font-semibold">{case_.title}</h4>
                            <Badge
                              variant={
                                case_.priority === "high"
                                  ? "destructive"
                                  : case_.priority === "medium"
                                    ? "outline"
                                    : "secondary"
                              }
                            >
                              {case_.priority}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 mt-1">
                            <p className="text-xs text-muted-foreground">Created: {case_.created}</p>
                            <p className="text-xs text-muted-foreground">Updated: {case_.updated}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={case_.assignee.image || "/placeholder.svg"} alt={case_.assignee.name} />
                            <AvatarFallback>{case_.assignee.initials}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{case_.assignee.name}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="investigating" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Investigating Cases</CardTitle>
              <CardDescription>Cases currently under investigation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cases
                  .filter((c) => c.status === "investigating")
                  .map((case_) => (
                    <div key={case_.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-amber-100 p-2">
                          <Clock className="h-4 w-4 text-amber-500" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-muted-foreground">{case_.id}</span>
                            <h4 className="font-semibold">{case_.title}</h4>
                            <Badge
                              variant={
                                case_.priority === "high"
                                  ? "destructive"
                                  : case_.priority === "medium"
                                    ? "outline"
                                    : "secondary"
                              }
                            >
                              {case_.priority}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 mt-1">
                            <p className="text-xs text-muted-foreground">Created: {case_.created}</p>
                            <p className="text-xs text-muted-foreground">Updated: {case_.updated}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={case_.assignee.image || "/placeholder.svg"} alt={case_.assignee.name} />
                            <AvatarFallback>{case_.assignee.initials}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{case_.assignee.name}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="resolved" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Resolved Cases</CardTitle>
              <CardDescription>Cases that have been resolved and closed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cases
                  .filter((c) => c.status === "resolved")
                  .map((case_) => (
                    <div key={case_.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-green-100 p-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-muted-foreground">{case_.id}</span>
                            <h4 className="font-semibold">{case_.title}</h4>
                            <Badge
                              variant={
                                case_.priority === "high"
                                  ? "destructive"
                                  : case_.priority === "medium"
                                    ? "outline"
                                    : "secondary"
                              }
                            >
                              {case_.priority}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 mt-1">
                            <p className="text-xs text-muted-foreground">Created: {case_.created}</p>
                            <p className="text-xs text-muted-foreground">Updated: {case_.updated}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={case_.assignee.image || "/placeholder.svg"} alt={case_.assignee.name} />
                            <AvatarFallback>{case_.assignee.initials}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{case_.assignee.name}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
