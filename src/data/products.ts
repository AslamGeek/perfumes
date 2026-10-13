export type CategoryType =
  | "Traditional Attars"
  | "Oud & Arabic Perfumes"
  | "Everyday Fragrances"
  | "Gift Sets";

export type FragranceFamily =
  | "Woody"
  | "Musky"
  | "Floral"
  | "Amber"
  | "Oriental"
  | "Fresh";

export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  fragranceFamily: FragranceFamily;
  price: number;
  bottleSizes: string[];
  defaultSize: string;
  description: string;
  shortDescription: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  concentration: string;
  longevity: string;
  sillage: string;
  occasion: string;
  image: string;
  badge?: string;
  isFeatured?: boolean;
}

export const CATEGORIES: {
  name: CategoryType;
  description: string;
  image: string;
  itemCount: number;
}[] = [
  {
    name: "Traditional Attars",
    description: "Pure botanical and resin distillations, alcohol-free concentrated oils crafted with century-old deg-bhapka techniques.",
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80",
    itemCount: 4,
  },
  {
    name: "Oud & Arabic Perfumes",
    description: "Deep, smokey agarwood blends, royal ambers, and opulent oriental elixirs steeped in Middle Eastern heritage.",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    itemCount: 3,
  },
  {
    name: "Everyday Fragrances",
    description: "Subtle musks, invigorating citrus woods, and clean morning scents tailored for office, casual, and daily wear in South Indian climates.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    itemCount: 3,
  },
  {
    name: "Gift Sets",
    description: "Handcrafted velvet-lined boxes with ornate crystal bottles and custom fragrance selections for weddings and celebrations.",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    itemCount: 2,
  },
];

export const FRAGRANCE_FAMILIES: FragranceFamily[] = [
  "Woody",
  "Musky",
  "Floral",
  "Amber",
  "Oriental",
  "Fresh",
];

export const PRODUCTS: Product[] = [
  {
    id: "royal-oud-attar",
    name: "Royal Oud Attar",
    category: "Traditional Attars",
    fragranceFamily: "Woody",
    price: 499,
    bottleSizes: ["3ml", "6ml", "12ml"],
    defaultSize: "6ml",
    shortDescription: "A noble blend of Assam agarwood, aged cedar, and a warm whisper of frankincense.",
    description: "A commanding yet refined distillation of Indian and Cambodian agarwood chips. Royal Oud opens with smoky balsam and dry cedar before mellowing into a sweet, woody drydown that clings gracefully to pulse points for over twelve hours. Zero alcohol formulation.",
    notes: {
      top: ["Saffron", "Smoked Bergamot"],
      heart: ["Indian Agarwood", "Cedarwood Bark"],
      base: ["Dry Amber", "Dark Leather", "Musk"],
    },
    concentration: "100% Pure Concentrated Oil (Alcohol-Free)",
    longevity: "14+ Hours on Skin",
    sillage: "Moderate to Prominent",
    occasion: "Evening Gatherings, Traditional Events & Grand Celebrations",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    isFeatured: true,
  },
  {
    id: "white-musk-attar",
    name: "White Musk Attar",
    category: "Traditional Attars",
    fragranceFamily: "Musky",
    price: 299,
    bottleSizes: ["3ml", "6ml", "12ml"],
    defaultSize: "6ml",
    shortDescription: "Crisp, silky, and clean pure white musk with powdery undertones of lily of the valley.",
    description: "The definitive everyday elegance. White Musk is soft, intimate, and comforting—evoking freshly washed linen and gentle floral breeze. Ideal for daily prayers, daytime office wear, and sensitive noses.",
    notes: {
      top: ["Lily of the Valley", "Crisp Cotton"],
      heart: ["Silky White Musk", "Soft Violet"],
      base: ["Powdery Ambergris", "Clean Sandalwood"],
    },
    concentration: "100% Pure Concentrated Oil (Alcohol-Free)",
    longevity: "10–12 Hours",
    sillage: "Intimate Skin Scent",
    occasion: "Daily Office, Morning Prayers & Casual Wear",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    badge: "Staff Pick",
    isFeatured: true,
  },
  {
    id: "amber-nights",
    name: "Amber Nights",
    category: "Oud & Arabic Perfumes",
    fragranceFamily: "Amber",
    price: 599,
    bottleSizes: ["6ml", "12ml"],
    defaultSize: "6ml",
    shortDescription: "Rich golden fossilised amber infused with Madagascar vanilla and warm spices.",
    description: "A decadent, intoxicating nocturnal fragrance. Amber Nights unfolds in layers of golden resin, warm cinnamon warmth, and creamy balsamic vanilla. It radiates comforting warmth that leaves an unforgettable signature trail.",
    notes: {
      top: ["Cardamom", "Spiced Nutmeg"],
      heart: ["Fossilised Golden Amber", "Honeyed Labdanum"],
      base: ["Madagascar Bourbon Vanilla", "Benzoin Tears", "Patchouli"],
    },
    concentration: "100% Pure Concentrated Oil (Alcohol-Free)",
    longevity: "12–15 Hours",
    sillage: "Warm & Enveloping",
    occasion: "Dinner Dates, Festive Receptions & Winter Evenings",
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    isFeatured: true,
  },
  {
    id: "rose-essence-attar",
    name: "Rose Essence Attar",
    category: "Traditional Attars",
    fragranceFamily: "Floral",
    price: 349,
    bottleSizes: ["3ml", "6ml", "12ml"],
    defaultSize: "6ml",
    shortDescription: "Pure Damascena rose petals hydro-distilled into a gentle Mysore sandalwood base.",
    description: "Crafted in the authentic Gulab Attar tradition. Thousands of fresh dew-kissed pink rose blossoms distilled slowly over days, capturing the living essence of fresh petals rather than sharp synthetic perfumes.",
    notes: {
      top: ["Dewy Rose Petals", "Pink Peony"],
      heart: ["Damascena Rose Absolute", "Slight Geranium Hint"],
      base: ["Sandalwood Oil Base", "Soft Sweet Musk"],
    },
    concentration: "Traditional Hydro-Distilled Attar (Deg-Bhapka)",
    longevity: "8–10 Hours",
    sillage: "Romantic & Noticeable",
    occasion: "Weddings, Festivals & Gifting",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80",
    badge: "Classic",
    isFeatured: true,
  },
  {
    id: "arabian-woods",
    name: "Arabian Woods",
    category: "Oud & Arabic Perfumes",
    fragranceFamily: "Woody",
    price: 699,
    bottleSizes: ["6ml", "12ml"],
    defaultSize: "6ml",
    shortDescription: "A smokey desert caravan blend of cedarwood, incense, and deep agarwood bark.",
    description: "An evocative tribute to the timeless Arabian desert. Notes of Atlas cedar, charred woods, frankincense resin, and dry amber mingle to create a dignified, mysterious aura favoured by connoisseurs.",
    notes: {
      top: ["Pink Pepper", "Incense Smoke"],
      heart: ["Atlas Cedar", "Guaicwood", "Agarwood Bark"],
      base: ["Vetiver Roots", "Dark Amber", "Castoreum Accord"],
    },
    concentration: "100% Pure Concentrated Oil (Alcohol-Free)",
    longevity: "14+ Hours",
    sillage: "Strong & Magnetic",
    occasion: "Formal Meetings, Luxury Soirées & Signature Identity",
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=800&q=80",
    badge: "Premium",
    isFeatured: true,
  },
  {
    id: "signature-gift-set",
    name: "Signature Gift Set",
    category: "Gift Sets",
    fragranceFamily: "Oriental",
    price: 999,
    bottleSizes: ["4 × 3ml Vials with Crystal Applicators"],
    defaultSize: "4 × 3ml Set",
    shortDescription: "A royal velvet presentation box containing our four most coveted attars.",
    description: "The quintessential luxury gift. Features four exquisite artisanal attars: Royal Oud, White Musk, Amber Nights, and Rose Essence, housed in velvet-cushioned chambers with gold-plated applicator dipsticks. Ideal for weddings, festive Eid gifts, or personal indulgence.",
    notes: {
      top: ["Assorted Curated Notes"],
      heart: ["Oud, Rose, Amber & Musk"],
      base: ["Long-lasting Natural Oils"],
    },
    concentration: "Set of 4 Concentrated Oils (3ml each)",
    longevity: "Varies (8–14 Hours)",
    sillage: "Versatile Discovery Range",
    occasion: "Wedding Favours, Festive Presents & Scent Discovery",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    badge: "Exclusive Gift",
    isFeatured: true,
  },
  {
    id: "dehn-al-oud-cambodi",
    name: "Dehn Al Oud Cambodi",
    category: "Oud & Arabic Perfumes",
    fragranceFamily: "Woody",
    price: 899,
    bottleSizes: ["3ml", "6ml"],
    defaultSize: "3ml",
    shortDescription: "Aged vintage Cambodian oud oil with dark dried plum, barnyard warmth, and tobacco nuances.",
    description: "An authentic, deeply complex agarwood extraction for serious fragrance aficionados. Rich, earthy, sweet-balsamic, and profoundly meditative.",
    notes: {
      top: ["Wild Honey", "Dried Dark Plum"],
      heart: ["Aged Cambodian Agarwood", "Leather"],
      base: ["Smoky Resins", "Earthy Vetiver"],
    },
    concentration: "Aged Artisanal Oud Oil (100% Pure)",
    longevity: "16+ Hours",
    sillage: "Commanding",
    occasion: "Special Occasions & Meditative Moments",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    isFeatured: false,
  },
  {
    id: "kesar-chandan-attar",
    name: "Kesar Chandan Attar",
    category: "Traditional Attars",
    fragranceFamily: "Oriental",
    price: 449,
    bottleSizes: ["3ml", "6ml", "12ml"],
    defaultSize: "6ml",
    shortDescription: "Pure Kashmiri saffron threads infused into creamy Mysore white sandalwood oil.",
    description: "One of the most revered fragrance traditions of India. Golden saffron filaments provide a bittersweet, opulent warmth that merges into the creamy, buttery depths of pure sandalwood.",
    notes: {
      top: ["Kashmiri Saffron", "Cardamom Seed"],
      heart: ["Mysore Sandalwood Heartwood"],
      base: ["Warm Amber", "Sweet Balsam"],
    },
    concentration: "Traditional Deg-Bhapka Distillation",
    longevity: "12 Hours",
    sillage: "Subtle Warm Glow",
    occasion: "Festive Rituals, Weddings & Daily Calm",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    isFeatured: false,
  },
  {
    id: "fresh-aqua-breeze",
    name: "Fresh Aqua Breeze",
    category: "Everyday Fragrances",
    fragranceFamily: "Fresh",
    price: 349,
    bottleSizes: ["6ml", "12ml"],
    defaultSize: "6ml",
    shortDescription: "Invigorating oceanic accords, bergamot zest, and crisp white cedar for hot weather.",
    description: "Tailored specifically for hot afternoons in Andhra Pradesh. Bright citrus and aquatic breezes that keep you feeling renewed and sharp all day long.",
    notes: {
      top: ["Calabrian Bergamot", "Sea Salt Breeze"],
      heart: ["Mint Leaf", "Neroli Blossoms"],
      base: ["White Cedar", "Clean Musk"],
    },
    concentration: "100% Pure Concentrated Oil (Alcohol-Free)",
    longevity: "8–10 Hours",
    sillage: "Brisk & Uplifting",
    occasion: "Summer Days, Casual Outings & Daily Travel",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80",
    isFeatured: false,
  },
  {
    id: "shamama-tul-amber",
    name: "Shamama Tul Amber",
    category: "Traditional Attars",
    fragranceFamily: "Oriental",
    price: 549,
    bottleSizes: ["3ml", "6ml", "12ml"],
    defaultSize: "6ml",
    shortDescription: "An ancient secret formulation of over 40 Himalayan herbs, roots, spices, and amber.",
    description: "A heritage masterpiece distilled over months using traditional copper stills. Deeply warming, spicy, herbal, and complex with an unmatched therapeutic aura.",
    notes: {
      top: ["Clove Bud", "Mace", "Black Cardamom"],
      heart: ["40+ Ayurvedic Medicinal Roots", "Costus"],
      base: ["Golden Amber", "Sandalwood Base"],
    },
    concentration: "Ancient Heritage Distillation",
    longevity: "16+ Hours",
    sillage: "Deeply Resonant",
    occasion: "Traditional Ceremonies & Winter Comfort",
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80",
    isFeatured: false,
  },
  {
    id: "citrus-oud-elixir",
    name: "Citrus Oud Elixir",
    category: "Everyday Fragrances",
    fragranceFamily: "Fresh",
    price: 449,
    bottleSizes: ["6ml", "12ml"],
    defaultSize: "6ml",
    shortDescription: "Crisp Italian lemon and mandarin layered over a gentle woody base of white oud.",
    description: "A modern fusion between European sparkling citrus and Arabic oriental restraint. Refreshing yet long-lasting on fabric and skin.",
    notes: {
      top: ["Italian Lemon", "Grapefruit", "Mandarin"],
      heart: ["White Oud", "Lavender Spike"],
      base: ["Dry Cedar", "Clean Amber"],
    },
    concentration: "100% Pure Concentrated Oil (Alcohol-Free)",
    longevity: "9–11 Hours",
    sillage: "Crisp & Modern",
    occasion: "Work Meetings, Brunches & Day Engagements",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    isFeatured: false,
  },
  {
    id: "royal-heritage-grand-hamper",
    name: "Royal Heritage Grand Hamper",
    category: "Gift Sets",
    fragranceFamily: "Oriental",
    price: 1499,
    bottleSizes: ["6 × 3ml Attars + Brass Bakhoor Burner"],
    defaultSize: "Luxury Hamper Box",
    shortDescription: "An opulent collector's presentation chest with six luxury attars and artisanal incense burner.",
    description: "The pinnacle of fragrance gifting. Beautiful golden filigree box housing our finest selections, crystal wand applicators, and pure frankincense tears. Makes an impression for weddings and VIP gifting.",
    notes: {
      top: ["Six Curated Luxury Masterpieces"],
      heart: ["Dehn Al Oud, Amber Nights, Kesar Chandan"],
      base: ["Royal Presentation with Incense Burner"],
    },
    concentration: "Luxury 6-Piece Attar & Bakhoor Set",
    longevity: "Comprehensive Collection",
    sillage: "Royal Sillage",
    occasion: "Wedding Gifts, Corporate VIPs & Housewarmings",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    badge: "Connoisseur",
    isFeatured: false,
  },
];
