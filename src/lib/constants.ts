export interface SiteConfig {
  name: string;
  tagline?: string;
  description?: string;
  email: string;
  phone: string;
  phoneHref: string;
  address?: string;
  googleRating?: string | number;
  googleReviews?: string | number;
  logo?: string;
  ogImage?: string;
  social?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    pinterest?: string;
    etsy?: string;
    tripadvisor?: string;
    yelp?: string;
    houzz?: string;
    google?: string;
    github?: string;
    x?: string;
  };
  hours?: string;
  weekday?: string;
  weekend?: string;
  trustpilot?: string;
  storeAddress?: string;
  [key: string]: unknown;
}

export const siteConfig: SiteConfig = {
  name: "ForgeWorks MFG",
  tagline: "Precision Manufacturing Solutions",
  email: "info@forgeworks.com",
  phone: "+1 (775) 128-7550",
  phoneHref: "+17751287550",
  address: "500 Industrial Drive, Detroit, MI 48201",
  googleRating: "4.8",
  googleReviews: "200",
  social: {
    linkedin: "https://www.linkedin.com/company/magna-international/",
    twitter: "https://twitter.com/magnaint",
    facebook: "https://www.facebook.com/MagnaInternational",
    youtube: "https://www.youtube.com/user/MagnaInternationalTV",
  },
};

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Carbon Steel Plate", href: "/products/carbon-steel-plate" },
      { label: "Casting Parts", href: "/products/casting-parts" },
      { label: "DSA Pipe", href: "/products/dsaw-pipe" },
      { label: "Hot Rolled Coil", href: "/products/hot-rolled-coil" },
      { label: "Machining Parts", href: "/products/machining-parts" },
      { label: "Milling Parts", href: "/products/milling-parts" },
      { label: "Plastic Injection Parts", href: "/products/plastic-injection-parts" },
      { label: "Stainless", href: "/products/stainless" },
      { label: "Structural Steel", href: "/products/structural-steel" },
      { label: "Titanium", href: "/products/titanium" },
      { label: "Turned Parts", href: "/products/turned-parts" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Automotive", href: "/solutions/automotive" },
      { label: "Construction", href: "/solutions/construction" },
      { label: "Energy", href: "/solutions/energy" },
      { label: "Industrial", href: "/solutions/industrial" },
      { label: "Mining", href: "/solutions/mining" },
      { label: "Appliances", href: "/solutions/appliances" },
      { label: "Electrical", href: "/solutions/electrical" },
      { label: "Packaging", href: "/solutions/packaging" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Team", href: "/people" },
      { label: "Events", href: "/events" },
      { label: "Locations", href: "/locations" },
      { label: "Diversity & Inclusion", href: "/diversity-inclusion" },
      { label: "R&D Labs", href: "/rd-labs" },
      { label: "ISO Certification", href: "/iso-sertification" },
      { label: "Gallery", href: "/video-image-gallery" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const products = [
  {
    slug: "carbon-steel-plate",
    title: "Carbon Steel Plate",
    description: "ForgeWorks MFG provides precision CNC machining, steel fabrication, plastic injection molding, and custom manufacturing solutions for automotive, energy, and industrial clients worldwide.",
    image: "/uploads/carbon-steel-plate.jpg",
    features: [
      "High tensile strength and durability",
      "Available in various thicknesses and grades",
      "Excellent weldability and machinability",
      "Cost-effective for large-scale projects",
      "Meets ASTM and EN standards",
    ],
    specs: {
      grades: "A36, A572, A588, S275, S355",
      thickness: "3mm - 100mm",
      width: "1000mm - 3000mm",
      length: "6000mm - 12000mm",
    },
  },
  {
    slug: "casting-parts",
    title: "Casting Parts",
    description: "Precision cast components for various industries",
    image: "/uploads/casting-parts.jpg",
    features: [
      "Sand casting and investment casting capabilities",
      "Complex geometries with tight tolerances",
      "Wide range of alloys: steel, iron, aluminum",
      "Post-casting machining available",
      "ISO 9001 certified quality management",
    ],
    specs: {
      alloys: "Carbon Steel, Stainless Steel, Cast Iron, Aluminum",
      weight: "0.5kg - 5000kg",
      tolerance: "±0.5mm",
      finish: "As-cast, machined, painted",
    },
  },
  {
    slug: "dsaw-pipe",
    title: "DSA Pipe",
    description: "Double-submerged arc welded pipes for pipelines",
    image: "/uploads/dsaw-pipe.jpg",
    features: [
      "High-quality longitudinal seam welding",
      "Suitable for oil, gas, and water transmission",
      "Custom lengths and wall thicknesses",
      "Hydrostatic tested for integrity",
      "Coating and lining options available",
    ],
    specs: {
      diameter: "406mm - 3000mm",
      wallThickness: "6mm - 25mm",
      length: "6m - 12m",
      standard: "API 5L, ASTM A139, EN 10219",
    },
  },
  {
    slug: "hot-rolled-coil",
    title: "Hot Rolled Coil",
    description: "Hot-rolled steel coils for manufacturing",
    image: "/uploads/hot-rolled-coil.jpg",
    features: [
      "Excellent formability and weldability",
      "Consistent quality across large volumes",
      "Available in multiple grades and widths",
      "Ideal for automotive and construction",
      "Surface treatments available",
    ],
    specs: {
      grades: "Q235, Q345, SS400, A36",
      thickness: "1.2mm - 25.4mm",
      width: "600mm - 2000mm",
      coilWeight: "Up to 30 metric tons",
    },
  },
  {
    slug: "machining-parts",
    title: "Machining Parts",
    description: "CNC machined precision components",
    image: "/uploads/machining-parts.jpg",
    features: [
      "3, 4, and 5-axis CNC machining",
      "Tolerances down to ±0.01mm",
      "Prototype and production runs",
      "Wide range of materials supported",
      "Surface finishing options included",
    ],
    specs: {
      tolerances: "±0.01mm",
      materials: "Steel, Aluminum, Titanium, Brass, Plastics",
      maxDimensions: "1000mm x 800mm x 600mm",
      finishes: "Anodized, Powder Coated, Polished, Brushed",
    },
  },
  {
    slug: "milling-parts",
    title: "Milling Parts",
    description: "Milled steel parts for industrial use",
    image: "/uploads/milling-parts.jpg",
    features: [
      "CNC milling for complex 3D geometries",
      "High-speed machining for efficiency",
      "Suitable for prototypes and production",
      "Quality inspection at every stage",
      "Material traceability provided",
    ],
    specs: {
      tolerances: "±0.02mm",
      materials: "Carbon Steel, Stainless Steel, Aluminum Alloys",
      machiningCenter: "3-axis to 5-axis",
      volume: "Single piece to 10,000+ units",
    },
  },
  {
    slug: "plastic-injection-parts",
    title: "Plastic Injection Parts",
    description: "Injection-molded plastic components",
    image: "/uploads/plastic-injection-parts.jpg",
    features: [
      "Custom mold design and fabrication",
      "High-volume production capabilities",
      "Wide range of thermoplastic materials",
      "Tight tolerances for precision parts",
      "Secondary assembly services available",
    ],
    specs: {
      materials: "ABS, PC, PA, POM, PP, PE, PEEK",
      tolerances: "±0.05mm",
      maxShotWeight: "Up to 15000g",
      cavities: "Single to multi-cavity molds",
    },
  },
  {
    slug: "stainless",
    title: "Stainless Steel",
    description: "Stainless steel products for corrosion resistance",
    image: "/uploads/stainless.jpg",
    features: [
      "Excellent corrosion resistance",
      "Available in 304, 316, and duplex grades",
      "Sheet, plate, bar, and pipe forms",
      "Food-grade and medical-grade options",
      "Custom cutting and fabrication",
    ],
    specs: {
      grades: "304, 316, 316L, 2205, 2507",
      forms: "Sheet, Plate, Bar, Pipe, Fittings",
      finish: "2B, BA, No.4, Mirror, Hairline",
      thickness: "0.3mm - 50mm",
    },
  },
  {
    slug: "structural-steel",
    title: "Structural Steel",
    description: "Structural steel beams and columns",
    image: "/uploads/structural-steel.jpg",
    features: [
      "Wide range of I-beams, H-beams, and channels",
      "High load-bearing capacity",
      "Fire-resistant and corrosion-resistant options",
      "Precision cutting and drilling",
      "Compliance with international standards",
    ],
    specs: {
      profiles: "I-Beam, H-Beam, Channel, Angle, Tee",
      grades: "Q235, Q345, S235, S355",
      length: "6m - 12m (custom available)",
      standard: "GB/T 706, EN 10025, ASTM A36",
    },
  },
  {
    slug: "titanium",
    title: "Titanium",
    description: "High-performance titanium alloys",
    image: "/uploads/titanium.jpg",
    features: [
      "Superior strength-to-weight ratio",
      "Exceptional corrosion resistance",
      "Biocompatible grades for medical use",
      "High-temperature performance",
      "Aerospace-grade quality assurance",
    ],
    specs: {
      grades: "Ti-6Al-4V, Ti-5553, CP Grade 2",
      forms: "Bar, Plate, Sheet, Wire, Forging",
      purity: "99.5% - 99.95%",
      temperature: "Up to 600°C continuous",
    },
  },
  {
    slug: "turned-parts",
    title: "Turned Parts",
    description: "Precision turned components",
    image: "/uploads/turned-parts.jpg",
    features: [
      "CNC turning for cylindrical parts",
      "Swiss screw machining available",
      "Tight tolerances and fine surface finish",
      "Rapid prototyping and production",
      "Multi-axis capability for complex profiles",
    ],
    specs: {
      tolerances: "±0.005mm",
      maxDiameter: "Up to 200mm",
      maxLength: "Up to 500mm",
      materials: "Steel, Stainless, Aluminum, Brass, Titanium",
    },
  },
];

export const solutions = [
  {
    slug: "automotive",
    title: "Automotive",
    description: "Steel solutions for automotive manufacturing",
    image: "/uploads/solutions/automotive.jpg",
    industry: "Automotive",
  },
  {
    slug: "construction",
    title: "Construction",
    description: "Materials for construction projects",
    image: "/uploads/solutions/construction.jpg",
    industry: "Construction",
  },
  {
    slug: "energy",
    title: "Energy",
    description: "Steel for energy sector applications",
    image: "/uploads/solutions/energy.jpg",
    industry: "Energy",
  },
  {
    slug: "industrial",
    title: "Industrial",
    description: "Industrial manufacturing solutions",
    image: "/uploads/solutions/industrial.jpg",
    industry: "Industrial",
  },
  {
    slug: "mining",
    title: "Mining",
    description: "Mining equipment and materials",
    image: "/uploads/solutions/mining.jpg",
    industry: "Mining",
  },
  {
    slug: "appliances",
    title: "Appliances",
    description: "Steel for home appliances",
    image: "/uploads/solutions/appliances.jpg",
    industry: "Appliances",
  },
  {
    slug: "electrical",
    title: "Electrical",
    description: "Electrical infrastructure materials",
    image: "/uploads/solutions/electrical.jpg",
    industry: "Electrical",
  },
  {
    slug: "packaging",
    title: "Packaging",
    description: "Packaging industry solutions",
    image: "/uploads/solutions/packaging.jpg",
    industry: "Packaging",
  },
  {
    slug: "cnc-milling",
    title: "CNC Milling",
    description: "CNC milling services for precision parts",
    image: "/uploads/solutions/cnc-milling.jpg",
    industry: "Manufacturing",
  },
  {
    slug: "cnc-turning",
    title: "CNC Turning",
    description: "CNC turning services for cylindrical components",
    image: "/uploads/solutions/cnc-turning.jpg",
    industry: "Manufacturing",
  },
  {
    slug: "electrical-discharge",
    title: "Electrical Discharge",
    description: "EDM machining services for complex geometries",
    image: "/uploads/solutions/edm.jpg",
    industry: "Manufacturing",
  },
  {
    slug: "gear-hobbing",
    title: "Gear Hobbing",
    description: "Gear manufacturing services",
    image: "/uploads/solutions/gear-hobbing.jpg",
    industry: "Manufacturing",
  },
  {
    slug: "europe",
    title: "Europe",
    description: "European market solutions",
    image: "/uploads/solutions/europe.jpg",
    industry: "Regional",
  },
  {
    slug: "service-centers",
    title: "Service Centers",
    description: "Distribution network",
    image: "/uploads/solutions/service-centers.jpg",
    industry: "Distribution",
  },
  {
    slug: "sustainable-steel",
    title: "Sustainable Steel",
    description: "Eco-friendly steel products",
    image: "/uploads/solutions/sustainable.jpg",
    industry: "Sustainability",
  },
];

export const blogPosts = [
  {
    slug: "2022-state-of-manufacturing-report",
    title: "2022 State of Manufacturing Report",
    date: "2023-03-15",
    category: "Industry Report",
    excerpt: "An in-depth analysis of the manufacturing sector's performance, emerging trends, and future outlook for the coming years.",
    image: "/uploads/blog/manufacturing-report.jpg",
    content: `The manufacturing sector has undergone significant transformation in recent years. This report examines key trends that are reshaping the industry and provides actionable insights for manufacturers looking to stay competitive.

Digital transformation continues to be a driving force. Companies investing in automation, IoT sensors, and data analytics are seeing measurable improvements in productivity and quality. The adoption of Industry 4.0 technologies has accelerated, with smart factories becoming the new standard.

Supply chain resilience has emerged as a top priority. The disruptions experienced in recent years have highlighted the need for diversified sourcing, regional manufacturing capabilities, and robust inventory management strategies.

Sustainability is no longer optional. Customers and regulators alike are demanding environmentally responsible manufacturing practices. Companies that invest in sustainable processes are finding new market opportunities and improved brand reputation.

The skilled labor shortage remains a challenge. Manufacturers are investing in training programs, apprenticeships, and automation to address the growing gap between available workers and the skills needed in modern manufacturing.`,
  },
  {
    slug: "cnc-machine-coolant-purpose-types-and-management",
    title: "CNC Machine Coolant: Purpose, Types, and Management",
    date: "2023-06-20",
    category: "Technical Guide",
    excerpt: "Understanding the critical role of coolant in CNC machining operations and how proper management extends tool life.",
    image: "/uploads/blog/cnc-coolant.jpg",
    content: `Coolant plays a vital role in CNC machining operations, serving multiple purposes beyond simple temperature control. Understanding the different types of coolants and proper management practices is essential for optimal machining performance.

The primary functions of CNC coolant include heat dissipation, chip evacuation, lubrication, and surface finish improvement. Without proper coolant management, tools wear faster, surface quality deteriorates, and machining costs increase.

Common coolant types include water-soluble oils, semi-synthetic fluids, and synthetic fluids. Each type offers different advantages in terms of cooling capacity, lubrication properties, and maintenance requirements.

Best practices for coolant management include regular concentration testing, pH monitoring, contamination control, and scheduled filtration. These practices extend coolant life and maintain consistent machining quality.`,
  },
  {
    slug: "forgeworks-manufacturing-promotes-agile-manufacturing",
    title: "ForgeWorks MFG Promotes Agile Manufacturing",
    date: "2023-09-10",
    category: "Company News",
    excerpt: "Fabrik announces new agile manufacturing initiatives to improve responsiveness and reduce lead times.",
    image: "/uploads/blog/agile-manufacturing.jpg",
    content: `ForgeWorks MFG is proud to announce a series of agile manufacturing initiatives designed to improve our responsiveness to customer needs and reduce overall lead times.

The new approach involves flexible production cells, cross-trained operators, and real-time production monitoring systems. These investments enable us to adapt quickly to changing customer requirements without sacrificing quality.

Key improvements include a 30% reduction in setup times, improved changeover procedures, and enhanced communication between engineering and production teams.

These initiatives reflect our commitment to continuous improvement and our dedication to delivering the best possible solutions for our customers in an increasingly dynamic market.`,
  },
  {
    slug: "2023-sustainability-report",
    title: "2023 Sustainability Report",
    date: "2024-02-28",
    category: "Sustainability",
    excerpt: "Our commitment to sustainable manufacturing practices and environmental stewardship.",
    image: "/uploads/blog/sustainability.jpg",
    content: `Fabrik's 2023 Sustainability Report highlights our progress toward environmental goals and our ongoing commitment to responsible manufacturing practices.

This year, we achieved a 15% reduction in energy consumption per unit of production, exceeded our recycling targets, and invested in renewable energy sources for our operations.

Key achievements include the installation of solar panels at our Detroit facility, implementation of closed-loop water recycling systems, and the introduction of electric vehicle charging stations for employees.

Looking ahead, we remain committed to achieving carbon neutrality by 2030 and continuing to lead the industry in sustainable manufacturing practices.`,
  },
  {
    slug: "forgeworks-closes-on-240-million-financing-to-support-big-river-2",
    title: "Fabrik Closes on $240 Million Financing to Support Big River 2",
    date: "2023-11-05",
    category: "Investment",
    excerpt: "Fabrik secures $240 million in financing to expand steel production capacity at the Big River Steel 2 facility.",
    image: "/uploads/blog/financing.jpg",
    content: `ForgeWorks MFG has successfully closed on $240 million in financing to support the expansion of our Big River Steel 2 facility in Osceola, Arkansas.

The financing will fund the construction of a state-of-the-art electric arc furnace steelmaking facility, further increasing our capacity to serve automotive, construction, and energy customers.

This investment represents a significant milestone in our growth strategy and demonstrates the confidence of our financial partners in Fabrik's long-term vision.

The expanded facility is expected to create over 500 new jobs and significantly increase production capacity for advanced high-strength steel products.`,
  },
  {
    slug: "market-conditions-value-over-volume-and-sustainability",
    title: "Market Conditions: Value Over Volume and Sustainability",
    date: "2024-01-18",
    category: "Market Analysis",
    excerpt: "How shifting market conditions are pushing the industry toward value-added products and sustainable practices.",
    image: "/uploads/blog/market-conditions.jpg",
    content: `The steel industry is experiencing a fundamental shift from volume-based to value-based production models. This transformation is driven by changing customer demands, environmental regulations, and market dynamics.

Companies that focus on high-value, specialized products are finding greater success than those competing primarily on price. This shift requires investment in technology, talent, and customer relationships.

Sustainability has become a key differentiator. Customers are increasingly willing to pay premium prices for products with lower carbon footprints and verified sustainability credentials.

Fabrik is well-positioned to capitalize on these trends through our investments in advanced manufacturing technologies and our commitment to sustainable operations.`,
  },
  {
    slug: "what-greenbiz-2023-tells-us-about-the-future-of-sustainability",
    title: "What GreenBiz 2023 Tells Us About the Future of Sustainability",
    date: "2024-03-22",
    category: "Sustainability",
    excerpt: "Key takeaways from the GreenBiz 2023 conference on corporate sustainability trends and opportunities.",
    image: "/uploads/blog/greenbiz.jpg",
    content: `The GreenBiz 2023 conference brought together industry leaders to discuss the future of corporate sustainability. Several key themes emerged that are particularly relevant for the manufacturing sector.

Scope 3 emissions reporting is becoming the new standard. Companies must work with their supply chain partners to measure and reduce indirect emissions.

Green hydrogen is gaining traction as a potential game-changer for steel manufacturing. While still in early stages, several pilot projects demonstrated the viability of hydrogen-based direct reduced iron processes.

Circular economy principles are being integrated into product design and manufacturing processes. Companies are finding new revenue streams by recovering and recycling materials from end-of-life products.`,
  },
  {
    slug: "advanced-high-strength-steel-automotive-applications",
    title: "Advanced High-Strength Steel in Automotive Applications",
    date: "2024-04-15",
    category: "Technical Guide",
    excerpt: "How advanced high-strength steel is revolutionizing vehicle safety, fuel efficiency, and performance.",
    image: "/uploads/blog/ahss.jpg",
    content: `Advanced High-Strength Steel (AHSS) is transforming automotive design by enabling lighter vehicles without compromising safety. This technology is critical for meeting increasingly stringent fuel economy standards.

AHSS grades offer tensile strengths up to 1500 MPa, allowing manufacturers to reduce component thickness while maintaining or improving crash performance. This weight reduction directly translates to improved fuel efficiency and reduced emissions.

Key applications include B-pillars, roof rails, bumper beams, and underbody structures. These components benefit from AHSS's unique combination of strength, ductility, and energy absorption characteristics.

Fabrik's AHSS products meet the demanding requirements of major automotive OEMs and are supplied with full material traceability and certification.`,
  },
];

export const testimonials = [
  {
    name: "ForgeWorks MFG",
    role: "VP of Operations, AutoTech Industries",
    text: "Fabrik has been our primary steel supplier for over 5 years. Their consistency in quality and reliability in delivery has been instrumental to our production success.",
    avatar: "/uploads/testimonials/michael-chen.jpg",
  },
  {
    name: "ForgeWorks MFG",
    role: "Procurement Director, BuildRight Construction",
    text: "The structural steel from Fabrik is exceptional. Their technical support team helped us optimize our design, resulting in significant cost savings on our latest project.",
    avatar: "/uploads/testimonials/sarah-johnson.jpg",
  },
  {
    name: "ForgeWorks MFG",
    role: "Engineering Manager, PowerGrid Solutions",
    text: "We switched to Fabrik for our energy sector components and haven't looked back. Their DSAW pipes consistently meet our exacting standards for quality and performance.",
    avatar: "/uploads/testimonials/david-rodriguez.jpg",
  },
  {
    name: "ForgeWorks MFG",
    role: "CFO, PrecisionParts Manufacturing",
    text: "Fabrik's CNC machining capabilities are top-notch. They deliver precision components on time and within budget, every single time.",
    avatar: "/uploads/testimonials/lisa-wang.jpg",
  },
];

export const teamMembers = [
  {
    name: "ForgeWorks MFG",
    role: "Chief Executive Officer",
    image: "/uploads/team/robert-anderson.jpg",
    bio: "Robert brings over 25 years of manufacturing leadership experience to Fabrik, driving innovation and operational excellence.",
  },
  {
    name: "ForgeWorks MFG",
    role: "Chief Operating Officer",
    image: "/uploads/team/jennifer-martinez.jpg",
    bio: "Jennifer oversees all manufacturing operations, ensuring consistent quality and efficient production across all facilities.",
  },
  {
    name: "ForgeWorks MFG",
    role: "Chief Technology Officer",
    image: "/uploads/team/thomas-kim.jpg",
    bio: "Thomas leads Fabrik's technology initiatives, including Industry 4.0 implementation and advanced manufacturing research.",
  },
  {
    name: "ForgeWorks MFG",
    role: "VP of Sales & Marketing",
    image: "/uploads/team/amanda-foster.jpg",
    bio: "Amanda drives Fabrik's growth strategy, building relationships with key customers across automotive, construction, and energy sectors.",
  },
  {
    name: "ForgeWorks MFG",
    role: "VP of Quality Assurance",
    image: "/uploads/team/james-wilson.jpg",
    bio: "James ensures that every product leaving our facilities meets the highest standards of quality and customer satisfaction.",
  },
  {
    name: "ForgeWorks MFG",
    role: "VP of Human Resources",
    image: "/uploads/team/patricia-brown.jpg",
    bio: "Patricia leads our talent development programs, fostering a culture of innovation and continuous improvement.",
  },
];

export const officeLocations = [
  {
    name: "ForgeWorks MFG",
    address: "500 Industrial Drive, Detroit, MI 48201",
    phone: "+1 (775) 128-7550",
    type: "Headquarters",
  },
  {
    name: "ForgeWorks MFG",
    address: "1200 Manufacturing Blvd, Chicago, IL 60601",
    phone: "+1 (312) 555-0180",
    type: "Regional Office",
  },
  {
    name: "ForgeWorks MFG",
    address: "8500 Energy Park Drive, Houston, TX 77002",
    phone: "+1 (713) 555-0290",
    type: "Regional Office",
  },
  {
    name: "ForgeWorks MFG",
    address: "400 Steel Avenue, Pittsburgh, PA 15201",
    phone: "+1 (412) 555-0340",
    type: "Manufacturing Facility",
  },
];

export const events = [
  {
    title: "International Manufacturing Expo 2024",
    date: "2024-06-15",
    location: "Chicago, IL",
    description: "Join us at IME 2024 where we'll showcase our latest manufacturing innovations and sustainable steel solutions.",
  },
  {
    title: "Steel Industry Summit",
    date: "2024-09-20",
    location: "Detroit, MI",
    description: "Fabrik hosts the annual Steel Industry Summit, bringing together leaders from across the manufacturing sector.",
  },
  {
    title: "Sustainability in Manufacturing Conference",
    date: "2024-11-08",
    location: "Houston, TX",
    description: "Learn about Fabrik's sustainability initiatives and green manufacturing technologies.",
  },
];

export const certifications = [
  {
    name: "ForgeWorks MFG",
    description: "Quality Management System certification ensuring consistent quality in all processes.",
  },
  {
    name: "ForgeWorks MFG",
    description: "Environmental Management System certification demonstrating our commitment to sustainability.",
  },
  {
    name: "ForgeWorks MFG",
    description: "Automotive Quality Management System standard for defect prevention and continuous improvement.",
  },
  {
    name: "ForgeWorks MFG",
    description: "Occupational Health and Safety Management System certification for worker safety.",
  },
];
