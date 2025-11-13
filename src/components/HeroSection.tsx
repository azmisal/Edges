import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import PurchaseManagement from './PurchaseGraph'
import MonthlyActivityCard from './MonthlyActivityCard'
import ViewsByCountryCard from './ViewsByCountryCard'
import StatisticsCard from './StatisticsCard'

const HeroSection = () => {
  return (
    <section className=" w-full h-auto lg:h-screen flex items-center justify-center flex-row lg:pl-20">
      {/* Left half */}
      <div className="w-full lg:w-1/2 h-64 lg:h-full flex items-center justify-start">
        <div className="text-center lg:text-left max-w-lg ">
          {/* Headings */}
          <h1
            className="text-4xl lg:text-6xl font-semibold leading-tight lg:mb-4"
            style={{
              background: "linear-gradient(135deg, #3399FF, #0073E6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Freedom to Focus.
          </h1>

          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight text-foreground dark:text-white mb-6">
            Power to Grow.
          </h1>

          {/* Paragraph */}
          <p className="text-base leading-relaxed text-muted-foreground mb-8">
            We specialize in building intelligent, scalable solutions tailored to
            modern business challenges, fueling operational excellence and
            data-driven decision making.
          </p>

          {/* Contact Button */}
          <div className="flex justify-center lg:justify-start">
            <Button 
              onClick={() => window.location.href = '/contact'}
              className="bg-primary text-base text-white flex items-center gap-2 px-6 py-6 rounded-md transition-colors hover:bg-primary/90"
            >
              Contact <ArrowUpRight className="w-5 h-5" />
            </Button>
          </div>

        </div>
      </div>

      {/* Right half */}
      <div
        className="hidden sm:block w-full lg:w-1/2 h-full lg:h-full rounded-2xl flex-col items-center justify-center p-4 gap-4 overflow-hidden bg-[radial-gradient(circle,rgba(246,247,248,0.4)_0%,rgba(235,245,255,1)_100%)] dark:bg-[radial-gradient(circle,rgba(12,26,39,0.4)_0%,rgba(12,26,39,08)_100%)]"
      >
        {/* Cards container */}
        <div className="grid grid-cols-2 gap-6 place-items-center">
          {[PurchaseManagement, ViewsByCountryCard, StatisticsCard, MonthlyActivityCard].map(
            (Component, i) => (
              <div
                key={i}
                className="bg-white dark:bg-transparent flex items-center justify-center rounded-2xl shadow-[0px_1.81px_5.42px_0px_rgba(13,10,44,0.08)]  w-auto h-auto"
              >
                <Component />
              </div>
            )
          )}
        </div>

      </div>

    </section>
  );
};

export default HeroSection;
