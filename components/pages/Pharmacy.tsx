import { Pill, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const featuredMedicines = [
  {
    name: "Paracetamol 500mg",
    description: "Pain & fever reducer",
    price: 49,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=thumb&w=200&q=80",
  },
  {
    name: "Amoxicillin 250mg",
    description: "Antibiotic capsules",
    price: 120,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=thumb&w=200&q=80",
  },
  {
    name: "Cetirizine",
    description: "Anti-allergy tablets",
    price: 35,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=thumb&w=200&q=80",
  },
  {
    name: "Vitamin C Chewable",
    description: "Immunity booster",
    price: 80,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=thumb&w=200&q=80",
  },
];

export function Pharmacy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-blue-50 via-teal-50 to-white py-16 sm:py-24 border-b border-border overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
              <Pill className="w-7 h-7 text-blue-600" />
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">Pharmacy</h1>
          </div>
          <p className="text-lg text-blue-800/80 max-w-xl font-medium">
            Trusted medicines, delivered fast. Shop from a curated selection of top brands and essentials.
          </p>
          <div className="flex items-center gap-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-blue-900/70">4.9/5 User Rating</span>
          </div>
          <Button size="lg" className="mt-4 px-8 py-3 text-base bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-200 transform hover:scale-105">
            Shop Now
          </Button>
        </div>
      </section>
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Featured Medicines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredMedicines.map((med, idx) => (
            <Card key={idx} className="p-4 flex flex-col items-center text-center bg-card border-border hover:shadow-lg transition-shadow">
              <img src={med.img} alt={med.name} className="w-20 h-20 object-cover rounded-full mb-4" />
              <h3 className="font-medium text-lg mb-1 text-foreground">{med.name}</h3>
              <p className="text-sm text-foreground/70 mb-2">{med.description}</p>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{med.rating}</span>
              </div>
              <div className="font-semibold text-green-600 text-lg mb-3">₹{med.price}</div>
              <Button size="sm" className="w-full">Add to Cart</Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
