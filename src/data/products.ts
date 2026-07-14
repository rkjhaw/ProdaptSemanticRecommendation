export interface ProductImage {
  variant: string;
  thumb: string;
  large: string;
  hi_res: string;
}

export interface ProductDetails {
  Material?: string;
  Brand?: string;
  Fit?: string;
  Care?: string;
  Style?: string;
  Season?: string;
  [key: string]: string | undefined;
}

export interface Product {
  parent_asin: string;
  main_category: string;
  title: string;
  average_rating: number;
  rating_number: number;
  features: string[];
  description: string[];
  price: number;
  images: ProductImage[];
  videos?: { title: string; url: string }[];
  store: string;
  categories: string[];
  details: ProductDetails;
  bought_together: string[];
}

export const products: Product[] = [
  {
    parent_asin: "B091B1F341",
    main_category: "Apparel & Accessories",
    title: "Men's Premium Classic Linen Button-Down Shirt",
    average_rating: 4.6,
    rating_number: 842,
    features: [
      "100% Ultra-Soft Natural Linen fabric for maximum breathability",
      "Regular fit with a classic spread collar and chest pocket",
      "Perfect for beach outings, summer weddings, and tropical resort vacations",
      "Lightweight, moisture-wicking weave keeps you dry and cool in high humidity"
    ],
    description: [
      "Elevate your summer wardrobe with this classic linen button-down shirt. Crafted from pure, high-grade flax linen, it offers unparalleled air circulation and comfort.",
      "With a timeless design that transitions smoothly from daytime sandy beaches to casual evening dinners, this is a versatile staple for any warm-weather getaway."
    ],
    price: 39.99,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Isla & Coast",
    categories: ["Men's Fashion", "Shirts", "Linen Shirts", "Beachwear"],
    details: {
      Material: "100% Natural Flax Linen",
      Brand: "Isla & Coast",
      Fit: "Regular Fit, True to Size",
      Care: "Machine wash cold on gentle cycle, hang dry to preserve texture",
      Style: "Coastal Casual",
      Season: "Summer"
    },
    bought_together: ["B08W3D29SK", "B07Z8L6S4Y"]
  },
  {
    parent_asin: "B08W3D29SK",
    main_category: "Apparel & Accessories",
    title: "Men's Quick-Dry Tailored Swim Trunks",
    average_rating: 4.7,
    rating_number: 1105,
    features: [
      "Four-way stretch high-performance fabric with quick-dry technology",
      "Tailored modern cut with 7-inch inseam and elastic drawstring waist",
      "Equipped with water-draining side pockets and a zippered secure back pocket",
      "Soft mesh interior lining prevents chafing and provides robust support"
    ],
    description: [
      "The ultimate swim shorts designed to perform on the surfboard and look sharp at the beachside bar. Engineered from recycled ocean-bound plastics, our swim trunks dry in under 15 minutes.",
      "Featuring a tailored profile instead of a baggy fit, these shorts offer a stylish, refined look that doubles as casual everyday wear during hot summer months."
    ],
    price: 34.99,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1532517810741-394ae9e95213?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1532517810741-394ae9e95213?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1532517810741-394ae9e95213?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Meridian Active",
    categories: ["Men's Fashion", "Swimwear", "Board Shorts", "Beachwear"],
    details: {
      Material: "90% Recycled Polyester, 10% Spandex",
      Brand: "Meridian Active",
      Fit: "Semi-Tailored",
      Care: "Rinse after salt water, machine wash cold, air dry",
      Style: "Athletic Swimwear",
      Season: "Summer"
    },
    bought_together: ["B091B1F341", "B07Z8L6S4Y"]
  },
  {
    parent_asin: "B07Z8L6S4Y",
    main_category: "Apparel & Accessories",
    title: "Polarized Bamboo Wood Wayfarer Sunglasses",
    average_rating: 4.8,
    rating_number: 2314,
    features: [
      "9-layer polarized lenses offering 100% UVA/UVB protection",
      "Handcrafted sustainable bamboo wood temples with double-spring hinges",
      "Ultra-lightweight frame that floats on water - never lose your glasses in the sea!",
      "Comes with an organic hemp carrying pouch and wooden protective tube cylinder"
    ],
    description: [
      "Eco-conscious style meets cutting-edge visual clarity. These retro-classic wayfarer sunglasses feature beautiful, hand-finished temples made from fast-growing, sustainable bamboo.",
      "Our polarized lenses eliminate high-intensity glare, restoring true colors and reducing eye strain while you bask in the sun or sail the open seas."
    ],
    price: 24.50,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&auto=format&fit=crop"
      }
    ],
    store: "TimberWild",
    categories: ["Accessories", "Sunglasses", "Eco Accessories", "Beachwear"],
    details: {
      Material: "Polycarbonate frame, Natural Bamboo Wood temples",
      Brand: "TimberWild",
      Fit: "Universal fit with flexible spring hinges",
      Care: "Wipe with microfiber cloth, store in dry bamboo tube",
      Style: "Retro Wayfarer",
      Season: "Year-round"
    },
    bought_together: ["B091B1F341", "B08W3D29SK"]
  },
  {
    parent_asin: "B09Y8XCSL9",
    main_category: "Apparel & Accessories",
    title: "Women's Lightweight Linen Blend Resort Pants",
    average_rating: 4.5,
    rating_number: 678,
    features: [
      "Breathable linen-viscose blend that drapes beautifully without stiff wrinkling",
      "Wide-leg palazzo styling with a comfortable elastic drawstring waistband",
      "Functional slant hand pockets and subtle clean back pockets",
      "Incredibly breezy cut perfect for lounging, resort walks, or beach days"
    ],
    description: [
      "The ultimate warm-weather trouser. Our resort linen pants combine the rustic texture of flax with the fluid, silky drape of viscose, resulting in a fabric that wrinkles less and feels like silk on skin.",
      "Pair with a bikini top at the pool or dress them up with a silk tank and wedge sandals for an effortlessly elegant sunset cocktail hour."
    ],
    price: 45.00,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Isla & Coast",
    categories: ["Women's Fashion", "Pants", "Linen Pants", "Beachwear"],
    details: {
      Material: "55% Linen, 45% Viscose",
      Brand: "Isla & Coast",
      Fit: "Loose, wide-leg, relaxed",
      Care: "Hand wash cold or dry clean recommended to maintain drape",
      Style: "Bohemian Resort",
      Season: "Summer"
    },
    bought_together: ["B09Z9NMM98", "B07Z8L6S4Y"]
  },
  {
    parent_asin: "B09Z9NMM98",
    main_category: "Apparel & Accessories",
    title: "Women's Wide Brim Straw Sun Hat",
    average_rating: 4.4,
    rating_number: 453,
    features: [
      "Hand-woven from 100% natural paper straw with elegant ribbon tie",
      "UPF 50+ maximum sun protection shielding eyes, face, and neck",
      "Foldable, packable design - rolls up easily for compact packing in suitcases",
      "Adjustable inner sweatband ensures a snug, comfortable fit for all head sizes"
    ],
    description: [
      "Stay glamorous and protected from intense rays. This floppy straw sun hat features a tight-weave construction that filters out 98% of harmful UV rays while remaining exceptionally ventilated.",
      "An internal velcro strap lets you customize the circumference, while the flexible wire brim allows you to shape the shade to your liking. The perfect companion for beach picnics and cruise vacations."
    ],
    price: 22.99,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1572451479139-6a308211d8be?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1572451479139-6a308211d8be?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1572451479139-6a308211d8be?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Sol Protection",
    categories: ["Accessories", "Hats", "Sun Hats", "Beachwear"],
    details: {
      Material: "100% Woven Natural Straw",
      Brand: "Sol Protection",
      Fit: "One size fits most (Adjustable internal strap)",
      Care: "Spot clean with damp cloth, do not submerge",
      Style: "Elegant Floppy Hat",
      Season: "Summer"
    },
    bought_together: ["B09Y8XCSL9", "B07Z8L6S4Y"]
  },
  {
    parent_asin: "B089KJM7YY",
    main_category: "Apparel & Accessories",
    title: "Women's Structured Wool Blend Double-Breasted Blazer",
    average_rating: 4.7,
    rating_number: 412,
    features: [
      "Mid-weight premium wool-viscose blend structured outer shell",
      "Sharp padded shoulders, notched lapels, and double-breasted tortoiseshell buttons",
      "Full satin lining for silk-like layering over shirts, blouses, and knits",
      "Two flap pockets and one internal smartphone security pocket"
    ],
    description: [
      "Cmd+F modern tailoring: This double-breasted blazer is engineered to provide an instantly polished, authoritative silhouette. Designed with crisp lines and structured shoulders, it commands respect in any board meeting.",
      "The wool blend fabric provides elegant insulation, making it the perfect year-round workwear layer, pairing effortlessly with tailored trousers or denim jeans for an elevated smart-casual outfit."
    ],
    price: 89.00,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Savile Row Modern",
    categories: ["Women's Fashion", "Suits & Blazers", "Blazers", "Office Wear"],
    details: {
      Material: "60% Wool, 35% Viscose, 5% Elastane; 100% Polyester Lining",
      Brand: "Savile Row Modern",
      Fit: "Tailored fit, slightly elongated",
      Care: "Dry clean only to maintain shoulder structures",
      Style: "Professional Double-Breasted",
      Season: "Autumn/Winter/Spring"
    },
    bought_together: ["B08N8V39CD", "B07V2C4LPT"]
  },
  {
    parent_asin: "B08N8V39CD",
    main_category: "Apparel & Accessories",
    title: "Women's High-Waisted Slim-Leg Dress Trousers",
    average_rating: 4.6,
    rating_number: 589,
    features: [
      "High-rise fit that sits flat against the waist with an invisible side zipper",
      "Four-way stretch Ponte fabric that maintains shape and resists wrinkles",
      "Slim, tapered leg with ankle-grazing hems and a subtle front seam crease",
      "Comfort elastic stretch panel inside the waist for all-day comfort at your desk"
    ],
    description: [
      "The holy grail of professional pants. Combining the professional aesthetic of Italian suit pants with the incredible stretch and luxury feel of thick, supportive leggings.",
      "These trousers drape impeccably, do not bag at the knees, and keep you looking crisp from your 9 AM briefing to dinner with clients."
    ],
    price: 54.99,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Savile Row Modern",
    categories: ["Women's Fashion", "Pants", "Dress Pants", "Office Wear"],
    details: {
      Material: "68% Rayon, 27% Nylon, 5% Spandex",
      Brand: "Savile Row Modern",
      Fit: "Slim fit, high-waisted",
      Care: "Machine wash cold inside out, lay flat to dry",
      Style: "Modern Executive",
      Season: "Year-round"
    },
    bought_together: ["B089KJM7YY", "B07V2C4LPT"]
  },
  {
    parent_asin: "B07V2C4LPT",
    main_category: "Bags & Leather Goods",
    title: "Saffiano Leather Executive Tote Bag",
    average_rating: 4.8,
    rating_number: 1420,
    features: [
      "Genuine full-grain cowhide leather with scratch-resistant Saffiano finish",
      "Fully padded laptop compartment fitting up to 15.6-inch MacBooks/Laptops",
      "Stands upright on metal protective feet with reinforced flat bottom",
      "Multiple interior zip compartments, pen loops, card slots, and key leash"
    ],
    description: [
      "Invest in your daily commute. This structured executive tote organizer is designed for the modern woman who does it all. Saffiano leather resists water, scratches, and stains, maintaining its flawless look.",
      "A clever trolley sleeve on the back lets you slide it onto rolling luggage handles during business trips, while the plush, padded shoulder straps prevent digging."
    ],
    price: 125.00,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Verona Luxury",
    categories: ["Accessories", "Bags", "Tote Bags", "Office Wear"],
    details: {
      Material: "Genuine Saffiano Leather, Brass Hardware",
      Brand: "Verona Luxury",
      Fit: "Generous capacity, structured shape",
      Care: "Wipe with leather cleaner, do not wash",
      Style: "Structured Executive Tote",
      Season: "Year-round"
    },
    bought_together: ["B089KJM7YY", "B08N8V39CD"]
  },
  {
    parent_asin: "B08L7V78X1",
    main_category: "Apparel & Accessories",
    title: "Men's Italian Suede Chelsea Boots",
    average_rating: 4.7,
    rating_number: 954,
    features: [
      "Handcrafted in Italy using 100% premium calfskin suede",
      "Water-repellent nanotech coating guards suede from moisture and light rain",
      "Sturdy crepe rubber sole providing exceptional grip and shock absorption",
      "Elastic side panels and double woven pull tabs for effortless slip-on wear"
    ],
    description: [
      "The perfect bridge between casual denim and formal suits. Hand-stitched by multi-generational artisans in Tuscany, our suede Chelsea boots offer an elegant, slim toe profile and timeless luxury appeal.",
      "With a glove-soft interior leather lining that conforms to your foot shape over time, these boots provide absolute comfort straight out of the box."
    ],
    price: 149.00,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Aurelio Footwear",
    categories: ["Men's Fashion", "Shoes", "Boots", "Chelsea Boots", "Office Wear"],
    details: {
      Material: "Italian Calfskin Suede outer, Soft Leather lining, Crepe sole",
      Brand: "Aurelio Footwear",
      Fit: "Slightly large (Recommend sizing down half a size)",
      Care: "Brush with suede comb, reapply water-repellent spray quarterly",
      Style: "Sleek Chelsea",
      Season: "Autumn/Winter/Spring"
    },
    bought_together: ["B09X987H62", "B089KVB57A"]
  },
  {
    parent_asin: "B09X987H62",
    main_category: "Apparel & Accessories",
    title: "Men's Slim-Fit Stretch Dress Chino Pants",
    average_rating: 4.5,
    rating_number: 1243,
    features: [
      "Heavyweight twill weave engineered with 3% spandex stretch fiber",
      "Flat-front tailoring, button tab enclosure, and heavy-duty brass zipper",
      "Anti-stain and spill-resistant nano-barrier technology coating",
      "Discreet side seam tech pocket for safe storage of modern smartphones"
    ],
    description: [
      "Ditch the restrictive suit pants. Our stretch chinos look identical to high-end dress trousers but feel as comfortable as your favorite sweatpants. Ideal for long office hours and airport commutes.",
      "The premium cotton-spandex weave retains its crisp shape and crease lines without ironing, making it highly suitable for business travel."
    ],
    price: 49.99,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Savile Row Modern",
    categories: ["Men's Fashion", "Pants", "Chinos", "Office Wear"],
    details: {
      Material: "97% Long-staple Pima Cotton, 3% Spandex",
      Brand: "Savile Row Modern",
      Fit: "Slim fit, tapered below the knee",
      Care: "Machine wash warm with similar colors, tumble dry medium",
      Style: "Business Casual",
      Season: "Year-round"
    },
    bought_together: ["B08L7V78X1", "B089KVB57A"]
  },
  {
    parent_asin: "B089KVB57A",
    main_category: "Apparel & Accessories",
    title: "Men's Italian Merino Wool V-Neck Sweater",
    average_rating: 4.6,
    rating_number: 782,
    features: [
      "Spun from 100% fine Italian Merino wool for incredibly soft, zero-itch skin feel",
      "Naturally temperature-regulating, warm in winter and breathable in spring",
      "Ribbed cuffs, collar, and waist hem that resist stretching and sag",
      "Highly breathable, odor-resistant, and pill-resistant knit construction"
    ],
    description: [
      "Layer like an executive. This exquisite merino V-neck sweater is lightweight enough to layer over a collared dress shirt without adding awkward bulk, yet warm enough to insulate under a heavy overcoat.",
      "Merino's active fibers adjust to your body temperature, keeping you sweat-free inside heated offices while preserving a sleek, sophisticated visual appeal."
    ],
    price: 65.00,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Aurelio Footwear",
    categories: ["Men's Fashion", "Sweaters", "Merino Wool", "Office Wear"],
    details: {
      Material: "100% Extra-Fine Merino Wool",
      Brand: "Aurelio Footwear",
      Fit: "Slim fit, tailored body",
      Care: "Hand wash cold, dry flat; do not machine dry",
      Style: "Polished Layering",
      Season: "Autumn/Winter/Spring"
    },
    bought_together: ["B08L7V78X1", "B09X987H62"]
  },
  {
    parent_asin: "B09Z9K987A",
    main_category: "Apparel & Accessories",
    title: "High-Rise ButterSoft Interlock Running Leggings",
    average_rating: 4.8,
    rating_number: 3102,
    features: [
      "Super-high waistband with compressive, double-layer roll-resistant core",
      "Dual deep side pockets fit oversized smartphones securely during sprints",
      "Squat-proof, fully opaque heavy-interlock weave blocks show-through",
      "Flatlock seams prevent skin chafing, rubbing, and hot spots"
    ],
    description: [
      "Engineered for high-intensity intervals and ultimate weekend relaxation. Crafted from our proprietary ButterSoft nylon fabric, these leggings feel weightless like a second skin while offering secure, targeted compression.",
      "The specialized sweat-wicking knit draws moisture away from the skin instantly, keeping you dry and fresh during grueling runs or warm hot-yoga classes."
    ],
    price: 32.00,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Meridian Active",
    categories: ["Women's Fashion", "Activewear", "Leggings", "Athleisure"],
    details: {
      Material: "78% Nylon, 22% Lycra Elastane",
      Brand: "Meridian Active",
      Fit: "High compression, snug",
      Care: "Machine wash cold inside out, line dry",
      Style: "Active Performance",
      Season: "Year-round"
    },
    bought_together: ["B09X1192YY", "B07Z8L6S4Y"]
  },
  {
    parent_asin: "B09X1192YY",
    main_category: "Apparel & Accessories",
    title: "Women's Moisture-Wicking Breathable Athletic Tee",
    average_rating: 4.6,
    rating_number: 1450,
    features: [
      "Ultralight micro-mesh weave promotes rapid air ventilation",
      "Silver-ion embedded anti-microbial fabric prevents workout odor-causing bacteria",
      "Slightly scooped neck and scoop hem for a highly flattering, comfortable cut",
      "Reflective safety striping on back collar for night running visibility"
    ],
    description: [
      "Stay active and cool. Our performance athletic tee features high-end moisture dispersion technology that moves sweat to the outer layer of the shirt where it quickly evaporates.",
      "Anti-odor tech allows you to wear it for back-to-back workouts, making it an indispensable training essential."
    ],
    price: 18.50,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Meridian Active",
    categories: ["Women's Fashion", "Activewear", "Active Shirts", "Athleisure"],
    details: {
      Material: "100% Recycled Polyolefin Micro-Mesh",
      Brand: "Meridian Active",
      Fit: "Relaxed, comfortable drape",
      Care: "Machine wash warm, do not use fabric softener",
      Style: "Athletic Cut",
      Season: "Summer/Spring"
    },
    bought_together: ["B09Z9K987A", "B07Z8L6S4Y"]
  },
  {
    parent_asin: "B08W7XCSD8",
    main_category: "Apparel & Accessories",
    title: "Women's Luxury Long Wool Wrap Trench Coat",
    average_rating: 4.9,
    rating_number: 322,
    features: [
      "Crafted from premium 100% boiled virgin wool for heavyweight warmth",
      "Removable wrap-around belt, deep patch hand pockets, and oversized foldover lapels",
      "Fully windproof lining provides exceptional protection against biting frost",
      "Incredibly elegant ankle-length sweep creates a stunning winter aesthetic"
    ],
    description: [
      "The absolute pinnacle of luxury winter outerwear. This virgin wool coat is spun using a specialty dense boiling technique, rendering it exceptionally warm yet surprisingly soft and free of stiffness.",
      "The oversized lapels can be buttoned shut against heavy winter winds, or left open for a beautiful, cascading draping front. Belt it tightly at the waist for a structured hourglass silhouette or leave it loose."
    ],
    price: 189.00,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Nordic Loom",
    categories: ["Women's Fashion", "Coats", "Wool Coats", "Winter Wear"],
    details: {
      Material: "100% Boiled Virgin Wool",
      Brand: "Nordic Loom",
      Fit: "Oversized silhouette (Size down for a fitted look)",
      Care: "Professional dry clean only",
      Style: "Elegant Wrap Trench",
      Season: "Winter"
    },
    bought_together: ["B089KV99CD", "B07V2C4LPT"]
  },
  {
    parent_asin: "B089KV99CD",
    main_category: "Apparel & Accessories",
    title: "Women's pure Cashmere Turtleneck Sweater",
    average_rating: 4.8,
    rating_number: 642,
    features: [
      "Spun from 100% pure Grade-A Mongolian cashmere fibers",
      "Dense, two-ply fine knit provides ultimate, weightless thermal insulation",
      "Relaxed mock turtleneck with ribbed knit neck, cuffs, and drop-tail hem",
      "Unbelievably soft feel that grows softer and loftier with every wash"
    ],
    description: [
      "Experience pure, unadulterated comfort. Our Grade-A cashmere is harvested responsibly from free-ranging Mongolian goats, selecting only the finest, longest fibers to prevent pilling.",
      "This cozy knit layers seamlessly under wool coats, providing incredible insulation from heavy cold without heavy weight."
    ],
    price: 110.00,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1574164904299-3a102b110380?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1574164904299-3a102b110380?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1574164904299-3a102b110380?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Nordic Loom",
    categories: ["Women's Fashion", "Sweaters", "Cashmere", "Winter Wear"],
    details: {
      Material: "100% Grade-A Mongolian Cashmere",
      Brand: "Nordic Loom",
      Fit: "Relaxed comfort fit",
      Care: "Hand wash cold inside out with wool detergent, reshape and dry flat",
      Style: "Luxury Cozy Mockneck",
      Season: "Autumn/Winter"
    },
    bought_together: ["B08W7XCSD8", "B07V2C4LPT"]
  },
  {
    parent_asin: "B09B1F8399",
    main_category: "Apparel & Accessories",
    title: "Men's Heavyweight Fleece-Lined Winter Parka",
    average_rating: 4.7,
    rating_number: 840,
    features: [
      "Teflon-coated heavy Oxford shell resists severe rain, wind, and sleet",
      "Thick, high-loft synthetic down insulation warmth rated to -15°F",
      "Adjustable hood with synthetic faux-fur lining that deflects snow",
      "Reinforced heavy-duty dual front zippers and Velcro storm flap"
    ],
    description: [
      "Arm Yourself against Arctic conditions. Our fleece-lined storm parka is built to withstand extreme winter weather. The outer shell blocks wind completely and sheds water with ease, while the dense fill locks in body heat.",
      "Equipped with 6 warm exterior fleece-lined handwarmer pockets and an internal security passport pocket, it's perfect for winter travels, snow hiking, and freezing morning commutes."
    ],
    price: 129.99,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Polar Shield",
    categories: ["Men's Fashion", "Coats", "Parkas", "Winter Wear"],
    details: {
      Material: "100% Nylon shell, 100% Fleece lining, Down alternative fill",
      Brand: "Polar Shield",
      Fit: "Generous winter fit (designed to wear over heavy sweaters)",
      Care: "Machine wash cold on gentle, remove faux fur hood before wash",
      Style: "Arctic Utility Parka",
      Season: "Winter"
    },
    bought_together: ["B08N8H11XY", "B08L7V78X1"]
  },
  {
    parent_asin: "B08N8H11XY",
    main_category: "Apparel & Accessories",
    title: "Premium Merino Wool Heavy Winter Thermal Socks",
    average_rating: 4.8,
    rating_number: 1890,
    features: [
      "Extra thick knit with 75% merino wool content for advanced insulation",
      "Fully cushioned footbed and arch compression band reduces fatigue",
      "Reinforced toes and heels prevent holes and cushion against heavy boots",
      "Natural sweat-wicking behavior keeps toes dry and warm, stopping blister formation"
    ],
    description: [
      "Comfort starts at your toes. These heavy-duty thermal socks are crafted specifically for freezing outdoor trails, ski resorts, or lounging in freezing cabins.",
      "The merino blend keeps feet warm and entirely free of moisture, preventing the cold-sweat cycle that freezes feet."
    ],
    price: 18.99,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Polar Shield",
    categories: ["Accessories", "Socks", "Thermal", "Winter Wear"],
    details: {
      Material: "75% Merino Wool, 20% Polyester, 5% Elastane",
      Brand: "Polar Shield",
      Fit: "Elastic compression fit",
      Care: "Machine wash cold inside out, lay flat to dry; do not bleach",
      Style: "Heavy Thermal Trail",
      Season: "Winter"
    },
    bought_together: ["B09B1F8399", "B08L7V78X1"]
  },
  {
    parent_asin: "B0912ZCDXX",
    main_category: "Apparel & Accessories",
    title: "Men's Heritage Trucker Denim Jacket",
    average_rating: 4.6,
    rating_number: 1120,
    features: [
      "Crafted from premium 13.5 oz heavy raw cotton selvage denim",
      "Traditional button closure, dual flap chest pockets, and button waist adjusters",
      "Contrast gold stitching and branded heavy copper metal shank buttons",
      "Gets better with age, fading and softening customized to your body movements"
    ],
    description: [
      "The quintessential layering piece. Our heritage denim trucker jacket is spun from durable raw ringspun cotton, offering a structured, high-character armor that wears in, not out.",
      "Throw it over a crisp white tee and chinos for an instant classic casual outfit, or layer it under a heavy wool overcoat for complex smart-casual autumn style."
    ],
    price: 59.50,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Isla & Coast",
    categories: ["Men's Fashion", "Jackets", "Denim Jackets", "Casual Weekend"],
    details: {
      Material: "100% Selvedge Cotton Denim",
      Brand: "Isla & Coast",
      Fit: "Standard trucker fit, sits at hip",
      Care: "Wash sparingly inside out in cold water, hang dry to preserve fade",
      Style: "Classic Heritage Trucker",
      Season: "Spring/Autumn"
    },
    bought_together: ["B09X987H62", "B0922883XY"]
  },
  {
    parent_asin: "B0922883XY",
    main_category: "Shoes",
    title: "Minimalist Full-Grain Leather White Sneakers",
    average_rating: 4.7,
    rating_number: 1540,
    features: [
      "Hand-finished outer made from ultra-soft full-grain calfskin leather",
      "Low-profile stitched Margom rubber cupsole for unparalleled longevity",
      "Ultra-plush calfskin lining and fully cushioned removable leather insole",
      "Elegant minimalist branding - entirely clean, unadorned white surface"
    ],
    description: [
      "The smart shoe that replaced the dress shoe. Our minimalist white leather sneakers are carefully hand-stitched to offer a clean silhouette that matches both casual wear and sharp suits.",
      "The full-grain leather outer is buttery soft and breathes easily, keeping feet fresh while resisting stains and wiping clean with ease."
    ],
    price: 95.00,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Aurelio Footwear",
    categories: ["Shoes", "Sneakers", "Leather Sneakers", "Casual Weekend"],
    details: {
      Material: "Full-Grain Calfskin Leather, Margom Rubber Sole",
      Brand: "Aurelio Footwear",
      Fit: "True to size (Only available in full sizes)",
      Care: "Clean with leather damp cloth, use shoe trees to keep shape",
      Style: "Minimalist Low Top",
      Season: "Year-round"
    },
    bought_together: ["B0912ZCDXX", "B09X987H62"]
  },
  {
    parent_asin: "B09Z9K987P",
    main_category: "Apparel & Accessories",
    title: "Men's Heavyweight French Terry Casual Hoodie",
    average_rating: 4.5,
    rating_number: 1109,
    features: [
      "Spun from ultra-dense 450 GSM pure French Terry cotton",
      "Double-lined stiff hood that stands upright on shoulders perfectly",
      "Reinforced heavy spandex-rib cuffs and double-stitch kangaroo pocket",
      "Brushed interior loops provide extraordinary warmth and ultimate cozy feel"
    ],
    description: [
      "Your new favorite hoodie. Engineered from incredibly heavy, ringspun cotton loops, this sweatshirt provides a heavy, comforting embrace. The loopback French Terry weave offers breathability while blocking drafts.",
      "The structured hood sits high and keeps its shape, while the tailored body prevents looking baggy, giving it a neat, high-quality look for lounging or traveling."
    ],
    price: 54.00,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&auto=format&fit=crop"
      }
    ],
    store: "Isla & Coast",
    categories: ["Men's Fashion", "Hoodies", "Cotton Sweaters", "Casual Weekend"],
    details: {
      Material: "100% Ring-Spun Cotton French Terry",
      Brand: "Isla & Coast",
      Fit: "Tailored athletic cut",
      Care: "Machine wash cold inside out, tumble dry low to avoid shrinkage",
      Style: "Premium Streetwear",
      Season: "Autumn/Winter/Spring"
    },
    bought_together: ["B0922883XY", "B09X987H62"]
  },
  {
    parent_asin: "B00YQ6X8EO",
    main_category: "All Beauty",
    title: "All-Natural Botanical Texturizing Hair Spray & Scent",
    average_rating: 5.0,
    rating_number: 142,
    features: [
      "Infused with organic lavender oil and rosemary extracts",
      "Creates subtle beachy textures and locks styling volume without stiffness",
      "All-natural ingredients free of parabens, phthalates, and yucky chemicals",
      "Delightful botanical scent that stays fresh throughout the day"
    ],
    description: [
      "A premium, all-natural spray designed to provide beautiful, bouncy hair textures while infusing locks with a delicate, enchanting scent.",
      "Engineered with nourishing essential oils to maintain a lightweight, touchable hold that looks effortless."
    ],
    price: 18.99,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=150&auto=format&fit=crop",
        large: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&auto=format&fit=crop",
        hi_res: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=1200&auto=format&fit=crop"
      }
    ],
    store: "AromaFlora Beauty",
    categories: ["Hair Care", "Styling Products", "Texture Sprays", "All Beauty"],
    details: {
      Brand: "AromaFlora",
      Type: "Hair Spray & Scent",
      Ingredients: "All-Natural Botanical Extracts",
      Size: "6 Fl Oz"
    },
    bought_together: ["B01CUPMQZE"]
  },
  {
    parent_asin: "B01CUPMQZE",
    main_category: "All Beauty",
    title: "Howard LC0008 Leather Conditioner, 8-Ounce (4-Pack)",
    average_rating: 4.8,
    rating_number: 10,
    features: [
      "Deeply penetrates leather pores to nourish, soften, and preserve durability",
      "Revitalizes dry, cracked, or dull looking vintage smooth leathers",
      "Ideal for leather boots, executive bags, luxury sandals, and saddlery",
      "Leaves a clean, non-greasy satin finish and a premium natural scent"
    ],
    description: [
      "Howard Leather Conditioner is formulated to penetrate deep into leather fibers to nourish and restore leather back to its natural beauty. Contains a unique blend of natural waxes and oils."
    ],
    price: 29.99,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=150",
        large: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
        hi_res: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200"
      }
    ],
    store: "Howard Products",
    categories: ["Leather Care", "Conditioners", "All Beauty"],
    details: {
      "Package Dimensions": "7.1 x 5.5 x 3 inches; 2.38 Pounds",
      "UPC": "617390882781",
      "Brand": "Howard Products"
    },
    bought_together: ["B00YQ6X8EO"]
  },
  {
    parent_asin: "B00140G8OC",
    main_category: "All Beauty",
    title: "Organic Moroccan Argan Oil Hair Serum",
    average_rating: 4.8,
    rating_number: 224,
    features: [
      "100% Pure Cold-Pressed Moroccan Argan Oil for intense silkiness",
      "Deep hydration that controls frizz, splitting ends, and coarse flyaways",
      "Extremely lightweight formula absorbs instantly without heavy greasy build",
      "Provides natural UV barrier protection and heat style defense"
    ],
    description: [
      "A high-potency, cold-pressed argan oil serum that locks moisture inside the hair follicle. Experience salon-grade touchable shine, health, and luxury protection."
    ],
    price: 15.50,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=150",
        large: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600",
        hi_res: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=1200"
      }
    ],
    store: "Moroccanoil Organics",
    categories: ["Hair Care", "Serums", "Argan Oil", "All Beauty"],
    details: {
      Brand: "Moroccanoil Organics",
      Ingredients: "100% Pure Organic Argan Oil",
      Origin: "Morocco",
      Volume: "3.4 Fl Oz"
    },
    bought_together: ["B00YQ6X8EO"]
  },
  {
    parent_asin: "B07Y5X8888",
    main_category: "All Beauty",
    title: "Luxury Rosewater Face Hydrating Spray",
    average_rating: 5.0,
    rating_number: 89,
    features: [
      "Distilled rose petals extract for instant soothing skin hydration",
      "Acts as a beautiful natural makeup setting spray and mid-day refresher",
      "Rich in natural anti-oxidants and balancing properties",
      "No alcohol or artificial fragrances - pure, clean, and refreshing"
    ],
    description: [
      "Pamper your skin with distilled rose petal extracts. This cooling facial mist immediately infuses moisture, balances skin pH, and refreshes styling and makeup layouts on the go."
    ],
    price: 12.00,
    images: [
      {
        variant: "MAIN",
        thumb: "https://images.unsplash.com/photo-1556229174-5e42a09e45af?w=150",
        large: "https://images.unsplash.com/photo-1556229174-5e42a09e45af?w=600",
        hi_res: "https://images.unsplash.com/photo-1556229174-5e42a09e45af?w=1200"
      }
    ],
    store: "AromaFlora Beauty",
    categories: ["Skin Care", "Facial Mists", "Rosewater", "All Beauty"],
    details: {
      Brand: "AromaFlora",
      Volume: "4 Fl Oz",
      SkinType: "All, Sensitive",
      Form: "Hydrating Mist"
    },
    bought_together: ["B00YQ6X8EO"]
  }
];
