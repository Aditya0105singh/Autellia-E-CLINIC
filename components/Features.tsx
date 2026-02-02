import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import {
    Video,
    Beaker,
    ShoppingBag,
    Cloud,
    Users,
    User,
    Building2,
    Stethoscope,
    ArrowRight,
    CheckCircle2,
    Zap,
    ShieldCheck,
    Smartphone,
    LayoutDashboard,
    BrainCircuit,
    PieChart
} from "lucide-react";
import type { PageView } from "../App";
import { cn } from "./ui/utils";

interface FeaturesProps {
    onNavigate: (view: PageView) => void;
}

export function Features({ onNavigate }: FeaturesProps) {
    const [activeRole, setActiveRole] = useState<"patient" | "doctor" | "clinic">("patient");

    const coreModules = [
        {
            id: "telemedicine",
            title: "Virtual Clinic",
            icon: Video,
            description: "HD secure video consultations with integrated digital prescriptions and real-time vital monitoring.",
            gradient: "from-blue-500 to-cyan-400",
            stats: "50k+ Consultations",
            features: ["HD Video Calls", "Instant Chat", "Digital Rx"]
        },
        {
            id: "pharmacy",
            title: "Smart Pharmacy",
            icon: ShoppingBag,
            description: "Automated medicine ordering with AI-powered prescription scanning and 2-hour express delivery.",
            gradient: "from-pink-500 to-rose-400",
            stats: "10k+ Medicines",
            features: ["AI OCR Scan", "Auto-Refill", "Cold Chain"]
        },
        {
            id: "labs",
            title: "Advanced Labs",
            icon: Beaker,
            description: "Book lab tests at home. Get smart reports with AI-driven trend analysis and longitudinal health tracking.",
            gradient: "from-purple-500 to-indigo-400",
            stats: "200+ Test Panels",
            features: ["Home Sample", "Smart Reports", "Expert Review"]
        },
        {
            id: "cloud",
            title: "Health Cloud",
            icon: Cloud,
            description: "Secure, centralized EMR storage with blockchain-level encryption and universal patient identity.",
            gradient: "from-emerald-500 to-teal-400",
            stats: "99.9% Uptime",
            features: ["Universal ID", "Encrypted EMR", "Fast Access"]
        }
    ];

    const roleBenefits = {
        patient: [
            { icon: Smartphone, title: "Self-Service Portal", desc: "Manage appointments, reports, and bills from one app." },
            { icon: Zap, title: "Instant Access", desc: "Book appointments or order medicines in under 60 seconds." },
            { icon: ShieldCheck, title: "Privacy First", desc: "You own your data. Control who sees your medical history." }
        ],
        doctor: [
            { icon: LayoutDashboard, title: "Smart Dashboard", desc: "Unified view of patient history, vitals, and reports." },
            { icon: BrainCircuit, title: "Clinical Support", desc: "AI suggestions based on latest medical protocols." },
            { icon: Stethoscope, title: "Virtual Practice", desc: "Expand your reach beyond physical boundaries." }
        ],
        clinic: [
            { icon: Building2, title: "EMS Infrastructure", desc: "Complete clinic management system with billing & lab." },
            { icon: PieChart, title: "Revenue Analytics", desc: "Detailed insights into clinic performance and trends." },
            { icon: Users, title: "Patient Retention", desc: "Automated follow-ups and personalized engagement." }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-pink-500/30">
            <Navigation onNavigate={onNavigate} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-pink-500/10 via-transparent to-transparent -z-10 blur-[120px]"></div>

                <div className="max-w-7xl mx-auto px-4 text-center">
                    <Badge className="mb-6 px-6 py-2 bg-pink-500/10 text-pink-400 border-pink-500/20 rounded-full font-bold tracking-widest uppercase text-xs">
                        Unified Healthcare OS
                    </Badge>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-white">
                        Everything for <br /> <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent italic">Modern Care.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Autellia is a comprehensive ecosystem that bridges the gap between patients, healthcare providers, and diagnostic centers using cutting-edge technology.
                    </p>
                </div>
            </section>

            {/* Core Ecosystem Bento */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Main Large Card */}
                    <Card className="md:col-span-2 md:row-span-2 p-12 bg-slate-900/50 border-white/5 relative overflow-hidden group rounded-[2.5rem]">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] -z-10 group-hover:bg-pink-500/20 transition-colors duration-700"></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center text-white mb-10 shadow-xl shadow-pink-500/20">
                                <BrainCircuit className="w-8 h-8" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Proactive <br /> Core Engine</h2>
                            <p className="text-lg text-slate-400 leading-relaxed max-w-md mb-12">
                                Our infrastructure isn't just a database—it's an intelligent layer that sits between all modules, ensuring data flows securely and provides value at every touchpoint.
                            </p>

                            <div className="mt-auto grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-4xl font-black text-white mb-1">99.9%</div>
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Uptime Reliability</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white mb-1">256-bit</div>
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">AES Encryption</div>
                                </div>
                            </div>
                        </div>
                        {/* Abstract UI Elements */}
                        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-8 hidden lg:block">
                            <div className="w-full h-full bg-slate-950/80 rounded-3xl border border-white/10 p-6 flex flex-col gap-4 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Network_Stability: Optimal</div>
                                </div>
                                <div className="space-y-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-pink-500/50" style={{ width: `${Math.random() * 60 + 40}%` }}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Individual Module Cards */}
                    {coreModules.map((module) => (
                        <Card key={module.id} className="p-8 bg-slate-900/40 border-white/5 hover:border-pink-500/30 transition-all duration-500 group rounded-[2rem] flex flex-col">
                            <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center text-white mb-8 bg-gradient-to-br transition-transform group-hover:scale-110 duration-500",
                                module.gradient
                            )}>
                                <module.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{module.title}</h3>
                            <p className="text-sm text-slate-400 mb-8 leading-relaxed line-clamp-3">
                                {module.description}
                            </p>

                            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                <div className="text-xs font-bold text-pink-500 uppercase tracking-wider">{module.stats}</div>
                                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Role-Based Benefits */}
            <section className="py-32 bg-slate-900/20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tight">Tailored Experience</h2>

                    <div className="inline-flex p-2 bg-slate-900 border border-white/5 rounded-2xl mb-20">
                        {[
                            { id: "patient", icon: User, label: "Patients" },
                            { id: "doctor", icon: Stethoscope, label: "Doctors" },
                            { id: "clinic", icon: Building2, label: "Clinics" }
                        ].map((role) => (
                            <button
                                key={role.id}
                                onClick={() => setActiveRole(role.id as any)}
                                className={cn(
                                    "flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all",
                                    activeRole === role.id ? "bg-pink-600 text-white shadow-lg shadow-pink-500/20" : "text-slate-400 hover:text-white"
                                )}
                            >
                                <role.icon className="w-4 h-4" />
                                {role.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {roleBenefits[activeRole].map((benefit, i) => (
                            <div key={i} className="text-left p-10 bg-slate-900 rounded-[2.5rem] border border-white/5 hover:border-pink-500/20 transition-colors animate-fade-in group">
                                <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-pink-500 mb-8 group-hover:scale-110 transition-transform">
                                    <benefit.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{benefit.title}</h4>
                                <p className="text-slate-400 font-medium leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Verification */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-950 p-12 md:p-20 rounded-[4rem] border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-30"></div>

                    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Secure by Design. <br /> Private by Default.</h2>
                            <p className="text-lg text-slate-400 font-medium leading-relaxed">
                                We believe healthcare data is sacred. That's why every byte of information in our ecosystem is encrypted and stored according to global HIPAA and GDPR standards.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {["HIPAA COMPLIANT", "GDPR READY", "ISO 27001", "BLOCKCHAIN SECURED"].map((cert) => (
                                    <Badge key={cert} className="px-4 py-2 bg-white/5 text-slate-400 border-white/10 rounded-lg text-[10px] font-black tracking-[0.2em]">
                                        {cert}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 grid grid-cols-2 gap-4">
                            {[
                                { title: "Universal ID", desc: "One identity across all clinics" },
                                { title: "Consent Ledger", desc: "Transparent data access logs" },
                                { title: "Instant Transfer", desc: "Move your records safely" },
                                { title: "Verified Hub", desc: "All providers are audited" }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-slate-950/50 rounded-3xl border border-white/5">
                                    <CheckCircle2 className="w-5 h-5 text-pink-500 mb-4" />
                                    <h5 className="font-black text-white mb-1 uppercase text-sm tracking-tight">{item.title}</h5>
                                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 text-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Ready to evolve?</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">Join the decentralized healthcare revolution today.</p>
                    <div className="flex justify-center gap-6 pt-8">
                        <Button
                            size="lg"
                            className="h-16 px-12 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-black text-lg shadow-2xl shadow-pink-500/20 transition-all hover:scale-105"
                            onClick={() => onNavigate("login")}
                        >
                            Get Started Free
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-16 px-12 border-2 border-white/10 hover:bg-white/5 text-white rounded-full font-black text-lg transition-all"
                            onClick={() => onNavigate("how-it-works")}
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>

            <Footer onNavigate={onNavigate} />
        </div>
    );
}
