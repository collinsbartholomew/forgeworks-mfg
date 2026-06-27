export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isAnchor?: boolean;
}

export interface Product {
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Solution {
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
  email: string;
}

export interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface Certification {
  name: string;
  description: string;
  image: string;
}
