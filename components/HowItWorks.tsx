import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { PageView } from "../App";
import { Building2, Stethoscope, UserPlus, Calendar, Video, FlaskConical, TrendingUp, CheckCircle, ArrowRight, Users, Clock, Shield, Star, Zap, Award, Play } from "lucide-react";
import { MedicineSection } from "./MedicineSection";

interface HowItWorksProps {
  onNavigate: (view: PageView) => void;
}

export function HowItWorks({ onNavigate }: HowItWorksProps) {
  const steps = [
    {
      icon: Building2,
      title: "Clinic Registers",
      description: "Create profile, invite staff",
      details: "Set up your clinic profile with basic information, upload necessary documents, and invite your medical staff to join the platform."
    },
    {
      icon: Stethoscope,
      title: "Doctor Onboards",
      description: "Verify ID, set schedule",
      details: "Doctors complete their verification process, set their availability schedule, and configure consultation preferences."
    },
    {
      icon: UserPlus,
      title: "Patient Signs Up",
      description: "Phone/ABHA registration",
      details: "Patients can register using their phone number or ABHA ID for seamless access to healthcare services."
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Online or in-clinic",
      details: "Book appointments easily through the platform for both teleconsultation and in-person visits."
    },
    {
      icon: Video,
      title: "Teleconsultation/Visit",
      description: "Join call, AI notes, e-Rx",
      details: "Conduct video consultations with AI-powered note-taking, generate prescriptions digitally, and maintain comprehensive records."
    },
    {
      icon: FlaskConical,
      title: "Lab/Pharmacy Order",
      description: "Digital tracking",
      details: "Send lab orders and prescriptions to partner pharmacies with real-time tracking and updates."
    },
    {
      icon: TrendingUp,
      title: "Follow-up & Analytics",
      description: "Risk alerts & preventive care",
      details: "Get intelligent health analytics, risk predictions, and automated follow-up reminders for continuous care."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation onNavigate={onNavigate} onGetStarted={() => onNavigate("login")} activeView="how-it-works" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-pink-50/50 dark:bg-slate-950/20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100 dark:bg-pink-900/30 rounded-full blur-3xl opacity-60 -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl mb-6 text-foreground font-bold tracking-tight">How <span className="text-pink-500">E-Clinic</span> Works</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            From registration to continuous care - a seamless journey for clinics, doctors, and patients.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-pink-100 dark:bg-pink-900/20" />

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step number circle */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white dark:bg-slate-800 border-4 border-pink-100 dark:border-pink-900/20 text-pink-600 dark:text-pink-400 rounded-full items-center justify-center z-10 shadow-sm font-bold text-xl">
                    {index + 1}
                  </div>

                  {/* Content card */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-20' : 'md:pr-20'}`}>
                    <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-slate-100 dark:border-border bg-card group rounded-2xl">
                      <div className="flex items-center gap-5 mb-5">
                        <div className="w-14 h-14 bg-pink-50 dark:bg-pink-900/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                          <step.icon className="w-7 h-7 text-pink-500 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-1 text-xl font-bold text-foreground">{step.title}</h3>
                          <p className="text-sm text-pink-500 dark:text-pink-400 font-bold uppercase tracking-wide">{step.description}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed font-medium">{step.details}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video/Demo Section */}
      <section className="py-24 bg-slate-900 dark:bg-black overflow-hidden relative">
        <div className="absolute inset-0 bg-pink-600/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl mb-6 text-white font-bold">See It In Action</h2>
          <p className="text-xl text-slate-300 mb-10 font-medium max-w-2xl mx-auto">
            Watch our comprehensive walkthrough to see how simplified healthcare management can be.
          </p>
          <Card className="overflow-hidden shadow-2xl aspect-video bg-slate-800 dark:bg-slate-900 flex items-center justify-center border-slate-700/50 rounded-3xl group cursor-pointer hover:border-pink-500/50 transition-colors">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 border border-white/20">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-pink-50 dark:bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-foreground font-bold">Why Choose E-Clinic?</h2>
            <p className="text-xl text-muted-foreground font-medium">The complete healthcare platform trusted by thousands</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all border-none bg-card shadow-sm group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-foreground">Easy Registration</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    Quick and simple onboarding process for clinics, doctors, and patients
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all border-none bg-card shadow-sm group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                  <Video className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-foreground">Seamless Consultations</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    High-quality video calls with integrated AI note-taking
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all border-none bg-card shadow-sm group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-foreground">Smart Analytics</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    Data-driven insights to improve patient outcomes
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all border-none bg-card shadow-sm group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-pink-50 dark:bg-pink-900/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30 transition-colors">
                  <FlaskConical className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-foreground">Integrated Services</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    Connected lab tests and pharmacy services
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all border-none bg-card shadow-sm group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                  <Calendar className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-foreground">Automated Scheduling</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    Smart appointment management and reminders
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all border-none bg-card shadow-sm group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors">
                  <ArrowRight className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-foreground">Continuous Care</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    Follow-ups and ongoing patient monitoring
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-card dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-foreground font-bold">Trusted by Healthcare Leaders</h2>
            <p className="text-xl text-muted-foreground font-medium">Real impact on healthcare delivery</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all bg-secondary/30 border-none group">
              <Users className="w-12 h-12 text-pink-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold mb-2 text-foreground">1000+</div>
              <p className="text-muted-foreground font-bold">Doctors Onboarded</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all bg-secondary/30 border-none group">
              <Building2 className="w-12 h-12 text-pink-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold mb-2 text-foreground">250+</div>
              <p className="text-muted-foreground font-bold">Partner Clinics</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all bg-secondary/30 border-none group">
              <Video className="w-12 h-12 text-pink-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold mb-2 text-foreground">100K+</div>
              <p className="text-muted-foreground font-bold">Consultations Done</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all bg-secondary/30 border-none group">
              <Star className="w-12 h-12 text-pink-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold mb-2 text-foreground">4.9/5</div>
              <p className="text-muted-foreground font-bold">Average Rating</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Medicine Section */}
      <MedicineSection onNavigate={onNavigate} />

      {/* CTA Section */}
      <section className="py-24 bg-card dark:bg-background border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-pink-600 rounded-[2.5rem] p-12 lg:p-16 text-center shadow-2xl shadow-pink-200 dark:shadow-pink-900/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">Ready to Transform Your Practice?</h2>
              <p className="text-xl mb-10 text-white/90 font-medium max-w-2xl mx-auto">
                Join thousands of healthcare providers already using E-Clinic to deliver better care.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 font-bold px-8 h-14 rounded-full shadow-lg" onClick={() => onNavigate("login")}>
                  Get Started Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-2 border-white/30 hover:bg-white/10 font-bold px-8 h-14 rounded-full"
                  onClick={() => onNavigate("contact")}
                >
                  Contact Sales
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
