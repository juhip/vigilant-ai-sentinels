
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Activity, Zap, Shield, Eye } from 'lucide-react';

interface AIAgent {
  id: string;
  name: string;
  status: 'active' | 'learning' | 'analyzing';
  accuracy: number;
  detectionsToday: number;
  icon: any;
  color: string;
}

const AIAgentPanel = () => {
  const [agents, setAgents] = useState<AIAgent[]>([
    {
      id: '1',
      name: 'Pattern Detector',
      status: 'active',
      accuracy: 0.94,
      detectionsToday: 23,
      icon: Brain,
      color: 'text-purple-400'
    },
    {
      id: '2',
      name: 'Anomaly Hunter',
      status: 'analyzing',
      accuracy: 0.89,
      detectionsToday: 15,
      icon: Eye,
      color: 'text-blue-400'
    },
    {
      id: '3',
      name: 'Risk Assessor',
      status: 'learning',
      accuracy: 0.91,
      detectionsToday: 31,
      icon: Shield,
      color: 'text-green-400'
    }
  ]);

  const [activities, setActivities] = useState<string[]>([]);

  useEffect(() => {
    const activityMessages = [
      'Pattern Detector identified suspicious velocity pattern',
      'Anomaly Hunter flagged unusual transaction amount',
      'Risk Assessor updated risk model parameters',
      'Pattern Detector learned new fraud signature',
      'Anomaly Hunter detected geographic anomaly',
      'Risk Assessor completed weekly model training'
    ];

    const interval = setInterval(() => {
      const newActivity = activityMessages[Math.floor(Math.random() * activityMessages.length)];
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'analyzing': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'learning': return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/50';
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Brain className="w-5 h-5 text-purple-400" />
          <span>AI Agents</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Agent Status */}
        <div className="space-y-4">
          {agents.map((agent) => {
            const IconComponent = agent.icon;
            return (
              <div key={agent.id} className="p-3 rounded-lg bg-slate-700/30 border border-slate-600/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <IconComponent className={`w-4 h-4 ${agent.color}`} />
                    <span className="font-medium text-white text-sm">{agent.name}</span>
                  </div>
                  <Badge className={getStatusColor(agent.status)}>
                    {agent.status}
                  </Badge>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Accuracy: {(agent.accuracy * 100).toFixed(1)}%</span>
                  <span>{agent.detectionsToday} detections today</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${agent.accuracy * 100}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div>
          <h4 className="text-sm font-medium text-slate-300 mb-3 flex items-center">
            <Activity className="w-4 h-4 mr-2 text-blue-400" />
            Recent Activity
          </h4>
          <div className="space-y-2">
            {activities.length === 0 ? (
              <p className="text-slate-500 text-sm italic">Waiting for agent activity...</p>
            ) : (
              activities.map((activity, index) => (
                <div
                  key={index}
                  className={`text-xs text-slate-300 p-2 rounded bg-slate-700/20 ${
                    index === 0 ? 'animate-fade-in border-l-2 border-blue-500' : ''
                  }`}
                >
                  {activity}
                </div>
              ))
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAgentPanel;
