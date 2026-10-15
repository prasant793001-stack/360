import { useState, useEffect } from 'react';
import { perfumes } from '../config';

type CartItem = {
  id: number;
  quantity: number;
};

interface ShopProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export default function Shop({ cart, setCart, isCartOpen, setIsCartOpen }: ShopProps) {
  const [filter, setFilter] = useState('all');
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const filteredPerfumes = filter === 'all'
    ? perfumes
    : perfumes.filter((p) => p.category === filter);

  const categories = ['all', 'woody', 'floral', 'oriental'];

  const addToCart = (perfume: typeof perfumes[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === perfume.id);
      if (existing) {
        return prev.map(item =>
          item.id === perfume.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: perfume.id, quantity: 1 }];
    });
    setNotification(`Added ${perfume.name} to cart`);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const cartTotal = cart.reduce((sum, item) => {
    const perfume = perfumes.find(p => p.id === item.id);
    return sum + (perfume ? perfume.price * item.quantity : 0);
  }, 0);

  return (
    <section id="shop" className="py-24 bg-black relative min-h-screen">
      {/* Demo notice */}
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4">
            The Collection
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Explore our curated selection of slow-made perfumes. This is a demo shop — no real payments are processed.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${
                filter === cat
                  ? 'bg-brand text-black'
                  : 'bg-darkGray text-cream/70 hover:bg-darkGray/80 hover:text-cream'
              }`}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPerfumes.map((perfume) => (
            <div
              key={perfume.id}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass cursor-pointer"
              style={{ transform: 'perspective(1000px) rotateX(0deg)' }}
            >
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/hero.png';
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
                  <button
                    onClick={() => addToCart(perfume)}
                    className="btn btn-primary text-sm px-4 py-2"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart drawer */}
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-full max-w-md bg-darkGray z-[9998] shadow-2xl flex flex-col animate-slideIn">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-darkGray/50">
              <h3 className="text-2xl font-display font-bold text-cream">Your Cart</h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-cream/60 hover:text-brand text-2xl"
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <p className="text-cream/50 text-center py-8">Your cart is empty</p>
              ) : (
                cart.map((item) => {
                  const perfume = perfumes.find(p => p.id === item.id);
                  if (!perfume) return null;
                  return (
                    <div key={item.id} className="flex gap-4 p-4 bg-black/30 rounded-lg">
                      <img
                        src={perfume.image}
                        alt={perfume.name}
                        className="w-20 h-20 object-cover rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/hero.png';
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="text-cream font-bold">{perfume.name}</h4>
                        <p className="text-cream/60 text-sm">{perfume.notes}</p>
                        <p className="text-brand font-display font-bold mt-1">AED {perfume.price}</p>
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full bg-darkGray text-cream hover:bg-brand hover:text-black transition-colors"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="text-cream font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full bg-darkGray text-cream hover:bg-brand hover:text-black transition-colors"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-cream/50 hover:text-red-400 text-sm ml-auto"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-darkGray/50 bg-black/30">
              <div className="flex items-center justify-between mb-4">
                <span className="text-cream/60">Subtotal</span>
                <span className="text-brand font-display font-bold text-2xl">AED {cartTotal}</span>
              </div>
              <p className="text-cream/50 text-xs text-center mb-4">
                Shipping and taxes calculated at checkout. This is a demo shop.
              </p>
              <button
                disabled={cart.length === 0}
                className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-brand text-black px-6 py-3 rounded-full font-bold shadow-lg">
            {notification}
          </div>
        </div>
      )}
    </section>
  );
}
