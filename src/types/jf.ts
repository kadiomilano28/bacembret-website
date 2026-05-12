export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface BowlSlide {
  title: string;
  image: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  className?: string;
}

export interface RestaurantInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  hours: { label: string; value: string }[];
  social: { instagram: string; facebook: string; tiktok: string };
  orderUrl: string;
}
