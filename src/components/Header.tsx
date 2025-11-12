import { useEffect, useState } from "react";
import Logo from '../../assets/Logo.svg';
import LogoDark from '../../assets/LogoDark.svg';
import SunIcon from "../../assets/Sun.svg";
import MoonIcon from "../../assets/Moon.svg";
import { useTheme } from "@/contexts/ThemeContext";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsDark(
      theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/page-not-found" },
    { title: "Careers", href: "/page-not-found" },
    { title: "Clients", href: "/page-not-found" },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`w-full bg-background border-b border-gray-200 dark:border-none z-50 backdrop-blur-lg fixed top-0 left-0 transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="cursor-pointer">
          <img src={isDark ? LogoDark : Logo} alt="Edges+ Logo" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link, i) => (
            <a key={i} href={link.href} className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">
              {link.title}
            </a>
          ))}


        </nav>
        {/* Theme toggle for desktop */}
        <button
          onClick={toggleTheme}
          className="hidden lg:inline-flex h-auto w-auto items-center justify-center p-2 rounded-full transition-all duration-300"
        >
          {isDark ? (
            <img src={SunIcon} alt="Sun" className="w-7 h-7 transition-transform duration-300 rotate-180" />
          ) : (
            <img src={MoonIcon} alt="Moon" className="w-6 h-6 transition-transform duration-200 rotate-0" />
          )}
        </button>

        {/* Mobile controls */}
        <div className="flex items-center space-x-2 lg:hidden">
          {/* Theme toggle for mobile */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-full transition-all duration-300"
          >
            {isDark ? (
              <img src={SunIcon} alt="Sun" className="w-6 h-6" />
            ) : (
              <img src={MoonIcon} alt="Moon" className="w-6 h-6" />
            )}
          </button>

          {/* Hamburger Menu */}
          <button onClick={toggleMobileMenu} className="flex items-center justify-center p-2 rounded-md">
            {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col py-4 px-4">
            {navLinks.map((link, i) => (
              <li key={i} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <a
                  href={link.href}
                  className="block text-base text-foreground hover:text-primary transition-colors py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </header>
  );
};

export default Header;
