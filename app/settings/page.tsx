import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Save, UserPlus, Key, Bell, Shield } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <Button>
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </div>
      <p className="text-muted-foreground mt-2">Manage your fraud detection platform settings</p>

      <Tabs defaultValue="general" className="mt-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure basic settings for your fraud detection platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="Acme Corporation" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="platform-name">Platform Name</Label>
                <Input id="platform-name" defaultValue="Fraud Shield" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Default Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Time (ET)</SelectItem>
                    <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <Select defaultValue="iso">
                  <SelectTrigger id="date-format">
                    <SelectValue placeholder="Select date format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iso">ISO (YYYY-MM-DD)</SelectItem>
                    <SelectItem value="us">US (MM/DD/YYYY)</SelectItem>
                    <SelectItem value="eu">EU (DD/MM/YYYY)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable dark mode for the platform interface</p>
                </div>
                <Switch id="dark-mode" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="analytics">Usage Analytics</Label>
                  <p className="text-sm text-muted-foreground">Allow collection of anonymous usage data</p>
                </div>
                <Switch id="analytics" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Reset to Defaults
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
              <CardDescription>Configure how long data is stored in the system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="alert-retention">Alert Data Retention</Label>
                <Select defaultValue="90">
                  <SelectTrigger id="alert-retention">
                    <SelectValue placeholder="Select retention period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                    <SelectItem value="forever">Indefinitely</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="case-retention">Case Data Retention</Label>
                <Select defaultValue="365">
                  <SelectTrigger id="case-retention">
                    <SelectValue placeholder="Select retention period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                    <SelectItem value="730">2 years</SelectItem>
                    <SelectItem value="forever">Indefinitely</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="log-retention">Audit Log Retention</Label>
                <Select defaultValue="180">
                  <SelectTrigger id="log-retention">
                    <SelectValue placeholder="Select retention period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                    <SelectItem value="forever">Indefinitely</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="users" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>User Management</span>
                <Button size="sm">
                  <UserPlus className="mr-2 h-4 w-4" /> Add User
                </Button>
              </CardTitle>
              <CardDescription>Manage users and their access to the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "John Smith",
                    email: "john.smith@example.com",
                    role: "Admin",
                    status: "Active",
                    lastLogin: "Today, 10:30 AM",
                  },
                  {
                    name: "Sarah Chen",
                    email: "sarah.chen@example.com",
                    role: "Analyst",
                    status: "Active",
                    lastLogin: "Yesterday, 3:45 PM",
                  },
                  {
                    name: "James Wilson",
                    email: "james.wilson@example.com",
                    role: "Investigator",
                    status: "Active",
                    lastLogin: "Jun 22, 2025, 9:15 AM",
                  },
                  {
                    name: "Maria Garcia",
                    email: "maria.garcia@example.com",
                    role: "Analyst",
                    status: "Inactive",
                    lastLogin: "Jun 15, 2025, 11:20 AM",
                  },
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{user.name}</h4>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <p className="text-xs text-muted-foreground">Role: {user.role}</p>
                        <p className="text-xs text-muted-foreground">Last login: {user.lastLogin}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`px-2 py-1 rounded-full text-xs ${
                          user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {user.status}
                      </div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Role Management</CardTitle>
              <CardDescription>Configure user roles and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Admin",
                    description: "Full access to all features and settings",
                    users: 1,
                  },
                  {
                    name: "Analyst",
                    description: "Can view and analyze data, create reports",
                    users: 2,
                  },
                  {
                    name: "Investigator",
                    description: "Can manage cases and conduct investigations",
                    users: 1,
                  },
                  {
                    name: "Viewer",
                    description: "Read-only access to dashboards and reports",
                    users: 0,
                  },
                ].map((role, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{role.name}</h4>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">Users with this role: {role.users}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit Permissions
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="api" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>API Keys</span>
                <Button size="sm">
                  <Key className="mr-2 h-4 w-4" /> Generate New Key
                </Button>
              </CardTitle>
              <CardDescription>Manage API keys for integrating with external systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Production API Key",
                    key: "fs_prod_••••••••••••••••",
                    created: "May 15, 2025",
                    lastUsed: "Today, 6:45 AM",
                    status: "Active",
                  },
                  {
                    name: "Development API Key",
                    key: "fs_dev_••••••••••••••••",
                    created: "Jun 1, 2025",
                    lastUsed: "Yesterday, 2:30 PM",
                    status: "Active",
                  },
                  {
                    name: "Testing API Key",
                    key: "fs_test_••••••••••••••••",
                    created: "Jun 10, 2025",
                    lastUsed: "Jun 20, 2025",
                    status: "Active",
                  },
                  {
                    name: "Legacy API Key",
                    key: "fs_legacy_••••••••••••••••",
                    created: "Jan 5, 2025",
                    lastUsed: "Apr 12, 2025",
                    status: "Revoked",
                  },
                ].map((apiKey, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{apiKey.name}</h4>
                      <p className="text-sm font-mono">{apiKey.key}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <p className="text-xs text-muted-foreground">Created: {apiKey.created}</p>
                        <p className="text-xs text-muted-foreground">Last used: {apiKey.lastUsed}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`px-2 py-1 rounded-full text-xs ${
                          apiKey.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {apiKey.status}
                      </div>
                      {apiKey.status === "Active" ? (
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                          Revoke
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" disabled>
                          Revoked
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-sm text-muted-foreground">
                <p>
                  API documentation is available at{" "}
                  <a href="#" className="text-primary underline">
                    docs.fraudshield.example/api
                  </a>
                </p>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Webhooks</CardTitle>
              <CardDescription>Configure webhooks to receive real-time fraud alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input id="webhook-url" placeholder="https://your-domain.com/webhook" />
              </div>

              <div className="space-y-2">
                <Label>Events to Send</Label>
                <div className="space-y-2">
                  {[
                    { id: "event-alert", label: "New Alert Created" },
                    { id: "event-case", label: "Case Status Changed" },
                    { id: "event-block", label: "Transaction Blocked" },
                    { id: "event-agent", label: "AI Agent Action" },
                  ].map((event) => (
                    <div key={event.id} className="flex items-center space-x-2">
                      <Switch id={event.id} defaultChecked={event.id === "event-alert" || event.id === "event-block"} />
                      <Label htmlFor={event.id}>{event.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-secret">Webhook Secret</Label>
                <div className="flex space-x-2">
                  <Input id="webhook-secret" type="password" value="••••••••••••••••" readOnly />
                  <Button variant="outline">Regenerate</Button>
                </div>
                <p className="text-xs text-muted-foreground">This secret is used to verify webhook payloads</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Test Webhook</Button>
              <Button>Save Webhook Configuration</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when notifications are sent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  {[
                    {
                      id: "email-alerts",
                      label: "New Fraud Alerts",
                      description: "Receive emails for new fraud alerts",
                    },
                    { id: "email-cases", label: "Case Updates", description: "Receive emails when cases are updated" },
                    { id: "email-reports", label: "Weekly Reports", description: "Receive weekly summary reports" },
                    {
                      id: "email-system",
                      label: "System Notifications",
                      description: "Receive system status and maintenance notifications",
                    },
                  ].map((notification) => (
                    <div key={notification.id} className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor={notification.id}>{notification.label}</Label>
                        <p className="text-sm text-muted-foreground">{notification.description}</p>
                      </div>
                      <Switch id={notification.id} defaultChecked={notification.id !== "email-reports"} />
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">In-App Notifications</h3>
                <div className="space-y-2">
                  {[
                    {
                      id: "app-alerts",
                      label: "New Fraud Alerts",
                      description: "Show notifications for new fraud alerts",
                    },
                    { id: "app-cases", label: "Case Updates", description: "Show notifications for case updates" },
                    {
                      id: "app-agent",
                      label: "AI Agent Actions",
                      description: "Show notifications for AI agent actions",
                    },
                    {
                      id: "app-system",
                      label: "System Notifications",
                      description: "Show system status and maintenance notifications",
                    },
                  ].map((notification) => (
                    <div key={notification.id} className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor={notification.id}>{notification.label}</Label>
                        <p className="text-sm text-muted-foreground">{notification.description}</p>
                      </div>
                      <Switch id={notification.id} defaultChecked />
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="notification-email">Notification Email</Label>
                <Input id="notification-email" defaultValue="admin@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="digest-frequency">Email Digest Frequency</Label>
                <Select defaultValue="realtime">
                  <SelectTrigger id="digest-frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realtime">Real-time</SelectItem>
                    <SelectItem value="hourly">Hourly Digest</SelectItem>
                    <SelectItem value="daily">Daily Digest</SelectItem>
                    <SelectItem value="weekly">Weekly Digest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Bell className="mr-2 h-4 w-4" />
                Send Test Notification
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security settings for your fraud detection platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Authentication</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="mfa">Multi-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Require MFA for all users</p>
                    </div>
                    <Switch id="mfa" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sso">Single Sign-On (SSO)</Label>
                      <p className="text-sm text-muted-foreground">Enable SSO with your identity provider</p>
                    </div>
                    <Switch id="sso" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Session Timeout</Label>
                    <Select defaultValue="30">
                      <SelectTrigger id="session-timeout">
                        <SelectValue placeholder="Select timeout" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="240">4 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Password Policy</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="password-complexity">Password Complexity</Label>
                      <p className="text-sm text-muted-foreground">Require complex passwords</p>
                    </div>
                    <Switch id="password-complexity" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password-expiry">Password Expiry</Label>
                    <Select defaultValue="90">
                      <SelectTrigger id="password-expiry">
                        <SelectValue placeholder="Select expiry period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="password-history">Password History</Label>
                      <p className="text-sm text-muted-foreground">Prevent reuse of previous passwords</p>
                    </div>
                    <Switch id="password-history" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">IP Restrictions</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="ip-whitelist">IP Whitelisting</Label>
                      <p className="text-sm text-muted-foreground">Restrict access to specific IP addresses</p>
                    </div>
                    <Switch id="ip-whitelist" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="allowed-ips">Allowed IP Addresses</Label>
                    <Textarea id="allowed-ips" placeholder="Enter IP addresses, one per line" rows={3} />
                    <p className="text-xs text-muted-foreground">
                      Enter IP addresses or CIDR ranges, one per line (e.g., 192.168.1.1 or 10.0.0.0/24)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Shield className="mr-2 h-4 w-4" />
                Update Security Settings
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Audit Logs</CardTitle>
              <CardDescription>View security and system audit logs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    action: "User Login",
                    user: "John Smith",
                    timestamp: "Today, 10:30 AM",
                    ip: "192.168.1.1",
                  },
                  {
                    action: "API Key Generated",
                    user: "Sarah Chen",
                    timestamp: "Today, 9:15 AM",
                    ip: "192.168.1.2",
                  },
                  {
                    action: "Case Status Updated",
                    user: "James Wilson",
                    timestamp: "Yesterday, 3:45 PM",
                    ip: "192.168.1.3",
                  },
                  {
                    action: "User Settings Changed",
                    user: "Maria Garcia",
                    timestamp: "Yesterday, 2:20 PM",
                    ip: "192.168.1.4",
                  },
                  {
                    action: "Failed Login Attempt",
                    user: "Unknown",
                    timestamp: "Jun 22, 2025, 8:10 AM",
                    ip: "203.0.113.1",
                  },
                ].map((log, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg text-sm">
                    <div>
                      <div className="font-medium">{log.action}</div>
                      <div className="text-muted-foreground">User: {log.user}</div>
                    </div>
                    <div className="text-right">
                      <div>{log.timestamp}</div>
                      <div className="text-muted-foreground">IP: {log.ip}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Audit Logs
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
