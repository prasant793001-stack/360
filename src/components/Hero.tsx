import { brand } from '../config';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-darkGray to-black" />
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-cream mb-8">
          <span className="block">Elegance</span>
          <span className="block">in Every</span>
          <span className="block text-brand">Drop</span>
        </h1>
        
        <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          {brand.bio}
        </p>
        
        <a
          href="#collection"
          className="inline-block px-10 py-4 bg-brand text-black font-display font-semibold text-lg uppercase tracking-widest hover:bg-brand/80 transition-all duration-300 transform hover:scale-105"
        >
          Discover Collection
        </a>

        {/* Scroll down cue */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-brand/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Film grain overlay */}
      <div className="film-grain" />
    </section>
  );
}
