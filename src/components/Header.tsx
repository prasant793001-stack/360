import { useState, useEffect } from 'react';
import { brand } from '../config';

interface HeaderProps {
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export default function Header({ cartCount, isCartOpen, setIsCartOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#collection', label: 'Collection' },
    { href: '#shop', label: 'Shop' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Scent Club' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="#/" className="text-2xl font-display font-bold text-brand">
              {brand.name}
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream text-sm uppercase tracking-widest hover:text-brand transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cream text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            {/* Cart Button */}
            <button
              className="hidden md:flex items-center gap-2 text-cream text-sm uppercase tracking-widest hover:text-brand transition-colors duration-300"
              aria-label={`Cart with ${cartCount} items`}
              onClick={() => setIsCartOpen(true)}
              style={{ display: isCartOpen ? 'none' : 'flex' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="relative">
                Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass absolute top-full left-0 right-0 py-6">
            <nav className="container mx-auto px-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream text-center text-sm uppercase tracking-widest hover:text-brand transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#home"
                className="text-cream text-center text-sm uppercase tracking-widest hover:text-brand transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Film grain overlay */}
      <div className="film-grain" />
    </>
  );
}