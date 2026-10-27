export interface Product {
  id: number;
  name: string;
  category: 'hoodies' | 'pants' | 't-shirts' | 'tanks' | 'knitwear';
  section: 'new-arrivals' | 'trending' | 'essentials';
  price: number;
  currency: string;
  imageUrl: string;
  description: string;
  details: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
}

export const STATIC_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Oversized Heavyweight Hoodie',
    category: 'hoodies',
    section: 'new-arrivals',
    price: 120,
    currency: '$',
    imageUrl: '/hoodie.jpg',
    description: 'Crafted from custom-milled 480 GSM French Terry organic cotton. Features architectural dropped shoulders, double-layered hood without drawstrings for a sleek silhouette, and heavyweight ribbed trims.',
    details: [
      '100% Organic Heavyweight Cotton (480 GSM)',
      'Pre-shrunk treatment to maintain fit',
      'Clean unbranded aesthetic with interior wash tag only',
      'Double-needle reinforced seam stitching',
      'Handcrafted in Portugal'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Onyx Black', 'Chalk White'],
    inStock: true
  },
  {
    id: 2,
    name: 'Wide-Leg Minimal Cargo Trousers',
    category: 'pants',
    section: 'trending',
    price: 145,
    currency: '$',
    imageUrl: '/pants.jpg',
    description: 'A contemporary take on utilitarian trousers. Engineered with a wide-leg relaxed drape, hidden side welt pockets, subtle darting at the knee, and internal hem toggles for customizable stacking.',
    details: [
      'Structured technical cotton-twill blend',
      'Deep concealed side cargo pockets',
      'Elasticated waistband with interior drawstring',
      'Straight leg cut with modular hem cords',
      'Dry clean or cold machine wash'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Washed Black', 'Stone Gray'],
    inStock: true
  },
  {
    id: 3,
    name: 'Ribbed Minimalist Tank Top',
    category: 'tanks',
    section: 'essentials',
    price: 45,
    currency: '$',
    imageUrl: '/singlet.jpg',
    description: 'An elevated daily staple. Spun from ultra-soft 2x1 stretch ribbed Peruvian Pima cotton. Cut high on the chest with relaxed armholes designed for effortless layering or warm-weather ease.',
    details: [
      '95% Organic Peruvian Pima Cotton, 5% Elastane',
      'Heavyweight 2x1 rib knit structure',
      'Bound neckline and armholes for shape retention',
      'Tailored close-to-body fit',
      'Ethically produced in Lima'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Pure White', 'Pitch Black'],
    inStock: true
  },
  {
    id: 4,
    name: 'Boxy Fit Heavyweight T-Shirt',
    category: 't-shirts',
    section: 'new-arrivals',
    price: 60,
    currency: '$',
    imageUrl: '/tshirt.jpg',
    description: 'The foundation of the monochrome wardrobe. Built from 280 GSM combed cotton jersey with a tight 1.25" ribbed collar, dropped sleeves, and a structured square silhouette that retains its shape wash after wash.',
    details: [
      '100% Combed Compact Cotton (280 GSM)',
      'Thick reinforced 1.25-inch crewneck collar',
      'Relaxed boxy cut with zero torso cling',
      'Garment dyed for rich matte color depth',
      'Made in Los Angeles'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Deep Black', 'Washed Bone'],
    inStock: true
  },
  {
    id: 5,
    name: 'Structured Zip-Up Track Jacket',
    category: 'hoodies',
    section: 'trending',
    price: 165,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80',
    description: 'Minimalist high-neck outer layer constructed with a water-repellent matte shell. Features matte black two-way YKK hardware, concealed zippered hip pockets, and clean ergonomic sleeve darting.',
    details: [
      'Matte poly-nylon blend with DWR finish',
      'Two-way inverted YKK coil zipper',
      'Stand-up architectural collar',
      'Breathable interior mesh lining',
      'Designed for transitional weather'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Matte Black'],
    inStock: true
  },
  {
    id: 6,
    name: 'Pleated Relaxed Tailored Trousers',
    category: 'pants',
    section: 'essentials',
    price: 150,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80',
    description: 'Blurring the line between formal tailoring and streetwear comfort. Features double reverse front pleats, an easy relaxed thigh with a gentle taper, and split-waistband construction.',
    details: [
      '65% Recycled Polyester, 35% Viscose twill',
      'Fluid drape that resists wrinkling',
      'Internal hook-and-bar closure with zipper fly',
      'Dual rear jetted welt pockets',
      'Professional dry clean recommended'
    ],
    sizes: ['30', '32', '34', '36'],
    colors: ['Midnight Black', 'Slate Grey'],
    inStock: true
  },
  {
    id: 7,
    name: 'Architectural Drop-Shoulder Tee',
    category: 't-shirts',
    section: 'essentials',
    price: 70,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
    description: 'An elongated silhouette designed with extended sleeve cuffs and an exaggerated shoulder drape. Perfect for clean monochrome layering under coats or worn standalone.',
    details: [
      '100% Ring-Spun Cotton (260 GSM)',
      'Blind stitch sleeve and waist hem',
      'Enzyme-washed for a smooth hand-feel',
      'Relaxed architectural fit'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Chalk'],
    inStock: true
  },
  {
    id: 8,
    name: 'Textured Mock-Neck Wool Knit',
    category: 'knitwear',
    section: 'new-arrivals',
    price: 180,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=1000&q=80',
    description: 'Spun from sustainably sourced extra-fine merino wool. Designed with a micro-ribbed mock collar, heavy fisherman knit texture, and a comfortable relaxed drape.',
    details: [
      '100% Extra-Fine Merino Wool',
      'Thermal insulating yet breathable',
      'Seamless tubular knit construction',
      'Naturally odor and crease resistant'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal Black', 'Heather Grey'],
    inStock: true
  }
];
