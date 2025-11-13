import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface ChartData {
  value: number;
  height: number;
  delay: number;
}

interface LegendItem {
  label: string;
  value: string;
  color: "primary" | "secondary";
}

const PurchaseManagement = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Dummy data for the chart
  const chartData: ChartData[] = [
    { value: 20, height: 40, delay: 0.1 },
    { value: 20, height: 45, delay: 0.2 },
    { value: 20, height: 50, delay: 0.3 },
    { value: 20, height: 48, delay: 0.4 },
    { value: 20, height: 55, delay: 0.5 },
    { value: 20, height: 48, delay: 0.6 },
    { value: 20, height: 60, delay: 0.7 },
    { value: 20, height: 40, delay: 0.8 },
    { value: 20, height: 65, delay: 0.9 },
    { value: 20, height: 55, delay: 1.0 },
  ];

  const legendData: LegendItem[] = [
    { label: "Product sales", value: "$7,213", color: "primary" },
    { label: "Subscriptions", value: "$5,662", color: "secondary" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-72 p-4 shadow-[var(--shadow-card)] border-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div
        className="space-y-4"
      >
        {/* Header */}
        <div className="space-y-1">
          <h2 className="text-muted-foreground text-xs font-medium tracking-wide animate-in fade-in slide-in-from-left-2 duration-500 delay-100">
            Purchase Management
          </h2>
          <div className="text-2xl font-bold text-foreground animate-in fade-in zoom-in-50 duration-500 delay-200">$12,875</div>
        </div>

        {/* Chart */}
        <div className="relative w-full h-28 animate-in fade-in duration-700 delay-300">
          <div className="flex items-end justify-between h-full px-1">
            {chartData.map((bar, index) => (
              <div key={index} className="flex flex-col items-center gap-0.5 group">
                {/* Subscription bar on top */}
                <div
                  className={`w-2 rounded-full origin-bottom transform scale-y-0
                    bg-chart-secondary shadow-lg
                    transition-all duration-300 hover:scale-x-125 hover:brightness-110
                    ${isVisible ? "animate-bar-grow" : ""}`}
                  style={{
                    height: `${bar.height * 0.45}px`,
                    animationDelay: `${bar.delay + 0.5}s`,
                    boxShadow: '0 -2px 8px rgba(var(--chart-secondary-rgb, 139, 92, 246), 0.3)',
                  }}
                />
                <div style={{ height: "2px" }} />
                {/* Purchase bar below */}
                <div
                  className={`w-2 rounded-full origin-bottom transform scale-y-0
                    bg-chart-primary shadow-lg
                    transition-all duration-300 hover:scale-x-125 hover:brightness-110
                    ${isVisible ? "animate-bar-grow" : ""}`}
                  style={{
                    height: `${bar.height * 0.9}px`,
                    animationDelay: `${bar.delay + 0.6}s`,
                    boxShadow: '0 -2px 8px rgba(var(--chart-primary-rgb, 59, 130, 246), 0.3)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          {legendData.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center justify-between animate-in fade-in slide-in-from-left-2 duration-500 hover:translate-x-1 transition-transform"
              style={{
                animationDelay: `${1.7 + index * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-1.5">
                <div
                  className={`w-2.5 h-2.5 rounded-full shadow-md transition-transform hover:scale-125 ${
                    item.color === "primary"
                      ? "bg-chart-primary"
                      : "bg-chart-secondary"
                  }`}
                  style={{
                    boxShadow: item.color === "primary"
                      ? '0 0 8px rgba(var(--chart-primary-rgb, 59, 130, 246), 0.4)'
                      : '0 0 8px rgba(var(--chart-secondary-rgb, 139, 92, 246), 0.4)',
                  }}
                />
                <span className="text-xs text-muted-foreground">
                  {item.label}
                </span>
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PurchaseManagement;
