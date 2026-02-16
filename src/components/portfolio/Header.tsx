import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16">
          <a href="#" className="font-semibold text-lg text-foreground">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button size="sm" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleTheme();
                }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-2 w-fit"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
              <Button size="sm" className="w-fit" asChild>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Get in Touch
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
