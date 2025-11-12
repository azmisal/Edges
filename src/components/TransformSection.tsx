import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const TransformSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 dark:bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,107,214,0.1)_100%)]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-display-md xl:text-display-lg font-bold leading-tight">
            <span className="text-foreground">Transform Your </span>
            <span className="text-primary">Business</span><br />
            <span className="text-foreground">With Us</span>
          </h2>
          
          <p className="text-base sm:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, Lovable helps businesses transform ideas into impactful solutions. Whether you need streamlined 
            operations, seamless workflows, or future-ready digital applications we are your go-to partner.
          </p>
          
          {/* <Button size="lg" className="bg-primary hover:bg-primary/90 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6">
            Contact Us <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;