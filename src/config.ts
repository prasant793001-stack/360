export const brand = {
  name: "Maison Lumière",
bio: 'Maison Lumière is a family-run perfume atelier in Dubai. Since 2009 we have hand-blended French florals with Arabian oud to create light, luminous fragrances for every day.',
  colors: {
    brand: "#d4a59a",
    cream: "#f5f0e6",
    dark: "#0a0a0a",
    black: "#0d1424",
    gold: "#d4a59a",
    darkGray: "#1a1a1a",
    lightGray: "#2a2a2a",
  },
  fonts: {
    display: "Playfair Display",
    body: "Inter",
  },
};

export const perfumes = [
  {
    id: 1,
    name: "Midnight Oud",
    notes: "Oud, Amber, Saffron",
    price: 850,
    category: "Woody",
    image: `${import.meta.env.BASE_URL}assets/perfume1.jpg`,
  },
  {
    id: 2,
    name: "Desert Rose",
    notes: "Rose, Oud, Vanilla",
    price: 780,
    category: "Floral",
    image: `${import.meta.env.BASE_URL}assets/perfume2.jpg`,
  },
  {
    id: 3,
    name: "Golden Hour",
    notes: "Amber, Sandalwood, Cardamom",
    price: 820,
    category: "Oriental",
    image: `${import.meta.env.BASE_URL}assets/perfume3.jpg`,
  },
  {
    id: 4,
    name: "Midnight Jasmine",
    notes: "Jasmine, Oud, Bergamot",
    price: 795,
    category: "Floral",
    image: `${import.meta.env.BASE_URL}assets/perfume4.jpg`,
  },
  {
    id: 5,
    name: "Dubai Nights",
    notes: "Oud, Rose, Tobacco",
    price: 890,
    category: "Woody",
    image: `${import.meta.env.BASE_URL}assets/perfume5.jpg`,
  },
  {
    id: 6,
    name: "Amber Silk",
    notes: "Amber, Vanilla, Cedar",
    price: 840,
    category: "Oriental",
    image: `${import.meta.env.BASE_URL}assets/perfume6.jpg`,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Al-Mansouri",
    text: "Maison Lumière's perfumes are works of art. The Midnight Oud is now my signature scent.",
  },
  {
    id: 2,
    name: "James Thompson",
    text: "The craftsmanship is evident in every bottle. These aren't just perfumes, they're heirlooms.",
  },
  {
    id: 3,
    name: "Fatima Hassan",
    text: "Finally, a luxury brand that understands the art of slow perfumery. Absolutely stunning.",
  },
];

export const pricing = {
  monthly: {
    name: "Scent Club",
    tiers: [
      {
        name: "Essential",
        price: 149,
        features: ["2 perfumes per month", "Exclusive access to new releases", "Member-only discounts"],
      },
      {
        name: "Connoisseur",
        price: 249,
        features: ["4 perfumes per month", "Priority access to limited editions", "Free shipping", "Personal scent consultation"],
      },
      {
        name: "Imperial",
        price: 399,
        features: ["6 perfumes per month", "Exclusive vintage collection", "VIP events access", "Dedicated concierge", "Gift wrapping"],
      },
    ],
  },
  yearly: {
    name: "Scent Club Annual",
    tiers: [
      {
        name: "Essential",
        price: 1490,
        features: ["2 perfumes per month", "Exclusive access to new releases", "Member-only discounts", "Free shipping"],
      },
      {
        name: "Connoisseur",
        price: 2490,
        features: ["4 perfumes per month", "Priority access to limited editions", "Free shipping", "Personal scent consultation", "Exclusive gifts"],
      },
      {
        name: "Imperial",
        price: 3990,
        features: ["6 perfumes per month", "Exclusive vintage collection", "VIP events access", "Dedicated concierge", "Premium gift wrapping", "Annual commemorative box"],
      },
    ],
  },
};

export const faq = [
  {
    id: 1,
    question: "What makes Maison Lumière different?",
    answer: "We practice slow perfumery, crafting each scent in small batches using rare ingredients sourced from around the world. Our perfumes are designed to evolve on the skin, telling a story from the first spray to the final dry down.",
  },
  {
    id: 2,
    question: "How long do your perfumes last?",
    answer: "Our perfumes are crafted for longevity, typically lasting 8-12 hours on skin. The concentration of oils and quality ingredients ensure they remain close to the skin throughout the day and into the night.",
  },
  {
    id: 3,
    question: "Are your perfumes suitable for sensitive skin?",
    answer: "Yes, all our perfumes are carefully tested and formulated to be suitable for sensitive skin. We use high-quality, ethically sourced ingredients and avoid common allergens where possible.",
  },
  {
    id: 4,
    question: "What is the Scent Club?",
    answer: "Our Scent Club is a subscription service that delivers curated perfumes to your door each month. Members get exclusive access to limited editions, new releases, and special events.",
  },
  {
    id: 5,
    question: "How do I find my perfect scent?",
    answer: "We offer a free virtual consultation with our master perfumers. Simply book a session on our Contact page, and we'll help you discover scents that match your personality and preferences.",
  },
];
