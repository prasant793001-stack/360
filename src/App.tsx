import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import Shop from './components/Shop';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FilmGrain from './components/FilmGrain';
import ScrollReveal from './components/ScrollReveal';
import './index.css';

type CartItem = {
  id: number;
  quantity: number;
};

function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash.replace('#', '') || '');
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('shop-cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('shop-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash.replace('#', '') || '');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-black text-cream min-h-screen">
      <FilmGrain />
      <Header cartCount={cartCount} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <main className="pt-24">
        {currentRoute === 'shop' ? (
          <ScrollReveal>
            <Shop cart={cart} setCart={setCart} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
          </ScrollReveal>
        ) : (
          <>
            <ScrollReveal>
              <Hero />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <About />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Collection />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Testimonials />
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <Pricing />
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <FAQ />
            </ScrollReveal>
            <ScrollReveal delay={600}>
              <Contact />
            </ScrollReveal>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
