import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { PageView } from "../App";
import { Check, X, HelpCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { MedicineSection } from "./MedicineSection";

interface PricingProps {
  onNavigate: (view: PageView) => void;
}

export function Pricing({ onNavigate }: PricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for individual practitioners starting their digital journey.",
      features: [
        { text: "1 doctor profile", included: true },
        { text: "Up to 10 patients/month", included: true },
        { text: "Telemedicine (Basic)", included: true },
        { text: "Digital Prescriptions", included: true },
        { text: "AI Summarization", included: false },
        { text: "IoT Integration", included: false },
        { text: "Analytics Dashboard", included: false },
        { text: "Priority Support", included: false }
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: billingPeriod === "monthly" ? "₹4,999" : "₹47,990",
      period: billingPeriod === "monthly" ? "/ doctor / month" : "/ doctor / year",
      description: "For growing practices and clinics needing advanced tools.",
      features: [
        { text: "Unlimited patients", included: true },
        { text: "AI Health Summaries", included: true },
        { text: "IoT Device Integration", included: true },
        { text: "Advanced Analytics", included: true },
        { text: "Lab & Pharmacy Integration", included: true },
        { text: "24/7 Priority Support", included: true },
        { text: "Custom Branding", included: true },
        { text: "API Access", included: false }
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large hospitals and chains requiring scale & security.",
      features: [
        { text: "All Professional features", included: true },
        { text: "On-premise deployment", included: true },
        { text: "Dedicated Account Manager", included: true },
        { text: "Custom Integrations", included: true },
        { text: "HIPAA & NDHM compliance", included: true },
        { text: "Advanced Reporting", included: true },
        { text: "Unlimited API access", included: true },
        { text: "White-label solution", included: true }
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation onNavigate={onNavigate} onGetStarted={() => onNavigate("login")} />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-pink-50/50 dark:bg-slate-950/20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100 dark:bg-pink-900/40 rounded-full blur-3xl opacity-60 -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-6 bg-white dark:bg-slate-900 text-pink-600 dark:text-pink-400 px-4 py-1.5 shadow-sm border border-pink-100 dark:border-pink-900/30 font-bold tracking-wide">
            Flexible Pricing Plans
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-foreground font-bold tracking-tight">Simple, Transparent <span className="text-pink-500">Pricing</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 font-medium">
            Choose the plan that fits your practice. No hidden fees, cancel anytime. Save 20% with annual billing.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-1 bg-white dark:bg-slate-900 rounded-full p-1.5 shadow-lg border border-pink-100 dark:border-pink-900/30">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 sm:px-8 py-3 rounded-full transition-all font-bold text-sm ${billingPeriod === "monthly" ? "bg-pink-500 text-white shadow-md" : "text-muted-foreground hover:text-pink-500"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-4 sm:px-8 py-3 rounded-full transition-all font-bold text-sm flex items-center gap-2 ${billingPeriod === "yearly" ? "bg-pink-500 text-white shadow-md" : "text-muted-foreground hover:text-pink-500"
                }`}
            >
              Yearly
              <Badge className={`px-2 py-0.5 text-[10px] ${billingPeriod === "yearly" ? "bg-white text-pink-600" : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"}`}>Save 20%</Badge>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 text-center">
            <div>
              <div className="text-3xl font-bold mb-1 text-foreground">30 Days</div>
              <p className="text-sm text-muted-foreground font-medium">Free Trial</p>
            </div>
            <div className="border-l border-r border-slate-200 dark:border-slate-800">
              <div className="text-3xl font-bold mb-1 text-foreground">1000+</div>
              <p className="text-sm text-muted-foreground font-medium">Happy Clinics</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1 text-foreground">24/7</div>
              <p className="text-sm text-muted-foreground font-medium">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-card dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-8 rounded-3xl transition-all duration-300 bg-card ${plan.popular
                  ? 'border-2 border-pink-500 shadow-2xl scale-105 z-10 dark:bg-slate-900'
                  : 'border border-border shadow-lg hover:shadow-xl dark:bg-slate-900/50 hover:bg-card'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1.5 text-sm font-bold shadow-lg shadow-pink-200 dark:shadow-pink-900/20 border-none">Most Popular</Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 font-medium px-4 leading-relaxed">{plan.description}</p>
                  <div className="mb-2 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-slate-400 font-medium text-sm">{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400 font-bold" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-slate-400" />
                        </div>
                      )}
                      <span className={`text-sm font-medium ${feature.included ? "text-slate-700 dark:text-slate-300" : "text-slate-400 line-through"}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-bold h-12 rounded-xl transition-all ${plan.popular
                    ? "bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-200 dark:shadow-pink-900/20"
                    : "bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400"
                    }`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => plan.name === "Enterprise" ? onNavigate("contact") : onNavigate("login")}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-pink-50 dark:bg-slate-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground font-medium">Everything you need to know about our pricing</p>
          </div>

          <div className="grid gap-6">
            {[
              {
                q: "Can I change plans later?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, debit cards, UPI, and net banking through Razorpay and Paytm."
              },
              {
                q: "Is there a contract or can I cancel anytime?",
                a: "No contracts required. Cancel anytime with no penalties. You'll have access until the end of your billing period."
              },
              {
                q: "Do you offer discounts for multiple doctors?",
                a: "Yes! Contact our sales team for volume discounts on Professional and Enterprise plans."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-8 border-none shadow-sm hover:shadow-md transition-all bg-card rounded-2xl">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center flex-shrink-0 text-pink-600 dark:text-pink-400 mt-1">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medicine Section */}
      <MedicineSection onNavigate={onNavigate} />

      {/* CTA Section */}
      <section className="py-24 bg-card dark:bg-background border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 dark:bg-slate-950 rounded-[2.5rem] p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden border border-slate-700/50">
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">Start Your Free Trial Today</h2>
              <p className="text-xl mb-10 text-slate-300 font-medium max-w-2xl mx-auto">
                No credit card required. 30-day free trial. Cancel anytime.
              </p>
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-10 h-14 rounded-full shadow-lg shadow-pink-500/30" onClick={() => onNavigate("login")}>
                Get Started Free <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
