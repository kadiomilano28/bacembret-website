import type { BowlSlide, GalleryItem, NavLink, RestaurantInfo } from "@/types/jf";

export const NAV_LEFT: NavLink[] = [
  { label: "MENU", href: "/menu" },
  { label: "RRETH NESH", href: "/about" },
];

export const NAV_RIGHT: NavLink[] = [
  { label: "KONTAKT", href: "/contact" },
];

export const RESTAURANT: RestaurantInfo = {
  name: "baçe mbret",
  phone: "+355 69 991 0238",
  email: "mirë@bacembret.al",
  address: "rruga elbasan — librazhd",
  city: "xibrakë, elbasan",
  hours: [{ label: "monday — sunday", value: "10:28 — 22:00" }],
  social: {
    instagram: "https://www.instagram.com/bacembret_restorant",
    facebook: "https://www.facebook.com/restorantbacembret",
    tiktok: "https://www.tiktok.com/@bacembret.restorant",
  },
  orderUrl:
    "https://www.grubhub.com/restaurant/just-falafel-vegan-cafe-2111-west-loop-south-houston/9333792",
};

export const BOWL_SLIDES: BowlSlide[] = [
  { title: "Biftek me salcë portokalli", image: "/images/menu/biftek-salce-portokalli-rozmarine.png" },
  { title: "Djath furre kaçkavall", image: "/images/menu/djathe-kackavall-furre.png" },
  { title: "Mish qengji/keçi 1Kg (helli)", image: "/images/menu/mish-qengji-1kg.png" },
  { title: "Petull e fshirë", image: "/images/menu/petull-e-fshire.png" },
  { title: "Tortë me çokollatë", image: "/images/menu/torte-me-cokollate.png" },
];

export const GALLERY_TOP: GalleryItem[] = [
  {
    src: "/images/2024/10/f1.jpg",
    alt: "vibrant pita wrap",
    className: "rounded-t-[120px] md:rounded-t-[182px] rounded-br-[120px] md:rounded-br-[182px]",
  },
  {
    src: "/images/2024/10/f2.jpg",
    alt: "loaded falafel platter",
    className: "rounded-[20px]",
  },
  {
    src: "/images/2024/10/f3-1.jpg",
    alt: "feature dish closeup",
    className: "rounded-[20px]",
  },
  {
    src: "/images/2024/10/f4-1.jpg",
    alt: "tall mezza tower",
    className: "rounded-b-[280px] md:rounded-b-[480px] rounded-tl-[280px] md:rounded-tl-[480px]",
  },
];

export const GALLERY_MIDDLE: GalleryItem[] = [
  {
    src: "/images/2024/10/f5.jpg",
    alt: "wide tablescape",
    className: "rounded-3xl",
  },
  {
    src: "/images/2024/10/f6.jpg",
    alt: "falafel close-up portrait",
    className: "rounded-[30rem]",
  },
  {
    src: "/images/2024/10/f7-1.jpg",
    alt: "gyro plate",
    className: "rounded-[60px]",
  },
];

export const GALLERY_BOTTOM: GalleryItem[] = [
  {
    src: "/images/2024/10/f9.jpg",
    alt: "falafel detail",
    className: "rounded-[40px]",
  },
  {
    src: "/images/2024/10/f8.jpg",
    alt: "wide platter",
    className: "rounded-[40px]",
  },
  {
    src: "/images/2024/10/f10.jpg",
    alt: "round bowl shot",
    className: "rounded-full",
  },
  {
    src: "/images/2024/10/f-12.jpg",
    alt: "saucy plate",
    className: "rounded-3xl",
  },
  {
    src: "/images/2024/10/f13.jpg",
    alt: "menu item duo",
    className: "rounded-[60px]",
  },
  {
    src: "/images/2024/10/f14.jpg",
    alt: "stuffed pita",
    className: "rounded-[40px]",
  },
];
