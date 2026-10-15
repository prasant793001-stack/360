import { useState } from 'react';

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "We ship worldwide within 3-5 business days. Orders placed before 2 PM are dispatched the same day. International shipping typically takes 7-14 days depending on your location.",
  },
  {
    question: "Are your perfumes suitable for sensitive skin?",
    answer: "Yes, all our perfumes are carefully crafted with high-quality ingredients and are suitable for most skin types. However, we always recommend doing a patch test before full application.",
  },
  {
    question: "What makes Maison Lumière different from other perfume houses?",
    answer: "We practice slow perfumery - each scent is handcrafted in small batches using rare, ethically-sourced ingredients. Our Dubai atelier combines traditional techniques with modern innovation, and we never compromise on quality.",
  },
  {
    question: "Can I cancel my Scent Club subscription?",
    answer: "Yes, you can cancel your subscription at any time. You'll receive your current month's perfumes before cancellation takes effect.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes! All our perfumes can be beautifully gift-wrapped. Simply add a note during checkout, and we'll include a personalized message.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely in love with your perfume, return it for a full refund. Please keep the original packaging intact.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-cream text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-darkGray/50 transition-colors duration-300"
              >
                <span className="font-display font-semibold text-cream text-lg">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 text-brand ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ‹+
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-cream/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
