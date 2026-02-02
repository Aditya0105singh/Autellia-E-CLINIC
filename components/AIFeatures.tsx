import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { PageView } from "../App";
import { Brain, Mic, Shield, TrendingUp, FileText, Activity, Sparkles, Lock, Server, Share2, ChevronRight, Zap, Target, Database } from "lucide-react";
import { useState } from "react";

interface AIFeaturesEnhancedProps {
    onNavigate: (view: PageView) => void;
}

export function AIFeaturesEnhanced({ onNavigate }: AIFeaturesEnhancedProps) {
    const [activeTab, setActiveTab] = useState<number | null>(null);

    const aiFeatures = [
        {
            id: 1,
            icon: Brain,
            title: "Intelligent Diagnostics",
            description: "Advanced symptom analysis engine using multi-model AI for 99.9% referral accuracy.",
            span: "md:col-span-2 md:row-span-2",
            gradient: "from-pink-500 via-rose-500 to-pink-600",
            details: "Analyzes natural language inputs to identify potential conditions and suggest the right specialists.",
            accent: "shadow-pink-500/20"
        },
        {
            id: 2,
            icon: FileText,
            title: "Report Explainer",
            description: "Demystifying complex medical terminology for patients.",
            span: "md:col-span-1 md:row-span-1",
            gradient: "from-rose-500 to-pink-500",
            details: "Turns dry Lab/Radiology reports into easy-to-read summaries.",
            accent: "shadow-rose-500/20"
        },
        {
            id: 3,
            icon: Activity,
            title: "Imaging Vision",
            description: "Computer vision for rapid X-ray & MRI pattern detection.",
            span: "md:col-span-1 md:row-span-2",
            gradient: "from-purple-500 to-pink-500",
            details: "Flagging abnormalities in seconds to assist radiology workflows.",
            accent: "shadow-purple-500/20"
        },
        {
            id: 4,
            icon: Mic,
            title: "Hybrid Voice",
            description: "Multilingual medical transcription.",
            span: "md:col-span-1 md:row-span-1",
            gradient: "from-pink-400 to-rose-400",
            details: "Native support for 15+ Indian languages.",
            accent: "shadow-pink-400/20"
        },
        {
            id: 5,
            icon: TrendingUp,
            title: "Predictive Health",
            description: "Proactive risk scoring engine based on longitudinal data.",
            span: "md:col-span-2 md:row-span-1",
            gradient: "from-slate-900 to-slate-800 dark:from-pink-900/40 dark:to-slate-900",
            details: "Identifying chronic disease risks before symptoms appear.",
            accent: "shadow-slate-500/10"
        }
    ];

    const techStats = [
        { label: "Latency", value: "<150ms", icon: Zap },
        { label: "Accuracy", value: "99.2%", icon: Target },
        { label: "Data points", value: "2M+", icon: Database }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans transition-colors duration-300 selection:bg-pink-100 dark:selection:bg-pink-900/30">
            <Navigation onNavigate={onNavigate} onGetStarted={() => onNavigate("login")} />

            {/* Futuristic Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Badge className="mb-8 px-6 py-2 bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-900/30 rounded-full font-bold tracking-widest uppercase text-xs animate-fade-in">
                        Next-Gen Neural Engine
                    </Badge>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-500">
                        Healthcare <br /> <span className="text-pink-600">Reimagined.</span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-xl text-slate-500 dark:text-slate-400 font-medium mb-12 leading-relaxed">
                        Harness the power of private, secure medical AI models designed to scale your practice and enhance patient outcomes in real-time.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Button
                            size="lg"
                            onClick={() => onNavigate("login")}
                            className="bg-slate-900 dark:bg-pink-600 hover:bg-slate-800 dark:hover:bg-pink-700 text-white font-bold h-16 px-10 rounded-2xl shadow-xl shadow-slate-200 dark:shadow-pink-900/30 transition-all hover:scale-[1.02] active:scale-95"
                        >
                            Start Free Trial
                            <Zap className="ml-2 w-5 h-5 fill-current" />
                        </Button>
                        <div className="flex -space-x-3 overflow-hidden p-1">
                            {[1, 2, 3, 4].map((i) => (
                                <img
                                    key={i}
                                    className="inline-block h-10 w-10 rounded-full ring-4 ring-white dark:ring-slate-950"
                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                    alt="User"
                                />
                            ))}
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 ring-4 ring-white dark:ring-slate-950">
                                +2k
                            </div>
                        </div>
                        <p className="text-sm font-bold text-slate-400 dark:text-slate-500">Trusted by over 2000+ clinicians</p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto border-t border-slate-100 dark:border-slate-900 pt-16">
                        {techStats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-slate-100 dark:border-slate-800">
                                    <stat.icon className="w-6 h-6 text-pink-500" />
                                </div>
                                <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bento Grid Section */}
            <section className="py-24 bg-slate-50/50 dark:bg-slate-900/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Mastering the <span className="text-pink-600">Spectrum</span> of Care</h2>
                            <p className="text-lg font-medium text-slate-500 dark:text-slate-400">Our features are integrated into a single, cohesive engine that learns with every consultation.</p>
                        </div>
                        <Badge variant="outline" className="h-10 px-6 rounded-full border-slate-200 dark:border-slate-800 font-bold text-slate-500 dark:text-slate-400">
                            Interactive View
                        </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[800px]">
                        {aiFeatures.map((feature) => (
                            <Card
                                key={feature.id}
                                onMouseEnter={() => setActiveTab(feature.id)}
                                onMouseLeave={() => setActiveTab(null)}
                                className={`group relative p-8 border-0 shadow-lg transition-all duration-500 rounded-[2.5rem] overflow-hidden flex flex-col cursor-crosshair
                  ${feature.span} 
                  ${activeTab === feature.id ? 'scale-[0.98] shadow-2xl' : 'scale-100'}
                  ${feature.id === 5 ? 'bg-slate-900 dark:bg-slate-900/80 text-white' : 'bg-white dark:bg-slate-900/50'}
                `}
                            >
                                {/* Visual Accent */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>

                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-auto bg-gradient-to-tr ${feature.gradient} shadow-lg ${feature.accent} group-hover:rotate-12 transition-transform duration-500`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>

                                <div className="relative z-10 mt-12 mb-8">
                                    <h3 className={`text-2xl font-black mb-3 ${feature.id === 5 ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{feature.title}</h3>
                                    <p className={`font-medium mb-6 ${feature.id === 5 ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>{feature.description}</p>

                                    {/* Mock UI Element for Intelligent Diagnostics (ID: 1) */}
                                    {feature.id === 1 && (
                                        <div className="mt-8 grid grid-cols-2 gap-4 animate-fade-in">
                                            <div className="col-span-2 bg-slate-900 dark:bg-black rounded-2xl p-4 border border-slate-800 font-mono text-[10px] overflow-hidden relative">
                                                <div className="absolute top-0 left-0 w-full h-[1px] bg-pink-500/50 animate-scan-y opacity-20"></div>
                                                <div className="space-y-1 text-slate-400">
                                                    <p className="text-green-400 font-bold">{" >> "} ANALYZING_SYMPTOMS_V4.2</p>
                                                    <p className="opacity-70">[INF] Patient: "Persistent fatigue & low pulse"</p>
                                                    <p className="opacity-70">[INF] Accessing core_med_v3.db...</p>
                                                    <p className="text-pink-500 animate-pulse">[!!!] Critical anomaly detected: Bradycardia</p>
                                                    <p className="opacity-70">[OK] Routing to Cardiology Specialist</p>
                                                </div>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-slate-100 dark:border-white/5">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-[10px] font-bold text-slate-400">NEURAL_LOAD</span>
                                                    <Zap className="w-3 h-3 text-pink-500" />
                                                </div>
                                                <div className="flex gap-1 items-end h-8">
                                                    {[40, 70, 45, 90, 65].map((h, i) => (
                                                        <div key={i} className="flex-1 bg-pink-500/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-slate-100 dark:border-white/5 flex flex-col justify-center">
                                                <div className="text-[10px] font-bold text-slate-400 mb-1">ACCURACY</div>
                                                <div className="text-xl font-black text-pink-600">99.9%</div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Mock UI Element for Report Explainer (ID: 2) */}
                                    {feature.id === 2 && (
                                        <div className="mt-6 space-y-3">
                                            <div className="flex items-center gap-2 p-2 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
                                                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                                                    <FileText className="w-4 h-4 text-red-500" />
                                                </div>
                                                <div className="text-[10px] text-slate-500 font-bold truncate">Pathology_Report_02.pdf</div>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="w-0.5 h-4 bg-slate-200 dark:bg-slate-800 relative">
                                                    <ChevronRight className="w-3 h-3 text-pink-500 absolute top-full left-1/2 -translate-x-1/2 rotate-90" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <Badge variant="outline" className="text-[8px] border-green-500/20 bg-green-500/5 text-green-500 font-bold py-0 h-5">Low Iron</Badge>
                                                <Badge variant="outline" className="text-[8px] border-blue-500/20 bg-blue-500/5 text-blue-500 font-bold py-0 h-5">Vit-D Deficiency</Badge>
                                            </div>
                                        </div>
                                    )}

                                    {/* Mock UI Element for Imaging Vision (ID: 3) */}
                                    {feature.id === 3 && (
                                        <div className="mt-8 relative h-48 bg-slate-100 dark:bg-slate-950 rounded-[2rem] overflow-hidden group/imaging border border-slate-200 dark:border-white/5">
                                            {/* UI Overlay / HUD */}
                                            <div className="absolute inset-0 border-[10px] border-slate-900/5 dark:border-white/5"></div>
                                            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-pink-500"></div>
                                            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-pink-500"></div>
                                            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-pink-500"></div>
                                            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-pink-500"></div>

                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="relative">
                                                    <div className="w-24 h-24 border-2 border-pink-500/30 rounded-full flex items-center justify-center">
                                                        <div className="w-16 h-16 border-2 border-pink-500/50 rounded-full animate-ping"></div>
                                                    </div>
                                                    <div className="absolute top-1/2 left-full translate-x-4 -translate-y-1/2 flex flex-col gap-1">
                                                        <div className="text-[10px] font-bold text-pink-500 whitespace-nowrap">DETECTION_ACTIVE</div>
                                                        <div className="text-[10px] font-mono text-slate-500">X: 742 Y: 129</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-4 right-4 text-[8px] font-mono text-slate-500">SCAN_ITERATION: 082</div>
                                        </div>
                                    )}

                                    {/* Mock UI Element for Voice (ID: 4) */}
                                    {feature.id === 4 && (
                                        <div className="mt-6 flex flex-col gap-4">
                                            <div className="flex items-center justify-center gap-1.5 h-10">
                                                {[0.2, 0.4, 0.8, 1, 0.6, 1, 0.8, 0.4, 0.2].map((h, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-1 bg-pink-500 rounded-full animate-pulse"
                                                        style={{ height: `${h * 100}%`, animationDelay: `${i * 0.1}s` }}
                                                    ></div>
                                                ))}
                                            </div>
                                            <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-100 dark:border-white/5">
                                                <p className="text-[10px] font-medium text-slate-400 italic">"Detected: Persistent dry cough..."</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Mock UI Element for Predictive Health (ID: 5) */}
                                    {feature.id === 5 && (
                                        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
                                            {[
                                                { label: 'Risk', value: 'Low', color: 'text-green-400' },
                                                { label: 'Trend', value: '+12%', color: 'text-pink-400' },
                                                { label: 'Stability', value: '98%', color: 'text-blue-400' },
                                                { label: 'Health', value: 'Prime', color: 'text-purple-400' }
                                            ].map((m, i) => (
                                                <div key={i} className="bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/5">
                                                    <div className="text-[8px] font-bold text-slate-500 uppercase tracking-tighter mb-1">{m.label}</div>
                                                    <div className={`text-sm font-black ${m.color}`}>{m.value}</div>
                                                </div>
                                            ))}
                                            <div className="col-span-2 lg:col-span-4 h-12 flex items-end gap-1 px-2">
                                                {[30, 50, 40, 70, 60, 90, 80, 50, 60, 40, 60, 70].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-pink-500/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className={`overflow-hidden transition-all duration-500 max-h-0 ${activeTab === feature.id ? 'max-h-32 opacity-100 mt-4' : 'opacity-0'}`}>
                                        <div className={`p-4 rounded-2xl bg-white/10 border border-slate-100/10 backdrop-blur-sm`}>
                                            <p className="text-sm font-bold italic">{feature.details}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center gap-2 group/btn cursor-pointer">
                                    <span className="text-xs font-black uppercase tracking-widest text-pink-600 dark:text-pink-400">Explore Module</span>
                                    <ChevronRight className="w-4 h-4 text-pink-600 dark:text-pink-400 group-hover/btn:translate-x-1 transition-transform" />
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Section (Clean High-Tech) */}
            <section className="py-24 relative overflow-hidden bg-slate-900">
                {/* Dynamic Scan Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-scan-y opacity-30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <Badge className="mb-6 bg-pink-500/10 text-pink-400 border-pink-500/20 px-4 py-1.5 font-black uppercase text-[10px] tracking-[0.2em]">
                                Privacy First Architecture
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Clinical Grade <br /><span className="text-pink-500">Data Fortification</span></h2>
                            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                                Patient data never leaves your region. We utilize sovereign cloud infrastructure with hardware-level encryption to ensure total compliance with local laws.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Shield, title: "Zero Knowledge", desc: "We can't see your data" },
                                    { icon: Lock, title: "AES-512", desc: "Encryption standard" },
                                    { icon: Server, title: "Local Hosting", desc: "Sovereign nodes" },
                                    { icon: Share2, title: "FHIR Ready", desc: "Safe interoperability" }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col gap-3 group">
                                        <item.icon className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform" />
                                        <h4 className="font-bold text-white text-sm">{item.title}</h4>
                                        <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-10 bg-pink-500/10 blur-[80px] rounded-full"></div>
                            <Card className="relative p-1 bg-slate-800/50 border border-slate-700/50 rounded-[3rem] overflow-hidden backdrop-blur-xl">
                                <div className="bg-slate-900 border border-slate-800 rounded-[2.8rem] p-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="text-xs font-mono text-slate-500">SECURITY_AUDIT_LOG</div>
                                    </div>

                                    <div className="space-y-4 font-mono text-xs">
                                        <p className="text-green-400">[OK] Encryption keys rotated successfully</p>
                                        <p className="text-pink-400">[IN] Secure handshake with Node_742</p>
                                        <p className="text-slate-500">[::] Audit trail hashed and distributed</p>
                                        <div className="h-40 bg-slate-950 rounded-xl mt-6 flex items-center justify-center border border-slate-800 group overflow-hidden">
                                            <div className="relative">
                                                <div className="w-24 h-24 rounded-full border-4 border-slate-800 flex items-center justify-center p-2 group-hover:rotate-180 transition-all duration-1000">
                                                    <div className="w-full h-full rounded-full border-2 border-slate-700 border-dashed animate-spin"></div>
                                                </div>
                                                <Shield className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-pink-500" />
                                            </div>
                                        </div>
                                        <p className="text-xs text-center text-slate-600 mt-4 italic font-bold">100% End-to-End Encryption Active</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern CTA */}
            <section className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900 dark:text-white">Ready for the <br /> <span className="text-pink-600 underline decoration-8 decoration-pink-500/20 underline-offset-8">Future?</span></h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">Join the forefront of medical technology. Deploy E-Clinic's AI engine in your practice within minutes.</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            onClick={() => onNavigate("login")}
                            className="w-full sm:w-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 h-16 px-12 rounded-2xl font-black text-lg transition-all"
                        >
                            Get Started Now
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto h-16 px-10 rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
                        >
                            Book a Video Demo
                        </Button>
                    </div>
                </div>
            </section>

            <Footer onNavigate={onNavigate} />
        </div>
    );
}

// Export with original name for backward compatibility
export { AIFeaturesEnhanced as AIFeatures };
