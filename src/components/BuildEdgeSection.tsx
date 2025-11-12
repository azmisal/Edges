import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import myAnimation from "../../assets/lets.json";

const BuildEdgeSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Text Section */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-display-md xl:text-display-lg font-bold leading-tight">
              <span className="text-primary">Lets Build Your Edge.</span><br />
              <span className="text-foreground">With Edges+</span>
            </h2>
            <p className="text-base sm:text-lg xl:text-xl text-muted-foreground max-w-lg">
              <span className="font-bold">Prepare for tomorrow's challenges today</span> with Edges+. Our 
              full-range solutions are crafted to strengthen your business 
              foundation. Whether you need core systems or advanced 
              capabilities, we provide the edge you need to succeed.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-sm sm:text-base mx-auto lg:mx-0">
              Learn More
            </Button>
          </div>
          
          {/* Right Animation Section */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                <Lottie 
                  animationData={myAnimation} 
                  loop={true}
                  style={{ transform: 'scaleX(-1)' }}  // This will flip the animation horizontally
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuildEdgeSection;
