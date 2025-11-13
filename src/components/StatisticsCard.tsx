import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceDot, Tooltip } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { name: 'Jan', value: 8500 },
  { name: 'Feb', value: 9200 },
  { name: 'March', value: 11756 },
  { name: 'Apr', value: 9800 },
  { name: 'May', value: 10200 },
];

const StatisticsCard = () => {
  return (
    <div className="bg-card rounded-lg p-4 w-72 animate-in fade-in slide-in-from-bottom-4 duration-700"> 
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-muted-foreground text-xs font-medium mb-1">
          Statistics
        </h3>
        <h2 className="text-foreground text-base font-semibold">
          Account reached
        </h2>
      </div>

      {/* Main Statistics */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-foreground text-2xl font-bold animate-in fade-in zoom-in-50 duration-500 delay-200">
            11,756
          </span>
          <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-0.5 rounded-md text-xs font-medium animate-in fade-in slide-in-from-left-2 duration-500 delay-300">
            <TrendingUp className="w-3 h-3" />
            <span>23%</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-32 w-full animate-in fade-in duration-700 delay-500">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                <feOffset dx="0" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.2"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
              tickMargin={6}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--popover))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
                fontSize: '12px',
                padding: '8px 12px'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}
              itemStyle={{ color: 'hsl(var(--primary))' }}
              cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '5 5' }}
            />
            <Area
              type="natural"
              dataKey="value"
              stroke="hsl(var(--primary))"
              strokeWidth={2.5}
              fill="url(#colorGradient)"
              filter="url(#shadow)"
              animationBegin={0}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
            <ReferenceDot
              x="March"
              y={11756}
              r={4}
              fill="hsl(var(--primary))"
              stroke="hsl(var(--background))"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Month Indicator */}
      <div className="flex justify-center mt-3">
        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium animate-in fade-in zoom-in-95 duration-500 delay-700">
          March
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
