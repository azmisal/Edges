import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import LogoDark from '../../assets/LogoDark.png';
import Logo from "../../assets/Logo.png"
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(
      theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, [theme]);
  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Service', href: '/NotFound' },
    { name: 'Careers', href: '/NotFound' },
    { name: 'Clients', href: '/NotFound' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaXTwitter, href: 'https://x.com/edgesplus', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/edgesplus/#', label: 'Instagram' },

    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/edgesplus/', label: 'LinkedIn' },

  ];

  return (
    <footer className="bg-footer border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between gap-8 mb-8 items-center">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={isDark ? LogoDark : Logo} alt="Edges+ Logo" />
            </div>
            <p className="text-footer-muted max-w-md leading-relaxed ml-2 text-xs lg:text-base ">
              Empower your enterprise with Edges+'s smart Solution, designed to simplify
              complex business processes with precision and ease.
            </p>
          </div>
          <div className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-x-32">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-xs lg:text-base text-footer-muted hover:text-footer-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-footer-muted text-sm mb-4 sm:mb-0 ml-2">
            Copyright © 2025 Edges+
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-footer-muted hover:text-footer-foreground transition-colors duration-200 p-2 hover:bg-muted rounded-full"
                aria-label={social.label}
              >
                <social.icon size={32} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
