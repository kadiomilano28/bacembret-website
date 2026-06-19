export interface MenuItem {
  name: string;
  price: string;
  tag?: string | null;
  image?: string;
  description?: string;
  notes?: string[];
}

export interface MenuCategory {
  slug: string;
  label: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    slug: "start",
    label: "start",
    items: [
      { name: "Bukë misri me ajkë speci", price: "250L", image: "/images/menu/buke-misri-ajke-speci.png" },
      { name: "Fokaçe", price: "200L", image: "/images/menu/fokace.png" },
      { name: "Brusket (domate + djath)", price: "250L", image: "/images/menu/brusket.png" },
      { name: "Brusket me fokaçe", price: "300L", image: "/images/menu/bruskete-fokace.png" },
      { name: "Patëllxhan i tymosur", price: "300L" },
      { name: "Salcë kosi", price: "250L", image: "/images/menu/salce-kosi.png" },
      { name: "Salcë djath pikant", price: "250L", image: "/images/menu/salce-djathi-pikant.png" },
      { name: "Gjizë me pesto", price: "250L", image: "/images/menu/gjize-pesto.png" },
      { name: "Miks salcash", price: "400L", image: "/images/menu/miks-salcash.png" },
      { name: "Djath i bardhë", price: "200L", image: "/images/menu/djathe-i-bardhe.png" },
      { name: "Djath kaçkavall", price: "250L" },
      { name: "Djath furre i bardhë", price: "300L" },
      { name: "Djath furre kaçkavall", price: "350L", image: "/images/menu/djathe-kackavall-furre-2.png" },
      { name: "Djathë i bardhë me susam dhe mjaltë", price: "350L", image: "/images/menu/djathe-bardhe-susam-mjalte.png" },
      { name: "Spec me ajkë", price: "200L" },
    ],
  },
  {
    slug: "supat",
    label: "supat",
    items: [
      { name: "Supë brokoli", price: "300L", image: "/images/menu/supe-brokoli.png" },
      { name: "Supë perimesh", price: "300L", image: "/images/menu/supe-perime.png" },
      { name: "Supë pule", price: "300L", image: "/images/menu/supe-pule.png" },
    ],
  },
  {
    slug: "sallata",
    label: "sallata",
    items: [
      { name: "Turshi mix", price: "200L", image: "/images/menu/turshi-mix.png" },
      { name: "Sallatë jeshile", price: "250L", image: "/images/menu/sallate-jeshile.png" },
      { name: "Sallatë ulliri", price: "250L", image: "/images/menu/sallate-ulliri.png" },
      { name: "Sallatë fshati", price: "300L", image: "/images/menu/sallate-fshati.png" },
      { name: "Sallatë greke", price: "350L", image: "/images/menu/sallate-greke.png" },
      { name: "Sallatë mikse", price: "400L", image: "/images/menu/sallate-mikse.png" },
      { name: "Sallatë çezar", price: "400L", image: "/images/menu/sallate-cezar.png" },
      { name: "Sallatë baçe mbret", price: "400L", image: "/images/menu/sallate-bace-mbret.png" },
      { name: "Sallata e shefit", price: "550L", image: "/images/menu/sallata-shefit.png" },
    ],
  },
  {
    slug: "mishrat",
    label: "mishrat",
    items: [
      { name: "Mish qengji/keçi 1Kg (helli)", price: "3000L", image: "/images/menu/mish-qengji-1kg.png" },
      { name: "Kofshë/Shpatull qengji 1Kg (furre)", price: "3000L", image: "/images/menu/mish-qingji-furre.png" },
      { name: "Mish keçi/qengji (helli)", price: "1200L", image: "/images/menu/mish-qingji-helli.png" },
      { name: "Paidhaqe qengji", price: "1200L", image: "/images/menu/paidhaqe-qingji.png" },
      { name: "Paidhaqe gici", price: "900L", image: "/images/menu/paidhaqe-gici.png" },
      { name: "Bërxolla gici", price: "900L", image: "/images/menu/berxolle-gici.png" },
      { name: "Bërxolla viçi", price: "1200L", image: "/images/menu/berxolle-vici.png" },
      { name: "Biftek zgare", price: "1200L", image: "/images/menu/biftek-zgare.png" },
      { name: "Fileto pule", price: "900L", image: "/images/menu/fileto-pule.png" },
      { name: "Fileto viçi në zgarë me perime", price: "1500L", image: "/images/menu/fileto-vici-perime-zgare.png" },
      { name: "Kalastre me pilaf / përshesh", price: "2500L", image: "/images/menu/kalastre-pilaf.png" },
      { name: "Të brendshme zgare", price: "950L", image: "/images/menu/te-brendshme-zgare.png" },
      { name: "Të brendshme tigani", price: "950L", image: "/images/menu/te-brendshme-qengji-tigan.png" },
    ],
  },
  {
    slug: "garnier",
    label: "garnier",
    items: [
      { name: "Patate të skuqura", price: "250L", image: "/images/menu/patate.png" },
      { name: "Qofte me mish viçi (4 copë)", price: "500L", image: "/images/menu/qofte-shtepie.png" },
      { name: "Qofte perimesh (4 copë)", price: "400L", image: "/images/menu/qofte-perime.png" },
      { name: "Perime zgare", price: "300L", image: "/images/menu/perime-zgare.png" },
      { name: "Qofte tradicionale", price: "400L", image: "/images/menu/qofte-shtepie.png" },
    ],
  },
  {
    slug: "tavat-furres",
    label: "tavat e furrës",
    items: [
      { name: "Fërgesë Elbasani", price: "400L", image: "/images/menu/fergese-elbasani.png" },
      { name: "Tavë baçe mbret", price: "600L", image: "/images/menu/tave-bace-mbret.png" },
      { name: "Qofte tradicionale me salcën e shefit", price: "450L", image: "/images/menu/qofte-salce-shefit.png" },
      { name: "Kërbudhë e mbushur", price: "550L", image: "/images/menu/kerpudha-mbushura.png" },
      { name: "Petull e fshirë e Korçës me djath / arra", price: "550/600L", image: "/images/menu/petull-e-fshire.png" },
      { name: "Fileto pule me kërpudhë të freskët", price: "500L", image: "/images/menu/fileto-pule-kerpudhe.png" },
    ],
  },
  {
    slug: "mishrat-salce",
    label: "mishrat me salcë",
    items: [
      { name: "Biftek me tartuf", price: "1400L", image: "/images/menu/biftek-me-tartuf.png" },
      { name: "Biftek viçi me salcë portokalli + rozmarinë", price: "1300L", image: "/images/menu/biftek-salce-portokalli-rozmarine.png" },
      { name: "Biftek viçi me shtresë pureje", price: "1400L", image: "/images/menu/biftek-vici-shtrese-pureje.png" },
      { name: "Fileto viçi me salcë demi klas", price: "1500L", image: "/images/menu/fileto-vici-demi-glace.png" },
      { name: "Fileto pule me salcë agrumesh", price: "1100L", image: "/images/menu/fileto-pule-salce-agrumesh.png" },
    ],
  },
  {
    slug: "embelsira",
    label: "ëmbëlsira",
    items: [
      { name: "Trileçe", price: "350L", image: "/images/menu/trilece.png" },
      { name: "Qumështor Elbasani", price: "300L", image: "/images/menu/qumeshtor-elbasani.png" },
      { name: "Paçavure Korçe", price: "350L", image: "/images/menu/pacavure-korce.png" },
      { name: "Tortë me çokollatë", price: "400L", image: "/images/menu/torte-me-cokollate.png" },
    ],
  },
];
