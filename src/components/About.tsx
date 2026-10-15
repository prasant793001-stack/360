import { brand } from '../config';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass p-4">
              <img
                `${import.meta.env.BASE_URL}assets/perfume1.jpg`
                alt="Maison Lumière perfume bottles"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand rounded-tl-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-brand rounded-br-3xl" />
          </div>

          {/* Content side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6">
              Our Craftsmanship
            </h2>
            <p className="text-lg text-cream/80 leading-relaxed mb-6">
              {brand.bio}
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Located in the heart of Dubai, our atelier combines traditional perfumery techniques
              with modern innovation. Each scent is handcrafted in small batches, ensuring the
              highest quality and attention to detail. We source rare ingredients from around the
              world, working directly with master growers and distillers to bring you the finest
              fragrances.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <div className="text-3xl font-display font-bold text-brand">20+</div>
                <div className="text-cream/60 text-sm uppercase tracking-widest">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-brand">50+</div>
                <div className="text-cream/60 text-sm uppercase tracking-widest">Rare Ingredients</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-brand">100%</div>
                <div className="text-cream/60 text-sm uppercase tracking-widest">Handcrafted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
