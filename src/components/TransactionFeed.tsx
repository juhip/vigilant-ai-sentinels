
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface Transaction {
  id: string;
  amount: number;
  from: string;
  to: string;
  timestamp: Date;
  riskLevel: 'low' | 'medium' | 'high';
  status: 'pending' | 'approved' | 'flagged';
  location: string;
}

const TransactionFeed = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const generateTransaction = (): Transaction => {
    const amounts = [120.50, 2450.00, 89.99, 15000.00, 350.75, 8900.00, 45.20];
    const locations = ['New York, US', 'London, UK', 'Tokyo, JP', 'Sydney, AU', 'Berlin, DE', 'Toronto, CA'];
    const names = ['John Smith', 'Sarah Connor', 'Mike Johnson', 'Emma Wilson', 'David Brown', 'Lisa Garcia'];
    const accounts = ['****1234', '****5678', '****9012', '****3456', '****7890'];
    
    const amount = amounts[Math.floor(Math.random() * amounts.length)];
    const riskLevel = amount > 5000 ? 'high' : amount > 1000 ? 'medium' : 'low';
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      amount,
      from: names[Math.floor(Math.random() * names.length)],
      to: accounts[Math.floor(Math.random() * accounts.length)],
      timestamp: new Date(),
      riskLevel,
      status: riskLevel === 'high' ? 'flagged' : Math.random() > 0.3 ? 'approved' : 'pending',
      location: locations[Math.floor(Math.random() * locations.length)]
    };
  };

  useEffect(() => {
    // Initialize with some transactions
    const initialTransactions = Array.from({ length: 8 }, generateTransaction);
    setTransactions(initialTransactions);

    // Add new transactions periodically
    const interval = setInterval(() => {
      const newTransaction = generateTransaction();
      setTransactions(prev => [newTransaction, ...prev.slice(0, 9)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'medium': return 'bg-amber-500/20 text-amber-400 border-amber-500/50';
      default: return 'bg-green-500/20 text-green-400 border-green-500/50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'flagged': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <Clock className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <span>Real-time Transaction Feed</span>
          <Badge variant="outline" className="border-blue-500/50 text-blue-400">
            Live
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div
              key={transaction.id}
              className={`p-4 rounded-lg border bg-slate-700/30 border-slate-600/50 transition-all duration-500 ${
                index === 0 ? 'animate-fade-in ring-2 ring-blue-500/20' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(transaction.status)}
                  <span className="font-medium text-white">${transaction.amount.toLocaleString()}</span>
                  <Badge className={getRiskColor(transaction.riskLevel)}>
                    {transaction.riskLevel} risk
                  </Badge>
                </div>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-sm text-slate-300">
                <div className="flex justify-between items-center">
                  <span>{transaction.from} → {transaction.to}</span>
                  <span className="text-slate-400">{transaction.location}</span>
                </div>
                <div className="text-slate-500 mt-1">
                  {transaction.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionFeed;
