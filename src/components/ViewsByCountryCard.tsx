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
    <div className="bg-card rounded-lg p-2">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-muted-foreground text-[10px] font-medium mb-0.5">
            Statistics
          </h3>
          <h2 className="text-foreground text-sm font-semibold">
            Views by country
          </h2>
        </div>
        <div className="flex items-center gap-1 bg-muted rounded-md px-2 py-1 text-[10px] font-medium text-foreground cursor-pointer hover:bg-muted/80">
          <span>2025</span>
          <ChevronDown className="w-3 h-3" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* Chart */}
        <div className="flex justify-center">
          <div className="w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={55}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-foreground text-[11px] font-medium">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-foreground text-[11px] font-medium">
                  {item.value.toFixed(2)}%
                </span>
                <span
                  className={`text-[10px] font-medium ${
                    item.change > 0 ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  ({item.change > 0 ? '+' : ''}{item.change.toFixed(2)}%)
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
