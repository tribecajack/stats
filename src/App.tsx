import React from 'react';
import { 
  BarChart3, 
  Clock, 
  DollarSign, 
  TrendingUp,
  Wallet,
  Activity,
  PieChart,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Wallet className="w-6 h-6 text-emerald-400" />
          <h1 className="text-xl font-bold">DeFi Monitor</h1>
          <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded">v1.0.0</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">Last update: 2 min ago</span>
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg text-sm">
            Connect Wallet
          </button>
        </div>
      </header>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Total Value Locked</p>
              <h2 className="text-2xl font-bold">$1,234,567.89</h2>
            </div>
            <span className="flex items-center text-emerald-400 text-sm">
              <ArrowUpRight className="w-4 h-4" />
              2.5%
            </span>
          </div>
          <div className="h-10">
            <BarChart3 className="text-indigo-400" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Active Positions</p>
              <h2 className="text-2xl font-bold">12</h2>
            </div>
            <Activity className="text-blue-400 w-6 h-6" />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">8 Profitable</span>
            <span className="px-2 py-1 rounded bg-red-500/10 text-red-400">4 Loss</span>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Total Yield</p>
              <h2 className="text-2xl font-bold">$12,345.67</h2>
            </div>
            <span className="flex items-center text-red-400 text-sm">
              <ArrowDownRight className="w-4 h-4" />
              0.8%
            </span>
          </div>
          <div className="h-10">
            <TrendingUp className="text-emerald-400" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Gas Spent (24h)</p>
              <h2 className="text-2xl font-bold">$123.45</h2>
            </div>
            <DollarSign className="text-yellow-400 w-6 h-6" />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="px-2 py-1 rounded bg-gray-700">15 Transactions</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Positions Chart */}
        <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Position Distribution</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded bg-indigo-500/10 text-indigo-400 text-sm">1D</button>
              <button className="px-3 py-1 rounded bg-gray-700 text-sm">1W</button>
              <button className="px-3 py-1 rounded bg-gray-700 text-sm">1M</button>
            </div>
          </div>
          <div className="h-[300px] flex items-center justify-center">
            <PieChart className="w-16 h-16 text-gray-600" />
            <span className="ml-4 text-gray-400">Position chart will be rendered here</span>
          </div>
        </div>

        {/* Active Positions */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="font-bold mb-4">Active Positions</h3>
          <div className="space-y-4">
            {[
              { protocol: 'Uniswap V3', value: '$45,678.90', change: '+5.2%', positive: true },
              { protocol: 'Aave V3', value: '$34,567.89', change: '-1.8%', positive: false },
              { protocol: 'Curve', value: '$23,456.78', change: '+2.4%', positive: true },
              { protocol: 'Compound', value: '$12,345.67', change: '+0.8%', positive: true },
            ].map((position, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded bg-gray-700/50">
                <div>
                  <p className="font-medium">{position.protocol}</p>
                  <p className="text-sm text-gray-400">{position.value}</p>
                </div>
                <span className={`text-sm ${position.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                  {position.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;