import { useState } from 'react';

const perfumes = [
  {
    id: 1,
    name: "Midnight Oud",
    notes: "Oud, Amber, Sandalwood",
    price: 850,
    category: "woody",
    image: "/assets/perfume1.jpg",
  },
  {
    id: 2,
    name: "Desert Rose",
    notes: "Rose, Vanilla, Musk",
    price: 720,
    category: "floral",
    image: `${import.meta.env.BASE_URL}assets/perfume2.jpg`,
  },
  {
    id: 3,
    name: "Golden Amber",
    notes: "Amber, Saffron, Cedar",
    price: 920,
    category: "oriental",
    image: `${import.meta.env.BASE_URL}assets/perfume3.jpg`,
  },
  {
    id: 4,
    name: "Saffron Silk",
    notes: "Saffron, Jasmine, Rosewood",
    price: 780,
    category: "floral",
    image: `${import.meta.env.BASE_URL}assets/perfume4.jpg`,
  },
  {
    id: 5,
    name: "Dusk & Dawn",
    notes: "Patchouli, Bergamot, Oud",
    price: 890,
    category: "woody",
    image: `${import.meta.env.BASE_URL}assets/perfume5.jpg`,
  },
  {
    id: 6,
    name: "Arabian Night",
    notes: "Oud, Rose, Cardamom",
    price: 950,
    category: "oriental",
    image: `${import.meta.env.BASE_URL}assets/perfume6.jpg`,
  },
];

export default function Collection() {
  const [filter, setFilter] = useState("all");

  const filteredPerfumes = filter === "all"
    ? perfumes
    : perfumes.filter((p) => p.category === filter);

  return (
    <section id="collection" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4">
            The Collection
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Explore our curated selection of slow-made perfumes, each crafted with
            rare ingredients and timeless elegance.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "woody", "floral", "oriental"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${
                filter === cat
                  ? "bg-brand text-black"
                  : "bg-darkGray text-cream/70 hover:bg-darkGray/80 hover:text-cream"
              }`}
            >
              {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Perfume grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPerfumes.map((perfume) => (
            <div
              key={perfume.id}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass cursor-pointer"
              style={{ transform: "perspective(1000px) rotateX(0deg)" }}
            >
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
    (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}assets/hero.png`;
  }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-display font-bold text-cream mb-2 group-hover:text-brand transition-colors duration-300">
                  {perfume.name}
                </h3>
                <p className="text-cream/60 text-sm mb-4">{perfume.notes}</p>
                <div className="flex items-center justify-between">
                  <span className="text-brand font-display font-bold text-xl">AED {perfume.price}</span>
                  <span className="text-cream/70 text-xs uppercase tracking-widest group-hover:text-brand transition-colors duration-300">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
