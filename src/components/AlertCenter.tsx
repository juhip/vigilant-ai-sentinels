
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, X, CheckCircle, Clock, MapPin, DollarSign } from 'lucide-react';

interface Alert {
  id: string;
  type: 'velocity' | 'anomaly' | 'location' | 'amount';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  timestamp: Date;
  amount?: number;
  location?: string;
  userId?: string;
}

const AlertCenter = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'velocity',
      severity: 'high',
      title: 'Velocity Anomaly Detected',
      description: 'User performed 15 transactions in 2 minutes',
      timestamp: new Date(Date.now() - 5 * 60000),
      amount: 25000,
      userId: 'usr_1234'
    },
    {
      id: '2',
      type: 'location',
      severity: 'medium',
      title: 'Geographic Anomaly',
      description: 'Transaction from unusual location',
      timestamp: new Date(Date.now() - 12 * 60000),
      location: 'Lagos, Nigeria',
      amount: 1200,
      userId: 'usr_5678'
    },
    {
      id: '3',
      type: 'amount',
      severity: 'critical',
      title: 'Large Transaction Alert',
      description: 'Transaction exceeds user typical amount by 500%',
      timestamp: new Date(Date.now() - 8 * 60000),
      amount: 50000,
      userId: 'usr_9012'
    }
  ]);

  const dismissAlert = (alertId: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== alertId));
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'high': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'medium': return 'bg-amber-500/20 text-amber-400 border-amber-500/50';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'location': return <MapPin className="w-4 h-4" />;
      case 'amount': return <DollarSign className="w-4 h-4" />;
      case 'velocity': return <Clock className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const getTimeAgo = (timestamp: Date) => {
    const minutes = Math.floor((Date.now() - timestamp.getTime()) / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes === 1) return '1 minute ago';
    return `${minutes} minutes ago`;
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <span className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span>Alert Center</span>
          </span>
          <Badge variant="destructive" className="bg-red-500/20 text-red-400">
            {alerts.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.length === 0 ? (
            <div className="text-center py-8">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <p className="text-slate-300">No active alerts</p>
              <p className="text-slate-500 text-sm">All systems operating normally</p>
            </div>
          ) : (
            alerts.map((alert) => (
              <div
                key={alert.id}
                className="p-4 rounded-lg border bg-slate-700/30 border-slate-600/50 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      {getTypeIcon(alert.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-white text-sm">{alert.title}</h4>
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="text-slate-300 text-sm">{alert.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-slate-400">
                        <span>{getTimeAgo(alert.timestamp)}</span>
                        {alert.amount && (
                          <span className="text-amber-400">${alert.amount.toLocaleString()}</span>
                        )}
                        {alert.location && (
                          <span className="text-blue-400">{alert.location}</span>
                        )}
                        {alert.userId && (
                          <span className="text-purple-400">{alert.userId}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => dismissAlert(alert.id)}
                    className="text-slate-400 hover:text-white p-1"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="text-xs border-slate-600 text-slate-300 hover:bg-slate-700">
                    Investigate
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs border-slate-600 text-slate-300 hover:bg-slate-700">
                    Block User
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertCenter;
