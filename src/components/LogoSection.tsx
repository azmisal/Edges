import { useEffect, useState } from "react";
import logoLight from "../../assets/Logo.png";
import logoDark from "../../assets/LogoDark.png";
import Alsbeel from "../../assets/Alsbeel.png";
import Windson from "../../assets/Windson.png";
import { useTheme } from "next-themes";

const LogoSection = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    // Check dark mode
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Check screen width
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Change number of logos based on screen size
  const logoCount = isMobile ? 1 : 4;
  const logos = Array(logoCount).fill(isDark ? logoDark : logoLight);

  return (
    <section className="py-24 pb-0 sm:py-16 sm:pb-0 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
          {logos.map((logoSrc, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img
                src={logoSrc}
                alt="Company Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
