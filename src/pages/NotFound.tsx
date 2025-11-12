import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import BugAnimation from "../../assets/Bug.json";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <div className="text-center">
        <div className="w-auto h-auto mb-20">
          <Lottie animationData={BugAnimation} loop={true} />
        </div>
        <Button 
          variant="default" 
          onClick={() => navigate('/')}
          className="bg-primary hover:bg-primary/90"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
