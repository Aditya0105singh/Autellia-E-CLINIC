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
            className="flex items-center gap-3 cursor-pointer group relative"
            onClick={() => onNavigate("home")}
          >
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-all duration-500">
              <Heart className="w-6 h-6 text-white fill-white animate-pulse" />
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-900 dark:text-white leading-none tracking-tighter group-hover:text-pink-500 transition-colors">
                AUTELLIA
              </span>
              <span className="text-[10px] font-black text-pink-500/80 tracking-[0.3em] uppercase mt-1">E-Clinic OS</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-slate-100/50 dark:bg-slate-900/40 p-1.5 rounded-2xl border border-black/5 dark:border-white/5 backdrop-blur-md">
            {mainMenuItems.map((item) => (
              <button
                key={item.view}
                onClick={() => onNavigate(item.view)}
                className={cn(
                  "px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-300 rounded-xl relative group",
                  activeView === item.view
                    ? "bg-white dark:bg-slate-800 text-pink-600 shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                {item.label}
                {activeView === item.view && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-pink-500 rounded-full"></span>
                )}
              </button>
            ))}
            <button
              onClick={() => onNavigate("contact")}
              className={cn(
                "px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-300 rounded-xl",
                activeView === "contact"
                  ? "bg-white dark:bg-slate-800 text-pink-600 shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
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

      {/* Mobile Menu Overhaul */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white/98 dark:bg-slate-950/98 backdrop-blur-3xl overflow-y-auto pt-24 px-6 animate-in fade-in slide-in-from-top duration-500">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between p-5 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 mb-6">
              <span className="text-sm font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Appearance</span>
              <ThemeToggle />
            </div>

            {mainMenuItems.map((item) => (
              <button
                key={item.view}
                onClick={() => {
                  onNavigate(item.view);
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  "flex items-center justify-between p-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm transition-all",
                  activeView === item.view
                    ? "bg-pink-500 text-white shadow-xl shadow-pink-500/20"
                    : "hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-900 dark:text-white"
                )}
              >
                {item.label}
                <ChevronRight className={cn("w-5 h-5", activeView === item.view ? "text-white/50" : "text-pink-500")} />
              </button>
            ))}

            <div className="grid grid-cols-2 gap-4 mt-6">
              {categoryItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => {
                    onNavigate(item.view);
                    setMobileMenuOpen(false);
                  }}
                  className="flex flex-col items-start gap-4 p-6 rounded-[2.5rem] bg-slate-100 dark:bg-slate-900/30 border border-slate-200 dark:border-white/5 hover:border-pink-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-pink-500 shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white leading-tight">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            <Button
              className="w-full h-18 mt-8 rounded-[2.5rem] bg-pink-600 hover:bg-pink-700 text-white font-black uppercase tracking-widest text-lg shadow-2xl shadow-pink-500/30 mb-20"
              onClick={() => { onGetStarted && onGetStarted(); setMobileMenuOpen(false); }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
