import { Button } from "./ui/button";
import {
  ShoppingCart,
  Pill,
  FlaskConical,
  Stethoscope,
  Brain,
  Crown,
  Menu,
  X,
  ChevronRight,
  Heart
} from "lucide-react";
import { PageView } from "../App";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface NavigationProps {
  onNavigate: (view: PageView) => void;
  onGetStarted?: () => void;
  cartCount?: number;
}

export function Navigation({ onNavigate, onGetStarted, cartCount = 0 }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainMenuItems = [
    { label: "Home", view: "home" as PageView },
    { label: "Features", view: "features" as PageView },
    { label: "How it Works", view: "how-it-works" as PageView },
    { label: "Pricing", view: "pricing" as PageView },
    { label: "AI & Features", view: "ai-features" as PageView },
  ];

  const categoryItems = [
    { label: "Medicine", view: "medicine" as PageView, icon: Pill },
    { label: "Doctor Consult", view: "doctor-consult" as PageView, icon: Stethoscope },
    { label: "Lab Tests", view: "lab-tests" as PageView, icon: FlaskConical },
    { label: "Health Insights", view: "health-insights" as PageView, icon: Brain },
    { label: "PLUS Membership", view: "plus" as PageView, icon: Crown },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "glass border-b border-border/40 py-2"
        : "bg-transparent border-b border-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate("home")}
          >
            <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center shadow-lg shadow-pink-200 group-hover:scale-105 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-foreground leading-none tracking-tight group-hover:text-pink-600 transition-colors">
                E-Clinic
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {mainMenuItems.map((item) => (
              <button
                key={item.view}
                onClick={() => onNavigate(item.view)}
                className="px-4 py-2 text-sm font-bold text-muted-foreground hover:text-pink-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate("contact")}
              className="px-4 py-2 text-sm font-bold text-muted-foreground hover:text-pink-600 transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="relative text-muted-foreground hover:text-pink-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                  {cartCount}
                </span>
              )}
            </Button>

            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant="ghost"
                onClick={() => onNavigate("login")}
                className="font-bold text-foreground hover:text-pink-600"
              >
                Login
              </Button>
              <Button
                onClick={onGetStarted}
                className="font-bold bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-200 transition-all duration-300 rounded-full px-6"
              >
                Get Started
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl border-t border-border overflow-y-auto p-4 flex flex-col gap-4 animate-fade-in-up">
          {mainMenuItems.map((item) => (
            <button
              key={item.view}
              onClick={() => {
                onNavigate(item.view);
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-950/30 text-foreground font-bold transition-colors"
            >
              {item.label}
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          ))}
          <div className="h-px bg-border/50 my-2" />
          <div className="grid grid-cols-2 gap-2">
            {categoryItems.map((item) => (
              <button
                key={item.view}
                onClick={() => {
                  onNavigate(item.view);
                  setMobileMenuOpen(false);
                }}
                className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-secondary/30 hover:bg-pink-50 dark:hover:bg-pink-950/30 text-sm font-bold transition-colors group"
              >
                <item.icon className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
                {item.label}
              </button>
            ))}
          </div>
          <div className="h-px bg-border/50 my-2" />
          <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold" onClick={() => { onGetStarted && onGetStarted(); setMobileMenuOpen(false); }}>
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}
