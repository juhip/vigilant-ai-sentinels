
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';

const RiskMetrics = () => {
  const weeklyData = [
    { day: 'Mon', fraudAttempts: 12, blocked: 11, amount: 45000 },
    { day: 'Tue', fraudAttempts: 8, blocked: 7, amount: 32000 },
    { day: 'Wed', fraudAttempts: 15, blocked: 14, amount: 67000 },
    { day: 'Thu', fraudAttempts: 6, blocked: 6, amount: 23000 },
    { day: 'Fri', fraudAttempts: 11, blocked: 10, amount: 41000 },
    { day: 'Sat', fraudAttempts: 4, blocked: 4, amount: 18000 },
    { day: 'Sun', fraudAttempts: 7, blocked: 6, amount: 28000 }
  ];

  const riskTrendData = [
    { time: '00:00', risk: 0.12 },
    { time: '04:00', risk: 0.08 },
    { time: '08:00', risk: 0.15 },
    { time: '12:00', risk: 0.23 },
    { time: '16:00', risk: 0.31 },
    { time: '20:00', risk: 0.28 },
    { time: '24:00', risk: 0.19 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Fraud Detection Stats */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-white text-lg">Weekly Fraud Detection</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Bar dataKey="fraudAttempts" fill="#EF4444" radius={[2, 2, 0, 0]} />
              <Bar dataKey="blocked" fill="#10B981" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">63</div>
              <div className="text-xs text-slate-400">Total Attempts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">58</div>
              <div className="text-xs text-slate-400">Successfully Blocked</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Trend */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-white text-lg">24h Risk Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={riskTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <defs>
                <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="risk"
                stroke="#F59E0B"
                fillOpacity={1}
                fill="url(#riskGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="text-center">
              <div className="text-lg font-bold text-green-400 flex items-center justify-center">
                <TrendingDown className="w-4 h-4 mr-1" />
                Low
              </div>
              <div className="text-xs text-slate-400">Off-peak hours</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-amber-400 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Peak
              </div>
              <div className="text-xs text-slate-400">Business hours</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-red-400 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 mr-1" />
                High
              </div>
              <div className="text-xs text-slate-400">5 alerts today</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskMetrics;
