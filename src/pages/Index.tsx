
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, TrendingUp, Users, Brain, Clock, DollarSign } from 'lucide-react';
import TransactionFeed from '@/components/TransactionFeed';
import AIAgentPanel from '@/components/AIAgentPanel';
import RiskMetrics from '@/components/RiskMetrics';
import AlertCenter from '@/components/AlertCenter';

const Index = () => {
  const [totalTransactions, setTotalTransactions] = useState(12847);
  const [riskScore, setRiskScore] = useState(0.23);
  const [activeAlerts, setActiveAlerts] = useState(7);
  const [agentsActive, setAgentsActive] = useState(3);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setTotalTransactions(prev => prev + Math.floor(Math.random() * 5));
      setRiskScore(prev => Math.max(0, Math.min(1, prev + (Math.random() - 0.5) * 0.1)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                FraudGuard AI
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-green-500/50 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                System Online
              </Badge>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Transactions</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{totalTransactions.toLocaleString()}</div>
              <p className="text-xs text-green-400 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +2.1% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Risk Score</CardTitle>
              <AlertTriangle className="h-4 w-4 text-amber-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{(riskScore * 100).toFixed(1)}%</div>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-gradient-to-r from-green-500 via-amber-500 to-red-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${riskScore * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{activeAlerts}</div>
              <p className="text-xs text-red-400 flex items-center mt-1">
                <Clock className="w-3 h-3 mr-1" />
                3 require attention
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">AI Agents</CardTitle>
              <Brain className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{agentsActive}</div>
              <p className="text-xs text-green-400 flex items-center mt-1">
                <Users className="w-3 h-3 mr-1" />
                All systems active
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Transaction Feed */}
          <div className="lg:col-span-2 space-y-6">
            <TransactionFeed />
            <RiskMetrics />
          </div>

          {/* Right Column - AI Agents & Alerts */}
          <div className="space-y-6">
            <AIAgentPanel />
            <AlertCenter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
