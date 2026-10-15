import { useState } from 'react';

const tiers = [
  {
    name: "Essence",
    price: { monthly: 99, yearly: 990 },
    description: "Monthly discovery of our finest fragrances",
    features: ["2 miniatures per month", "Exclusive access to new releases", "Member-only events", "Free shipping"],
    highlighted: false,
  },
  {
    name: "Signature",
    price: { monthly: 199, yearly: 1990 },
    description: "Full-size perfumes curated for you",
    features: ["1 full-size perfume per month", "2 miniatures per month", "Exclusive access to new releases", "Member-only events", "Priority shipping", "Personal concierge"],
    highlighted: true,
  },
  {
    name: "Imperial",
    price: { monthly: 399, yearly: 3990 },
    description: "The ultimate luxury experience",
    features: ["2 full-size perfumes per month", "4 miniatures per month", "Exclusive access to new releases", "Member-only events", "Priority shipping", "Personal concierge", "Gift wrapping"],
    highlighted: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4">
            Scent Club
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto mb-8">
            Subscribe and discover our rotating collection of rare perfumes.
            Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex bg-darkGray rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${
                !isYearly ? "bg-brand text-black" : "text-cream/70 hover:text-cream"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${
                isYearly ? "bg-brand text-black" : "text-cream/70 hover:text-cream"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative glass p-8 rounded-3xl text-center transition-all duration-300 hover:scale-105 ${
                tier.highlighted ? "ring-2 ring-brand" : ""
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-black text-xs uppercase tracking-widest px-4 py-1 rounded-full font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-display font-bold text-cream mb-2">{tier.name}</h3>
              <p className="text-cream/60 text-sm mb-6">{tier.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-display font-bold text-brand">
                  AED {isYearly ? tier.price.yearly : tier.price.monthly}
                </span>
                <span className="text-cream/60">/{isYearly ? "year" : "month"}</span>
              </div>

              <ul className="text-left space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-cream/80">
                    <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-display font-semibold uppercase tracking-widest transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-brand text-black hover:bg-brand/80"
                    : "bg-darkGray text-cream hover:bg-darkGray/80"
                }`}
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
