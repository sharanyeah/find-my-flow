export interface Product {
  id: string;
  brand: string;
  name: string;
  type: 'pad' | 'tampon' | 'cup';
  absorbency: string;
  priceRange: string;
  ecoRating: 'low' | 'medium' | 'high';
  reusable: boolean;
  skinType: 'sensitive' | 'normal';
  retailers: Array<{
    name: string;
    url: string;
    price: string;
  }>;
  features: string[];
  description: string;
}

export const products: Product[] = [
  // Pads
  {
    id: "whisper-ultra-clean-regular",
    brand: "Whisper",
    name: "Ultra Clean Regular",
    type: "pad",
    absorbency: "Light/Regular",
    priceRange: "₹100-250",
    ecoRating: "low",
    reusable: false,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹175" }
    ],
    features: ["Thin design", "Comfortable fit", "Popular choice"],
    description: "Popular, thin, and comfortable"
  },
  {
    id: "whisper-ultra-clean-heavy",
    brand: "Whisper",
    name: "Ultra Clean Heavy",
    type: "pad",
    absorbency: "Heavy",
    priceRange: "₹150-300",
    ecoRating: "low",
    reusable: false,
    skinType: "normal",
    retailers: [
      { name: "Nykaa", url: "https://nykaa.com", price: "₹225" }
    ],
    features: ["Heavy flow protection", "Long-lasting", "Reliable"],
    description: "For heavy flow days"
  },
  {
    id: "stayfree-ultra-thin",
    brand: "Stayfree",
    name: "Ultra Thin",
    type: "pad",
    absorbency: "Light/Regular",
    priceRange: "₹80-200",
    ecoRating: "low",
    reusable: false,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹140" }
    ],
    features: ["Budget-friendly", "Good absorption", "Thin design"],
    description: "Budget-friendly, good absorption"
  },
  {
    id: "sofy-bodyfit-cottony",
    brand: "Sofy",
    name: "Bodyfit Cottony Soft",
    type: "pad",
    absorbency: "Light/Regular",
    priceRange: "₹150-300",
    ecoRating: "low",
    reusable: false,
    skinType: "sensitive",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹225" }
    ],
    features: ["Soft texture", "Sensitive skin friendly", "Cottony feel"],
    description: "Soft, for sensitive skin"
  },
  {
    id: "nua-organic-cotton",
    brand: "Nua",
    name: "Organic Cotton Pads",
    type: "pad",
    absorbency: "Light/Regular",
    priceRange: "₹250-500",
    ecoRating: "high",
    reusable: false,
    skinType: "sensitive",
    retailers: [
      { name: "Nua", url: "https://nua.co.in", price: "₹375" }
    ],
    features: ["Organic cotton", "Biodegradable", "Chemical-free"],
    description: "Organic cotton, biodegradable"
  },
  {
    id: "saathi-biodegradable",
    brand: "Saathi",
    name: "Biodegradable Pads",
    type: "pad",
    absorbency: "Light/Regular",
    priceRange: "₹200-400",
    ecoRating: "high",
    reusable: false,
    skinType: "sensitive",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹300" }
    ],
    features: ["Banana fiber", "Eco-friendly", "Biodegradable"],
    description: "Made from banana fiber, eco-friendly"
  },
  {
    id: "carefree-panty-liners",
    brand: "Carefree",
    name: "Panty Liners",
    type: "pad",
    absorbency: "Light",
    priceRange: "₹70-150",
    ecoRating: "low",
    reusable: false,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹110" }
    ],
    features: ["Thin liners", "Daily freshness", "Discreet"],
    description: "Thin liners, daily freshness"
  },
  {
    id: "kotex-active",
    brand: "Kotex",
    name: "Active",
    type: "pad",
    absorbency: "Light/Regular",
    priceRange: "₹150-300",
    ecoRating: "low",
    reusable: false,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹225" }
    ],
    features: ["Active lifestyle", "Secure fit", "Movement-friendly"],
    description: "Designed for active lifestyle"
  },
  {
    id: "august-organic",
    brand: "August",
    name: "Organic Pads",
    type: "pad",
    absorbency: "Light/Regular",
    priceRange: "₹300-600",
    ecoRating: "high",
    reusable: false,
    skinType: "sensitive",
    retailers: [
      { name: "August", url: "https://august.co.in", price: "₹450" }
    ],
    features: ["Organic", "Chemical-free", "Premium quality"],
    description: "Organic, chemical-free"
  },
  {
    id: "bella-soft-pads",
    brand: "Bella",
    name: "Soft Pads",
    type: "pad",
    absorbency: "Light/Regular",
    priceRange: "₹200-400",
    ecoRating: "low",
    reusable: false,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹300" }
    ],
    features: ["Soft texture", "Comfortable", "Good absorption"],
    description: "Soft and comfortable"
  },

  // Tampons
  {
    id: "carmesi-organic-tampons",
    brand: "Carmesi",
    name: "Organic Cotton Tampons",
    type: "tampon",
    absorbency: "Light, Regular",
    priceRange: "₹300-600",
    ecoRating: "high",
    reusable: false,
    skinType: "sensitive",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹450" }
    ],
    features: ["Organic cotton", "Biodegradable", "Applicator included"],
    description: "Organic, biodegradable"
  },
  {
    id: "sirona-tampons-applicator",
    brand: "Sirona",
    name: "Tampons with Applicator",
    type: "tampon",
    absorbency: "Light, Regular",
    priceRange: "₹200-400",
    ecoRating: "medium",
    reusable: false,
    skinType: "normal",
    retailers: [
      { name: "Sirona", url: "https://sirona.co.in", price: "₹300" }
    ],
    features: ["Comfortable applicator", "Easy insertion", "Reliable"],
    description: "Comfortable applicator"
  },
  {
    id: "pee-safe-biodegradable",
    brand: "Pee Safe",
    name: "Biodegradable Tampons",
    type: "tampon",
    absorbency: "Regular, Super",
    priceRange: "₹250-500",
    ecoRating: "high",
    reusable: false,
    skinType: "sensitive",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹375" }
    ],
    features: ["Eco-friendly", "Biodegradable", "Chemical-free"],
    description: "Eco-friendly, biodegradable"
  },
  {
    id: "tampax-pearl",
    brand: "Tampax",
    name: "Pearl Tampons",
    type: "tampon",
    absorbency: "Light, Regular",
    priceRange: "₹350-700",
    ecoRating: "low",
    reusable: false,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹525" }
    ],
    features: ["Trusted brand", "Smooth insertion", "International quality"],
    description: "Trusted international brand"
  },
  {
    id: "ob-compact",
    brand: "O.B.",
    name: "Compact Tampons",
    type: "tampon",
    absorbency: "Light, Regular",
    priceRange: "₹200-400",
    ecoRating: "low",
    reusable: false,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹300" }
    ],
    features: ["Compact size", "No applicator", "Discreet"],
    description: "Compact, no applicator"
  },
  {
    id: "sanfe-tampons",
    brand: "Sanfe",
    name: "Tampons",
    type: "tampon",
    absorbency: "Light, Regular",
    priceRange: "₹300-600",
    ecoRating: "high",
    reusable: false,
    skinType: "sensitive",
    retailers: [
      { name: "Sanfe", url: "https://sanfe.in", price: "₹450" }
    ],
    features: ["Organic cotton", "Hypoallergenic", "Safe materials"],
    description: "Organic cotton"
  },
  {
    id: "bella-tampons",
    brand: "Bella",
    name: "Tampons",
    type: "tampon",
    absorbency: "Light, Regular",
    priceRange: "₹300-600",
    ecoRating: "low",
    reusable: false,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹450" }
    ],
    features: ["Soft texture", "Comfortable", "Reliable protection"],
    description: "Soft, comfortable"
  },
  {
    id: "lemme-be-organic",
    brand: "Lemme Be",
    name: "Organic Tampons",
    type: "tampon",
    absorbency: "Light, Regular",
    priceRange: "₹300-600",
    ecoRating: "high",
    reusable: false,
    skinType: "sensitive",
    retailers: [
      { name: "Lemme Be", url: "https://lemmebe.in", price: "₹450" }
    ],
    features: ["100% organic cotton", "Chemical-free", "Biodegradable"],
    description: "100% organic cotton"
  },
  {
    id: "menarche-tampons",
    brand: "Menarche",
    name: "Tampons",
    type: "tampon",
    absorbency: "Light, Regular",
    priceRange: "₹200-500",
    ecoRating: "medium",
    reusable: false,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹350" }
    ],
    features: ["Affordable", "Good quality", "Easy to use"],
    description: "Affordable option"
  },
  {
    id: "everteen-tampons",
    brand: "Everteen",
    name: "Tampons",
    type: "tampon",
    absorbency: "Light, Regular",
    priceRange: "₹250-500",
    ecoRating: "medium",
    reusable: false,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹375" }
    ],
    features: ["Trusted brand", "Comfortable", "Reliable"],
    description: "Trusted brand"
  },

  // Menstrual Cups
  {
    id: "carmesi-menstrual-cup",
    brand: "Carmesi",
    name: "Menstrual Cup",
    type: "cup",
    absorbency: "All flows",
    priceRange: "₹800-1300",
    ecoRating: "high",
    reusable: true,
    skinType: "sensitive",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹1050" }
    ],
    features: ["Medical grade silicone", "Soft and flexible", "Easy to insert"],
    description: "Soft, flexible, easy to insert"
  },
  {
    id: "shecup-silicone",
    brand: "Shecup",
    name: "Silicone Cup",
    type: "cup",
    absorbency: "All flows",
    priceRange: "₹1200-1600",
    ecoRating: "high",
    reusable: true,
    skinType: "normal",
    retailers: [
      { name: "Shecup", url: "https://shecup.com", price: "₹1400" }
    ],
    features: ["Reusable", "Leak-proof", "Multiple sizes"],
    description: "Reusable, leak-proof"
  },
  {
    id: "sirona-menstrual-cup",
    brand: "Sirona",
    name: "Menstrual Cup",
    type: "cup",
    absorbency: "All flows",
    priceRange: "₹900-1400",
    ecoRating: "high",
    reusable: true,
    skinType: "normal",
    retailers: [
      { name: "Sirona", url: "https://sirona.co.in", price: "₹1150" }
    ],
    features: ["Sterilizer cup included", "Medical grade", "Easy to clean"],
    description: "Comes with sterilizer cup"
  },
  {
    id: "lunacup-menstrual",
    brand: "Lunacup",
    name: "Menstrual Cup",
    type: "cup",
    absorbency: "All flows",
    priceRange: "₹900-1500",
    ecoRating: "high",
    reusable: true,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹1200" }
    ],
    features: ["Soft and durable", "Multiple sizes", "Long-lasting"],
    description: "Soft and durable"
  },
  {
    id: "meluna-cup",
    brand: "MeLuna",
    name: "Menstrual Cup",
    type: "cup",
    absorbency: "All flows",
    priceRange: "₹1000-1600",
    ecoRating: "high",
    reusable: true,
    skinType: "normal",
    retailers: [
      { name: "MeLuna", url: "https://meluna.in", price: "₹1300" }
    ],
    features: ["Multiple sizes", "Different firmness levels", "Premium quality"],
    description: "Multiple sizes and firmness levels"
  },
  {
    id: "vcup-silicone",
    brand: "Vcup",
    name: "Silicone Cup",
    type: "cup",
    absorbency: "All flows",
    priceRange: "₹700-1200",
    ecoRating: "high",
    reusable: true,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹950" }
    ],
    features: ["Compact design", "One size fits most", "Affordable"],
    description: "Compact design"
  },
  {
    id: "rael-silicone-cup",
    brand: "Rael",
    name: "Silicone Cup",
    type: "cup",
    absorbency: "All flows",
    priceRange: "₹1100-1600",
    ecoRating: "high",
    reusable: true,
    skinType: "sensitive",
    retailers: [
      { name: "Rael", url: "https://rael.in", price: "₹1350" }
    ],
    features: ["Certified organic brand", "Premium silicone", "Eco-friendly"],
    description: "Certified organic brand"
  },
  {
    id: "gyncocup-silicone",
    brand: "Gyncocup",
    name: "Silicone Cup",
    type: "cup",
    absorbency: "All flows",
    priceRange: "₹900-1400",
    ecoRating: "high",
    reusable: true,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹1150" }
    ],
    features: ["BPA-free", "Comfortable", "Medical grade"],
    description: "BPA-free and comfortable"
  },
  {
    id: "senziwash-cup",
    brand: "Senziwash",
    name: "Menstrual Cup",
    type: "cup",
    absorbency: "All flows",
    priceRange: "₹800-1300",
    ecoRating: "high",
    reusable: true,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹1050" }
    ],
    features: ["Cleaning spray included", "Easy maintenance", "Hygienic"],
    description: "Comes with cleaning spray"
  },
  {
    id: "truecup-menstrual",
    brand: "Truecup",
    name: "Menstrual Cup",
    type: "cup",
    absorbency: "All flows",
    priceRange: "₹900-1400",
    ecoRating: "high",
    reusable: true,
    skinType: "normal",
    retailers: [
      { name: "Amazon", url: "https://amazon.in", price: "₹1150" }
    ],
    features: ["Good for beginners", "Soft material", "Easy to use"],
    description: "Good for beginners"
  }
];

export interface QuizAnswer {
  flow: 'light' | 'moderate' | 'heavy' | 'irregular';
  duration: 'short' | 'moderate' | 'long';
  activity: 'sedentary' | 'light' | 'moderate' | 'intense';
  skinSensitivity: 'ultra' | 'sometimes' | 'chill';
  internalComfort: 'pro' | 'curious' | 'external' | 'never';
  leakConcern: 'rare' | 'occasional' | 'frequent';
  environmental: 'major' | 'nice' | 'not';
  budget: 'affordable' | 'balanced' | 'splurge' | 'best';
  overnight: 'critical' | 'some' | 'not';
  fragrance: 'free' | 'light' | 'no-preference';
  absorbency: 'light' | 'super' | 'overnight';
  travel: 'homebound' | 'occasional' | 'frequent' | 'fulltime';
  sleepPosition: 'back' | 'side' | 'stomach' | 'toss';
  priorityFeature: 'disposal' | 'discreet' | 'comfort' | 'design';
  allergies: 'strict' | 'sometimes' | 'none';
  productType: 'pad' | 'tampon' | 'cup';
}

export const getRecommendations = (answers: QuizAnswer): { primary: Product; alternatives: Product[] } => {
  let scoredProducts = products.map(product => {
    let score = 0;

    // Flow matching
    if (answers.flow === 'light' && product.absorbency.includes('Light')) score += 3;
    if (answers.flow === 'moderate' && product.absorbency.includes('Regular')) score += 3;
    if (answers.flow === 'heavy' && (product.absorbency.includes('Heavy') || product.absorbency.includes('Super'))) score += 3;

    // Duration consideration
    if (answers.duration === 'long' && product.absorbency.includes('Heavy')) score += 2;

    // Activity level
    if (answers.activity === 'intense' && (product.type === 'tampon' || product.type === 'cup')) score += 3;
    if (answers.activity === 'moderate' && (product.type === 'tampon' || product.type === 'cup')) score += 2;

    // Internal comfort
    if (answers.internalComfort === 'pro' && (product.type === 'tampon' || product.type === 'cup')) score += 3;
    if (answers.internalComfort === 'external' && product.type === 'pad') score += 3;
    if (answers.internalComfort === 'never' && product.type === 'pad') score += 3;

    // Leak concern
    if (answers.leakConcern === 'frequent' && (product.absorbency.includes('Heavy') || product.absorbency.includes('Super'))) score += 3;

    // Overnight protection
    if (answers.overnight === 'critical' && (product.absorbency.includes('Heavy') || product.absorbency.includes('Super'))) score += 3;

    // Environmental priority
    if (answers.environmental === 'major' && product.ecoRating === 'high') score += 3;
    if (answers.environmental === 'nice' && product.ecoRating === 'medium') score += 2;

    // Budget considerations
    const priceNum = parseInt(product.priceRange.split('-')[1].replace(/[₹,]/g, ''));
    const maxBudget = answers.budget === 'affordable' ? 300 : 
                     answers.budget === 'balanced' ? 600 : 
                     answers.budget === 'splurge' ? 1000 : 2000;
    if (priceNum <= maxBudget) score += 2;

    // Product type preference (primary factor)
    if (answers.productType === product.type) score += 5;

    // Skin sensitivity
    if (answers.skinSensitivity === 'ultra' && product.skinType === 'sensitive') score += 3;

    // Travel frequency
    if (answers.travel === 'frequent' && (product.type === 'tampon' || product.type === 'cup')) score += 2;

    return { ...product, score };
  });

  // Sort all products by score
  const sortedProducts = scoredProducts.sort((a, b) => b.score - a.score);
  
  // Find the best product from preferred category
  const primaryProduct = sortedProducts.find(product => product.type === answers.productType) || sortedProducts[0];
  
  // Get alternatives from other categories and same category
  const alternatives = sortedProducts
    .filter(product => product.id !== primaryProduct.id)
    .slice(0, 3);

  return {
    primary: primaryProduct,
    alternatives
  };
};