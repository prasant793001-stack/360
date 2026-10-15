import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Maison Lumière's Midnight Oud is absolutely divine. The scent evolves beautifully on my skin and lasts all day. Worth every dirham!",
    author: "Sarah Al-Mahmoud",
    location: "Dubai",
  },
  {
    id: 2,
    text: "I've been collecting perfumes for over 20 years, and Maison Lumière stands out for its exceptional quality and attention to detail. Desert Rose is my favorite.",
    author: "James Richardson",
    location: "London",
  },
  {
    id: 3,
    text: "The craftsmanship is evident in every bottle. The packaging alone is worth keeping as a keepsake. Arabian Night is pure magic.",
    author: "Fatima Hassan",
    location: "Riyadh",
  },
  {
    id: 4,
    text: "Finally, a luxury perfume house that understands the art of slow perfumery. Each scent tells a story of Dubai's rich heritage.",
    author: "Michael Chen",
    location: "Singapore",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-cream text-center mb-16">
          What Our Clients Say
        </h2>

        {/* Carousel */}
        <div className="relative">
          <div
            className="transition-opacity duration-500"
            style={{ opacity: 1 }}
          >
            <div className="glass p-12 rounded-3xl text-center">
              <p className="text-xl md:text-2xl text-cream/90 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <div className="font-display font-bold text-brand text-lg">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-cream/60 text-sm uppercase tracking-widest">
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 glass px-4 py-2 rounded-full text-cream hover:bg-brand hover:text-black transition-all duration-300"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % testimonials.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 glass px-4 py-2 rounded-full text-cream hover:bg-brand hover:text-black transition-all duration-300"
            aria-label="Next testimonial"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-brand" : "bg-cream/30 hover:bg-cream/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
