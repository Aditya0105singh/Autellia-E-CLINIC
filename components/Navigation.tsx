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
import { cn } from "./ui/utils";

interface NavigationProps {
  onNavigate: (view: PageView) => void;
  onGetStarted?: () => void;
  cartCount?: number;
  activeView?: PageView;
}

export function Navigation({ onNavigate, onGetStarted, cartCount = 0, activeView }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

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
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 w-full",
        scrolled || mobileMenuOpen
          ? "bg-white dark:bg-slate-950 border-b border-border shadow-sm py-2"
          : "bg-transparent border-b border-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate("home")}
          >
            <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center shadow-lg shadow-pink-200 transition-transform group-hover:scale-105">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
              <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-pink-600 transition-colors">
                E-CLINIC
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {mainMenuItems.map((item) => (
              <button
                key={item.view}
                onClick={() => onNavigate(item.view)}
                className={cn(
                  "px-4 py-2 text-sm font-bold transition-all duration-200 rounded-lg relative",
                  activeView === item.view
                    ? "text-pink-600"
                    : "text-muted-foreground hover:text-pink-600"
                )}
              >
                {item.label}
                {activeView === item.view && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-pink-500 rounded-full"></span>
                )}
              </button>
            ))}
            <button
              onClick={() => onNavigate("contact")}
              className={cn(
                "px-4 py-2 text-sm font-bold transition-all duration-200 rounded-lg",
                activeView === "contact"
                  ? "text-pink-600"
                  : "text-muted-foreground hover:text-pink-600"
              )}
            >
              Contact
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div>
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
              className="lg:hidden h-10 w-10 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Refined Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-slate-950 flex flex-col p-6 animate-in fade-in slide-in-from-right duration-300 mt-[60px] h-[calc(100vh-60px)]">
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-2 mb-8">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-2 ml-4">Main Menu</p>
              {mainMenuItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => {
                    onNavigate(item.view);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between w-full p-4 rounded-2xl font-bold text-sm transition-all",
                    activeView === item.view
                      ? "bg-pink-500 text-white shadow-lg shadow-pink-200 dark:shadow-pink-900/20"
                      : "text-foreground hover:bg-slate-100 dark:hover:bg-slate-900"
                  )}
                >
                  {item.label}
                  <ChevronRight className={cn("w-4 h-4", activeView === item.view ? "text-white" : "text-muted-foreground")} />
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate("contact");
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  "flex items-center justify-between w-full p-4 rounded-2xl font-bold text-sm transition-all",
                  activeView === "contact"
                    ? "bg-pink-500 text-white shadow-lg shadow-pink-200 dark:shadow-pink-900/20"
                    : "text-foreground hover:bg-slate-100 dark:hover:bg-slate-900"
                )}
              >
                Contact
                <ChevronRight className={cn("w-4 h-4", activeView === "contact" ? "text-white" : "text-muted-foreground")} />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-2 ml-4">Quick Links</p>
              <div className="grid grid-cols-2 gap-3">
                {categoryItems.map((item) => (
                  <button
                    key={item.view}
                    onClick={() => {
                      onNavigate(item.view);
                      setMobileMenuOpen(false);
                    }}
                    className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-border hover:border-pink-500 transition-all text-center"
                  >
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-8 pb-8">
              <Button
                variant="outline"
                className="w-full h-14 rounded-2xl font-bold border-2"
                onClick={() => {
                  onNavigate("login");
                  setMobileMenuOpen(false);
                }}
              >
                Login
              </Button>
              <Button
                className="w-full h-14 rounded-2xl bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-lg shadow-pink-200 dark:shadow-pink-900/20 text-lg"
                onClick={() => {
                  onGetStarted && onGetStarted();
                  setMobileMenuOpen(false);
                }}
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
