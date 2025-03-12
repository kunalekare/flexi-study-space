
// Product database
export const products = [
  {
    id: 1,
    name: "Voice-Controlled Smart Home Hub",
    category: "Smart Home Assistance",
    price: 129.99,
    originalPrice: 199.99,
    discount: 35,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?q=80&w=3431&auto=format&fit=crop",
    rating: 4.8,
    reviews: 245,
    description: "Control your entire home with just your voice. Compatible with all major smart home ecosystems."
  },
  {
    id: 2,
    name: "Adaptive Buttoning Aid Tool",
    category: "Adaptive Clothing",
    price: 24.99,
    originalPrice: 34.99,
    discount: 28,
    image: "https://images.unsplash.com/photo-1606107461704-37586a94c12d?q=80&w=1964&auto=format&fit=crop",
    rating: 4.6,
    reviews: 187,
    description: "Makes buttoning shirts and pants easier for those with limited dexterity or one-handed use."
  },
  {
    id: 3,
    name: "Ultra-Lightweight Folding Wheelchair",
    category: "Mobility Aids",
    price: 599.99,
    originalPrice: 849.99,
    discount: 29,
    image: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?q=80&w=1965&auto=format&fit=crop",
    rating: 4.9,
    reviews: 312,
    description: "Carbon fiber frame weighs just 19 pounds while supporting up to 250 pounds. Folds compactly for easy transport."
  },
  {
    id: 4,
    name: "Screen Reader Software Premium",
    category: "Assistive Technology",
    price: 199.99,
    originalPrice: 299.99,
    discount: 33,
    image: "https://images.unsplash.com/photo-1551817958-20204d6ab212?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    reviews: 156,
    description: "Advanced screen reader with natural-sounding voices and support for over 30 languages."
  },
  {
    id: 5,
    name: "Adjustable Ergonomic Keyboard",
    category: "Assistive Technology",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?q=80&w=2076&auto=format&fit=crop",
    rating: 4.5,
    reviews: 124,
    description: "Split design with adjustable tenting and palm supports to reduce strain during extended typing."
  },
  {
    id: 6,
    name: "Sensory Calming Weighted Blanket",
    category: "Sensory-Friendly Items",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    image: "https://images.unsplash.com/photo-1631772626749-d9823228b895?q=80&w=1964&auto=format&fit=crop",
    rating: 4.8,
    reviews: 208,
    description: "Premium glass bead filling provides gentle, even pressure to help reduce anxiety and improve sleep."
  },
  {
    id: 7,
    name: "Amplified Hearing Aid - Rechargeable",
    category: "Hearing & Vision Support",
    price: 249.99,
    originalPrice: 349.99,
    discount: 29,
    image: "https://images.unsplash.com/photo-1595165680369-d6466536fec7?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    reviews: 182,
    description: "Rechargeable hearing amplifier with background noise reduction and 20-hour battery life."
  },
  {
    id: 8,
    name: "Magnetic Button Shirts - 3 Pack",
    category: "Adaptive Clothing",
    price: 89.99,
    originalPrice: 129.99,
    discount: 31,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    reviews: 97,
    description: "Look like traditional button-up shirts but use hidden magnetic closures for easy dressing."
  },
  {
    id: 9,
    name: "One-Handed Kitchen Cutting Board",
    category: "Adaptive Kitchen Tools",
    price: 45.99,
    originalPrice: 59.99,
    discount: 23,
    image: "https://images.unsplash.com/photo-1631170704355-156e4a307d8d?q=80&w=2059&auto=format&fit=crop",
    rating: 4.8,
    reviews: 134,
    description: "Features corner spikes and clamps to hold food in place while cutting with one hand."
  },
  {
    id: 10,
    name: "High-Contrast Large Print Keyboard",
    category: "Assistive Technology",
    price: 49.99,
    originalPrice: 69.99,
    discount: 28,
    image: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    reviews: 89,
    description: "Features large, high-contrast yellow keys with black text for better visibility."
  },
  {
    id: 11,
    name: "Automatic Pill Dispenser with Reminders",
    category: "Smart Home Assistance",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2070&auto=format&fit=crop",
    rating: 4.5,
    reviews: 156,
    description: "Programmable dispenser with alarms, app notifications, and caregiver alerts if doses are missed."
  },
  {
    id: 12,
    name: "Eye-Controlled Computer Mouse",
    category: "Assistive Technology",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    image: "https://images.unsplash.com/photo-1527443060795-0402a218683f?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    reviews: 63,
    description: "Control your computer using just eye movements. Perfect for those with limited hand mobility."
  }
];

// Map categoryId URL parameters to display names
export const categoryMap: Record<string, string> = {
  "assistive-technology": "Assistive Technology",
  "mobility-aids": "Mobility Aids",
  "adaptive-clothing": "Adaptive Clothing",
  "sensory-friendly": "Sensory-Friendly Items",
  "hearing-vision": "Hearing & Vision Support",
  "smart-home": "Smart Home Assistance"
};

// Get featured products (first 4)
export const getFeaturedProducts = () => products.slice(0, 4);

// Get products by category
export const getProductsByCategory = (categoryId: string) => {
  if (categoryId === 'all-accessibility') {
    return products;
  }
  
  const categoryName = categoryMap[categoryId];
  return products.filter(product => product.category === categoryName);
};
