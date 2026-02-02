import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { PageView } from "../App";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Heart, Headphones } from "lucide-react";
import { useState } from "react";

interface ContactProps {
  onNavigate: (view: PageView) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation onNavigate={onNavigate} onGetStarted={() => onNavigate("login")} activeView="contact" />

      {/* Hero Section */}
      <section className="relative bg-pink-50/50 dark:bg-slate-950/20 py-24 overflow-hidden border-b border-pink-100 dark:border-pink-900/30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100 dark:bg-pink-900/40 rounded-full blur-3xl opacity-60 -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl mb-6 shadow-lg shadow-pink-100 dark:shadow-pink-900/20 text-pink-500">
            <MessageCircle className="w-8 h-8 fill-pink-500/10" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 font-bold text-foreground tracking-tight">Get In <span className="text-pink-500">Touch</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Have questions? We'd love to hear from you. Our team is always here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="p-10 border-none shadow-2xl bg-card rounded-[2rem]">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">Name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-foreground focus:border-pink-500 focus:ring-pink-500/20 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-foreground focus:border-pink-500 focus:ring-pink-500/20 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">Message</label>
                  <Textarea
                    placeholder="Tell us how we can help..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-foreground focus:border-pink-500 focus:ring-pink-500/20 rounded-xl resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-14 bg-slate-900 dark:bg-pink-600 hover:bg-slate-800 dark:hover:bg-pink-700 text-white font-bold rounded-xl mt-4">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-10 lg:pt-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">Contact Information</h2>
                <p className="text-xl text-muted-foreground mb-8 font-medium">
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="p-6 border-none shadow-lg bg-card rounded-2xl hover:shadow-xl transition-all group">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-pink-50 dark:bg-pink-900/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-pink-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold text-foreground text-lg">Email</h3>
                      <p className="text-muted-foreground text-sm mb-2">For general inquiries</p>
                      <a href="mailto:contact@eclinic.com" className="text-pink-600 dark:text-pink-400 font-bold hover:underline">
                        contact@eclinic.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-none shadow-lg bg-card rounded-2xl hover:shadow-xl transition-all group">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-pink-50 dark:bg-pink-900/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 transition-colors duration-300">
                      <Headphones className="w-6 h-6 text-pink-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold text-foreground text-lg">Support</h3>
                      <p className="text-muted-foreground text-sm mb-2">24/7 dedicated support</p>
                      <a href="tel:+919998887777" className="text-pink-600 dark:text-pink-400 font-bold hover:underline">
                        +91 999 888 7777
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-none shadow-lg bg-card rounded-2xl hover:shadow-xl transition-all group">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-pink-50 dark:bg-pink-900/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-pink-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold text-foreground text-lg">Office</h3>
                      <p className="text-muted-foreground text-sm mb-2">Come say hello</p>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">
                        123 Healthcare Street<br />
                        Mumbai, Maharashtra 400001
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-slate-900 dark:bg-slate-950 text-white rounded-[2rem] shadow-xl relative overflow-hidden border-0">
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Clock className="w-8 h-8 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
