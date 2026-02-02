import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Heart, Mail, Phone, MapPin, Sparkles, ChevronRight, Shield, Star, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { PageView } from "../App";

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-pink-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-16 sm:py-20 relative overflow-hidden border-t border-pink-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate("home")}>
              <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-200 dark:shadow-pink-900/20 group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl text-slate-900 dark:text-white font-bold group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">E-Clinic</span>
                <span className="text-xs text-pink-500 dark:text-pink-400 font-bold uppercase tracking-wider">Premium Healthcare</span>
              </div>
            </div>
            <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
              Your health, our priority. Experience the future of digital healthcare with E-Clinic.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <div key={i} className="w-10 h-10 bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-500 hover:text-white hover:border-pink-500 dark:hover:bg-pink-600 dark:hover:border-pink-600 transition-all duration-300 cursor-pointer group text-slate-400 dark:text-slate-500 shadow-sm">
                  <Icon className="w-4 h-4 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Features", view: "features" },
                { label: "How it Works", view: "how-it-works" },
                { label: "Pricing", view: "pricing" },
                { label: "AI & Features", view: "ai-features" }
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate(link.view as PageView)}
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 group font-medium"
                  >
                    <ChevronRight className="w-3 h-3 text-pink-300 dark:text-pink-600 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white text-lg font-bold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 rounded-lg flex items-center justify-center group-hover:border-pink-300 dark:group-hover:border-pink-600 transition-all duration-300 text-pink-500 dark:text-pink-400 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:contact@eclinic.com"
                  className="text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 font-medium"
                >
                  contact@eclinic.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 rounded-lg flex items-center justify-center group-hover:border-pink-300 dark:group-hover:border-pink-600 transition-all duration-300 text-pink-500 dark:text-pink-400 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+919998887777"
                  className="text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 font-medium"
                >
                  +91 999 888 7777
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 rounded-lg flex items-center justify-center group-hover:border-pink-300 dark:group-hover:border-pink-600 transition-all duration-300 text-pink-500 dark:text-pink-400 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-slate-500 dark:text-slate-400 font-medium">Mumbai, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white text-lg font-bold">Stay Updated</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
              Get the latest updates and health tips delivered to your inbox.
            </p>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-white dark:bg-slate-900 border-pink-100 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-pink-300 dark:focus:border-pink-600 focus:ring-pink-100 dark:focus:ring-pink-900/20 transition-all duration-300 shadow-sm"
                />
                <Button className="bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 text-white font-bold shadow-lg shadow-pink-200 dark:shadow-pink-900/20 transition-all duration-300 px-6 w-full sm:w-auto">
                  Subscribe
                </Button>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 font-medium">
                <Shield className="w-3 h-3" />
                <span>We respect your privacy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-200/50 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
              <p>&copy; 2025 E-Clinic. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
