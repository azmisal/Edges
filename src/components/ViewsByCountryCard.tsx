import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  { name: 'UAE', value: 39.11, change: 2.98, color: 'hsl(var(--chart-primary))' },
  { name: 'INDIA', value: 28.02, change: -3.25, color: 'hsl(var(--chart-2))' },
  { name: 'U.K', value: 23.13, change: 0.14, color: 'hsl(var(--chart-3))' },
  { name: 'USA', value: 5.03, change: -1.11, color: 'hsl(var(--chart-4))' },
];

const ViewsByCountryCard = () => {
  return (
    <div className="bg-card rounded-lg p-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="animate-in fade-in slide-in-from-left-2 duration-500 delay-100">
          <h3 className="text-muted-foreground text-[10px] font-medium mb-0.5">
            Statistics
          </h3>
          <h2 className="text-foreground text-sm font-semibold">
            Views by country
          </h2>
        </div>
        <div className="flex items-center gap-1 bg-muted rounded-md px-2 py-1 text-[10px] font-medium text-foreground cursor-pointer hover:bg-muted/80 transition-all hover:scale-105 animate-in fade-in zoom-in-95 duration-500 delay-200">
          <span>2025</span>
          <ChevronDown className="w-3 h-3" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* Chart */}
        <div className="flex justify-center animate-in fade-in zoom-in-95 duration-700 delay-300">
          <div className="w-32 h-32 hover:scale-105 transition-transform duration-300">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={55}
                  innerRadius={0}
                  dataKey="value"
                  stroke="none"
                  strokeWidth={0}
                  animationBegin={300}
                  animationDuration={1200}
                  animationEasing="ease-out"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke="none"
                      strokeWidth={0}
                      style={{
                        filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.15))',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          {data.map((item, index) => (
            <div
              key={item.name}
              className="flex items-center justify-between p-1.5 rounded-md hover:bg-muted/50 transition-all duration-300 hover:translate-x-1 animate-in fade-in slide-in-from-right-2 cursor-pointer"
              style={{
                animationDelay: `${600 + index * 100}ms`,
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full shadow-md transition-all duration-300 hover:scale-125 hover:shadow-lg"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 0 8px ${item.color}40`,
                  }}
                />
                <span className="text-foreground text-[11px] font-medium">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-foreground text-[11px] font-semibold">
                  {item.value.toFixed(2)}%
                </span>
                <span
                  className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                    item.change > 0
                      ? 'text-green-600 bg-green-50 dark:bg-green-950/30'
                      : 'text-red-500 bg-red-50 dark:bg-red-950/30'
                  }`}
                >
                  {item.change > 0 ? '+' : ''}{item.change.toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewsByCountryCard;
