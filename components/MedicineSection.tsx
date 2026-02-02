import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Sparkles, Shield, Truck } from "lucide-react";
import { PageView } from "../App";

interface MedicineSectionProps {
  onNavigate: (view: PageView) => void;
}

export function MedicineSection({ onNavigate }: MedicineSectionProps) {
  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: 45,
      mrp: 60,
      image: "💊",
      discount: 25,
      category: "Fever & Pain",
      inStock: true
    },
    {
      id: 2,
      name: "Cetrizine 10mg",
      price: 25,
      mrp: 35,
      image: "💊",
      discount: 29,
      category: "Allergy",
      inStock: true
    },
    {
      id: 3,
      name: "Vitamin D3 60K",
      price: 85,
      mrp: 100,
      image: "💊",
      discount: 15,
      category: "Vitamins",
      inStock: true
    },
    {
      id: 4,
      name: "Omeprazole 20mg",
      price: 65,
      mrp: 80,
      image: "💊",
      discount: 19,
      category: "Digestive",
      inStock: true
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Popular Medicines</h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-medium">
              Authentic medicines delivered with care.
            </p>
          </div>
          <Button
            variant="ghost"
            onClick={() => onNavigate("medicine")}
            className="group text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-bold hover:bg-pink-50 dark:hover:bg-pink-900/20"
          >
            View All Medicines
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {medicines.map((medicine) => (
            <Card key={medicine.id} className="group relative overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-pink-200 dark:hover:border-pink-800 transition-all hover:shadow-xl bg-white dark:bg-slate-900 rounded-2xl">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs">
                    {medicine.category}
                  </Badge>
                  {medicine.discount > 0 && (
                    <Badge className="bg-green-500 text-white font-bold border-none">
                      {medicine.discount}% OFF
                    </Badge>
                  )}
                </div>

                <div className="aspect-[4/3] flex items-center justify-center bg-pink-50/50 dark:bg-pink-900/10 rounded-2xl mb-6 group-hover:bg-pink-50 dark:group-hover:bg-pink-900/20 transition-colors">
                  <span className="text-6xl filter drop-shadow-md transform group-hover:scale-110 transition-transform duration-500">{medicine.image}</span>
                </div>

                <h3 className="font-bold text-lg mb-2 line-clamp-1 text-slate-900 dark:text-white">{medicine.name}</h3>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">₹{medicine.price}</span>
                  <span className="text-sm text-slate-400 dark:text-slate-500 line-through font-medium">₹{medicine.mrp}</span>
                </div>

                <Button className="w-full bg-slate-900 dark:bg-pink-600 text-white dark:text-white hover:bg-slate-800 dark:hover:bg-pink-700 font-bold" onClick={() => onNavigate("medicine")}>
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Shield, title: "100% Genuine", desc: "Sourced from licensed pharmacies" },
            { icon: Truck, title: "Fast Delivery", desc: "Same-day delivery in metro cities" },
            { icon: Sparkles, title: "Best Prices", desc: "Flat 20% off on first order" }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-secondary/10 border border-slate-100/50 dark:border-slate-800/50">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shrink-0 shadow-sm text-pink-500 dark:text-pink-400 border border-slate-100 dark:border-slate-800">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
