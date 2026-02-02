import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Activity,
  Brain,
  Video,
  TrendingUp,
  Heart,
  Star,
  Check,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { PageView } from "../App";
import { MedicineSection } from "./MedicineSection";

interface HomeProps {
  onGetStarted: () => void;
  onNavigate: (view: PageView) => void;
}

export function Home({ onGetStarted, onNavigate }: HomeProps) {

  const doctors = [
    {
      name: "Dr. Priya Sharma",
      specialty: "Cardiologist",
      experience: "15 years",
      rating: 4.9,
      consultations: "1.2k+",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=260&h=260&auto=format&fit=crop"
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "General Physician",
      experience: "12 years",
      rating: 4.8,
      consultations: "2.4k+",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=260&h=260&auto=format&fit=crop"
    },
    {
      name: "Dr. Anita Desai",
      specialty: "Pediatrician",
      experience: "10 years",
      rating: 4.9,
      consultations: "1.8k+",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=260&h=260&auto=format&fit=crop"
    },
    {
      name: "Dr. Vikram Singh",
      specialty: "Dermatologist",
      experience: "8 years",
      rating: 4.7,
      consultations: "950+",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=260&h=260&auto=format&fit=crop"
    }
  ];

  const features = [
    {
      icon: Video,
      title: "Virtual Consultations",
      description: "Connect with top specialists instantly via HD secure video calls."
    },
    {
      icon: Brain,
      title: "AI Health Assistant",
      description: "Get instant explanations for your medical reports in simple language."
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Visualize your health trends with predictive insights."
    },
    {
      icon: Activity,
      title: "Device Integration",
      description: "Sync data from your wearables for real-time monitoring."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-pink-500/30 selection:text-pink-600">
      <Navigation onGetStarted={onGetStarted} onNavigate={onNavigate} activeView="home" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Soft Pink Background Blob */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-pink-100/50 dark:bg-pink-900/10 rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-rose-100/40 dark:bg-rose-900/10 rounded-full blur-3xl -z-10 opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.1]">
              Your health, <br />
              our priority. <span className="text-pink-500">Digitally.</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Connect patients, doctors, and clinics on one unified platform. Get AI-powered health insights, telemedicine, and seamless care management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <Button size="lg" onClick={onGetStarted} className="h-14 px-8 text-base shadow-xl shadow-pink-200 dark:shadow-pink-900/20 rounded-lg hover:scale-105 transition-transform bg-pink-500 hover:bg-pink-600 text-white font-bold">
                Book Consult
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-2 border-border dark:border-slate-700 rounded-lg hover:bg-secondary text-foreground hover:text-pink-500 font-bold bg-background">
                Explore Features
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-8 text-base text-muted-foreground font-bold hover:bg-transparent hover:text-pink-600">
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-8 opacity-90">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                <span className="font-bold text-foreground">1000+ doctors</span> trust us
              </div>
              <div className="hidden sm:block h-8 w-px bg-border mx-2"></div>
              <div className="text-sm font-medium text-muted-foreground w-full sm:w-auto">
                Available in <span className="font-bold text-foreground">English & Hindi</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative animate-fade-in delay-200">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/50">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800"
                alt="Doctor with patient"
                className="w-full h-auto object-cover opacity-90 dark:opacity-80"
              />
            </div>

            {/* Floating Card - Health Score */}
            <div className="absolute -left-8 bottom-12 bg-card p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-float hidden lg:flex border border-border">
              <div className="w-12 h-12 rounded-full bg-pink-50 dark:bg-pink-950/30 flex items-center justify-center text-pink-500">
                <Heart className="w-6 h-6 fill-pink-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">Health Score</p>
                <p className="text-xl font-bold text-green-600">95%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">Core Features</h2>
            <p className="text-lg text-muted-foreground">Everything you need for better health</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card dark:bg-secondary/10 group rounded-2xl">
                <div className="w-14 h-14 rounded-2xl bg-pink-50 dark:bg-pink-950/20 flex items-center justify-center mb-6 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Showcase */}
      <section className="py-24 overflow-hidden relative bg-slate-50 dark:bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-8">
              <Badge className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 border-none px-3 py-1 rounded-full text-sm font-bold">
                AI & Advanced Features
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Smart Healthcare <br /> <span className="text-pink-500">AI Assistant</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                Get instant analysis of your medical reports and personalized health insights.
              </p>

              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                {[
                  "Report Analysis",
                  "Symptom Checker",
                  "Medicine Reminders",
                  "Local Language Support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400 stroke-[3px]" />
                    </div>
                    <span className="font-bold text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-8 rounded-full h-12 px-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 font-bold">
                Try AI Demo <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="flex-1 w-full relative">
              <div className="relative z-10 bg-card rounded-3xl shadow-2xl border border-border p-6 sm:p-8 max-w-md mx-auto lg:ml-auto">
                <div className="flex items-center gap-4 mb-6 border-b border-border pb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-pink-200 dark:shadow-pink-900/20">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Dr. AI</p>
                    <p className="text-xs font-bold text-pink-500">Online</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl rounded-tl-none border border-border">
                    <p className="text-sm font-medium text-foreground">Your Vitamin D levels are low. I suggest taking the prescribed supplement and getting 15 mins of morning sun.</p>
                  </div>

                  <div className="bg-pink-500 p-4 rounded-2xl rounded-tr-none ml-auto max-w-[90%] shadow-lg shadow-pink-100 dark:shadow-pink-900/20">
                    <p className="text-sm font-bold text-white">Okay, what foods should I eat?</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl rounded-tl-none border border-border">
                    <p className="text-sm font-medium text-foreground">Include fatty fish (salmon), egg yolks, and fortified milk in your diet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medicine Section (Already Integrated) */}
      <MedicineSection onNavigate={onNavigate} />

      {/* Doctors Section */}
      <section className="py-24 bg-card dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground">Expert Doctors</h2>
              <p className="text-muted-foreground font-medium">Book appointments with top specialists.</p>
            </div>
            <Button variant="ghost" className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 font-bold hover:bg-pink-50 dark:hover:bg-pink-950/20" onClick={() => onNavigate("doctor-consult")}>
              View all doctors <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, i) => (
              <div key={i} className="group bg-card rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all border border-border hover:border-pink-100 dark:hover:border-pink-900/30">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-secondary">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white dark:bg-slate-800 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {doctor.rating}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-foreground">{doctor.name}</h3>
                <p className="text-pink-500 font-bold text-sm mb-2">{doctor.specialty}</p>
                <Button className="w-full mt-4 rounded-lg bg-card border-2 border-border hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 text-foreground hover:text-pink-600 dark:hover:text-pink-400 font-bold transition-colors" variant="outline" onClick={onGetStarted}>
                  Book Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink-50 dark:bg-slate-950/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-[2.5rem] p-12 lg:p-16 text-center border border-pink-100 dark:border-pink-900/30 shadow-xl shadow-pink-100 dark:shadow-pink-900/20 relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">Ready to get started?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                Join thousands of users who trust E-Clinic for their healthcare needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-10 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-lg shadow-pink-200 dark:shadow-pink-900/20" onClick={onGetStarted}>
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
