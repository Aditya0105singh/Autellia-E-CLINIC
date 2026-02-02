import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useCart } from "../contexts/CartContext";
import {
  Search, Upload, ShoppingCart, Filter, Star, Pill,
  Heart, TrendingUp, Clock, CheckCircle, X,
  FileText, Zap, ShieldCheck, ChevronRight, ArrowRight,
  Info, AlertCircle, ShoppingBag
} from "lucide-react";
import type { PageView } from "../App";
import { cn } from "./ui/utils";

interface MedicineEnhancedProps {
  onNavigate: (view: PageView) => void;
  user: any;
  onLoginRequired: () => void;
}

export function MedicineEnhanced({ onNavigate, user, onLoginRequired }: MedicineEnhancedProps) {
  const { addToCart, getItemCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showPrescriptionUpload, setShowPrescriptionUpload] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [extractedMedicines, setExtractedMedicines] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { id: "all", name: "All Medicines", icon: <Pill className="w-4 h-4" /> },
    { id: "fever", name: "Fever & Pain", icon: "🌡️" },
    { id: "cold", name: "Cold & Cough", icon: "🤧" },
    { id: "digestive", name: "Digestive", icon: "🍽️" },
    { id: "vitamins", name: "Vitamins", icon: "💊" },
    { id: "chronic", name: "Chronic Care", icon: "❤️‍🩹" },
  ];

  const medicines = [
    {
      id: "med1",
      name: "Paracetamol 500mg",
      genericName: "Acetaminophen",
      manufacturer: "XYZ Pharma",
      price: 45,
      mrp: 60,
      category: "fever",
      rating: 4.5,
      reviews: 234,
      stock: "In Stock",
      prescriptionRequired: false,
      image: "💊",
      benefits: ["Fever", "Headache", "Body Pain"],
      pack: "Strip of 15 tablets"
    },
    {
      id: "med2",
      name: "Cetrizine 10mg",
      genericName: "Cetirizine",
      manufacturer: "ABC Pharmaceuticals",
      price: 25,
      mrp: 35,
      category: "cold",
      rating: 4.7,
      reviews: 189,
      stock: "In Stock",
      prescriptionRequired: false,
      image: "💊",
      benefits: ["Allergy", "Cold", "Sneezing"],
      pack: "Strip of 10 tablets"
    },
    {
      id: "med3",
      name: "Vitamin D3 60K",
      genericName: "Cholecalciferol",
      manufacturer: "HealthCare Ltd",
      price: 85,
      mrp: 100,
      category: "vitamins",
      rating: 4.8,
      reviews: 456,
      stock: "In Stock",
      prescriptionRequired: false,
      image: "💊",
      benefits: ["Bone Health", "Immunity", "Vitamin D"],
      pack: "Strip of 4 capsules"
    },
    {
      id: "med4",
      name: "Amoxicillin 500mg",
      genericName: "Amoxicillin",
      manufacturer: "MedPlus",
      price: 120,
      mrp: 150,
      category: "chronic",
      rating: 4.6,
      reviews: 112,
      stock: "In Stock",
      prescriptionRequired: true,
      image: "💊",
      benefits: ["Bacterial Infection", "Antibiotic"],
      pack: "Strip of 10 capsules"
    },
    {
      id: "med5",
      name: "Omeprazole 20mg",
      genericName: "Omeprazole",
      manufacturer: "Gastro Pharma",
      price: 65,
      mrp: 80,
      category: "digestive",
      rating: 4.5,
      reviews: 298,
      stock: "In Stock",
      prescriptionRequired: false,
      image: "💊",
      benefits: ["Acidity", "GERD", "Ulcer"],
      pack: "Strip of 15 capsules"
    },
    {
      id: "med6",
      name: "Crocin Advance",
      genericName: "Paracetamol",
      manufacturer: "GSK",
      price: 35,
      mrp: 45,
      category: "fever",
      rating: 4.6,
      reviews: 567,
      stock: "In Stock",
      prescriptionRequired: false,
      image: "💊",
      benefits: ["Fast Relief", "Fever", "Pain"],
      pack: "Strip of 10 tablets"
    },
  ];

  const filteredMedicines = medicines.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.genericName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || med.category === selectedCategory;
    const matchesExtracted = extractedMedicines.length === 0 ||
      extractedMedicines.some(extracted =>
        med.name.toLowerCase().includes(extracted.toLowerCase()) ||
        med.genericName.toLowerCase().includes(extracted.toLowerCase())
      );
    return matchesSearch && matchesCategory && matchesExtracted;
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      processOCR(file);
    }
  };

  const processOCR = async (_file: File) => {
    setIsProcessing(true);
    setTimeout(() => {
      const mockExtracted = [
        "Paracetamol",
        "Cetrizine",
        "Vitamin D3",
        "Omeprazole"
      ];
      setExtractedMedicines(mockExtracted);
      setIsProcessing(false);
      setShowPrescriptionUpload(false);
    }, 2000);
  };

  const handleAddToCart = (medicine: any) => {
    if (!user) {
      onLoginRequired();
      return;
    }

    addToCart({
      id: medicine.id,
      name: medicine.name,
      price: medicine.price,
      image: medicine.image,
      type: 'medicine',
      prescriptionRequired: medicine.prescriptionRequired
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans transition-colors duration-300 selection:bg-pink-100 dark:selection:bg-pink-900/30">
      <Navigation onNavigate={onNavigate} cartCount={getItemCount()} onGetStarted={() => onNavigate("login")} activeView="medicine" />

      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 px-6 py-2 bg-pink-500/10 text-pink-400 border-pink-500/20 rounded-full font-bold tracking-widest uppercase text-xs">
              Trusted Online Pharmacy
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-white">
              Your Medicines, <br /> <span className="text-pink-500">Delivered Fast.</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium mb-12 leading-relaxed">
              Skip the pharmacy lines. Upload your prescription and get 100% genuine medicines delivered to your doorstep.
            </p>

            {/* Search Bar Refined */}
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition-opacity"></div>
              <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                <Search className="ml-6 w-6 h-6 text-slate-400" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for medicines, generics, or symptoms..."
                  className="flex-1 py-8 px-4 text-lg border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-slate-900 dark:text-white placeholder:text-slate-400"
                />
                <Button className="mr-2 h-14 px-8 bg-slate-900 dark:bg-pink-600 hover:bg-slate-800 dark:hover:bg-pink-700 text-white rounded-xl font-bold transition-all">
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <button
                onClick={() => setShowPrescriptionUpload(true)}
                className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all group backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Upload className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black text-white">Upload Prescription</div>
                  <div className="text-xs text-slate-400">Order in 60 seconds</div>
                </div>
              </button>

              <div className="hidden sm:flex items-center gap-12 ml-6 border-l border-white/10 pl-12 font-bold text-slate-400">
                <div className="text-center">
                  <div className="text-white text-xl">10k+</div>
                  <div className="text-[10px] uppercase tracking-widest">Medicines</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-xl">2hr</div>
                  <div className="text-[10px] uppercase tracking-widest">Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <div className={cn(
        "sticky top-0 z-40 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-slate-200 dark:border-slate-800 py-4 shadow-lg"
          : "bg-transparent border-transparent py-6 -mt-32"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 sm:pb-0 hide-scrollbar no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition-all duration-300 border-2",
                  selectedCategory === cat.id
                    ? "bg-pink-600 border-pink-600 text-white shadow-lg shadow-pink-500/20 scale-105"
                    : isScrolled
                      ? "bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-pink-500/30"
                      : "bg-white/10 backdrop-blur-md border-white/10 text-white hover:bg-white/20"
                )}
              >
                <span className="text-lg">{typeof cat.icon === 'string' ? cat.icon : cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">Essential <span className="text-pink-600">Health</span> Supplies</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Verified products from certified pharmacies</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Button variant="outline" className="rounded-xl border-2 dark:border-slate-800 font-bold" onClick={() => onNavigate('cart')}>
                <ShoppingBag className="w-5 h-5 mr-2 text-pink-500" />
                Cart ({getItemCount()})
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedicines.map((medicine) => (
              <Card key={medicine.id} className="group relative p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white dark:bg-slate-900/50 overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500"></div>

                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500 ring-4 ring-slate-100 dark:ring-slate-900">
                    {medicine.image}
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Badge className={cn(
                      "rounded-full px-4 py-1 font-bold text-[10px] uppercase tracking-widest",
                      medicine.stock === "In Stock"
                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                        : "bg-slate-500/10 text-slate-500 border-slate-500/20"
                    )}>
                      {medicine.stock}
                    </Badge>
                    {medicine.prescriptionRequired && (
                      <Badge className="bg-rose-500/10 text-rose-500 border-rose-500/20 rounded-full px-4 py-1 font-bold text-[10px] uppercase tracking-widest">
                        Rx Required
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 transition-colors">{medicine.name}</h3>
                  <div className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider flex items-center gap-2">
                    {medicine.genericName}
                    <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                    <span className="text-pink-500/70">{medicine.pack}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {medicine.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                        <CheckCircle className="w-3 h-3 text-pink-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">₹{medicine.price}</span>
                        <span className="text-sm font-bold text-slate-400 line-through">₹{medicine.mrp}</span>
                      </div>
                      <div className="text-xs font-bold text-pink-500 mt-1">SAVE OVER ₹{medicine.mrp - medicine.price}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-black dark:text-white">{medicine.rating}</span>
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">{medicine.reviews} Reviews</div>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleAddToCart(medicine)}
                    className="w-full h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 rounded-[1.25rem] font-black text-lg shadow-xl shadow-slate-200 dark:shadow-none transition-all group/btn"
                  >
                    Add to Cart
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredMedicines.length === 0 && (
            <div className="text-center py-24 bg-white dark:bg-slate-900/50 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
              <div className="w-24 h-24 bg-slate-50 dark:bg-slate-950 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">No results found</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-sm mx-auto">
                We couldn't find any medicines matching "{searchQuery}". Try more general keywords.
              </p>
              <Button
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                variant="outline"
                className="h-12 px-8 rounded-xl font-bold border-2"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Modern Prescription Upload Modal */}
      {showPrescriptionUpload && (
        <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-md flex items-center justify-center z-[100] p-4 animate-fade-in">
          <Card className="max-w-xl w-full p-0 border-0 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="p-8 pb-0 flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white">Upload Prescription</h3>
                <p className="text-slate-500 font-medium">Get your medicines verified by experts</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPrescriptionUpload(false)}
                className="h-12 w-12 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-rose-500 hover:text-white transition-all"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="p-8 space-y-8">
              <div className="border-4 border-dashed border-slate-100 dark:border-slate-800 rounded-[2rem] p-12 text-center hover:border-pink-500/50 transition-all group bg-slate-50/50 dark:bg-slate-950/20">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="w-10 h-10 text-pink-500" />
                </div>
                <h4 className="text-xl font-black mb-2 dark:text-white">Select File</h4>
                <p className="text-sm text-slate-500 font-medium mb-8">PNG, JPG, PDF (Up to 10MB)</p>

                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="h-14 px-10 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing Analytis..." : "Choose File"}
                </Button>
              </div>

              {isProcessing && (
                <div className="flex flex-col items-center gap-6 py-4">
                  <div className="flex gap-1 items-center h-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-4 h-4 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-pink-500 uppercase tracking-widest animate-pulse">Running Neural OCR Scan...</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                  <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[10px] font-bold text-blue-900 dark:text-blue-200 leading-tight">100% Encrypted & HIPAA Compliant Data Storage</p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[10px] font-bold text-amber-900 dark:text-amber-200 leading-tight">Fast Verification within 30 minutes of order</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Trust Badges Redesigned */}
      <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: ShieldCheck, title: "100% Genuine", desc: "Source verified medications", color: "text-green-500", bg: "bg-green-500/10" },
              { icon: TrendingUp, title: "Price Match", desc: "Best prices in the region", color: "text-blue-500", bg: "bg-blue-500/10" },
              { icon: Clock, title: "Express Flow", desc: "Delivery in under 2 hours", color: "text-purple-500", bg: "bg-purple-500/10" },
              { icon: Heart, title: "Expert Care", desc: "Pharmacist led support", color: "text-rose-500", bg: "bg-rose-500/10" }
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className={cn(
                  "w-20 h-20 rounded-[2rem] flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 duration-500",
                  badge.bg
                )}>
                  <badge.icon className={cn("w-10 h-10", badge.color)} />
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">{badge.title}</h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

// Export with original name for backward compatibility
export { MedicineEnhanced as Medicine };
