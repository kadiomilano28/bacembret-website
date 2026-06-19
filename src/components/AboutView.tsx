import Image from "next/image";
import Link from "next/link";

interface Review {
  name: string;
  rating: number;
  text: string;
  date?: string;
}

const REVIEWS: Review[] = [
  {
    name: "Pamela Pasmaqi",
    rating: 5,
    date: "9 muaj më parë",
    text:
      "Vend i përkryer për të shijuar kuzhinën shqiptare nga klasiket tradicionale deri tek interpretimet moderne. Stafi është tepër i sjellshëm — e përshtati porosinë tonë pikërisht ashtu siç e donim dhe dëgjuan çdo dëshirë. Mbi të gjitha, je i rrethuar nga natyra e pastër, mes maleve, me një nga pamjet më të bukura që mund të kërkosh. Vërtet një përvojë e veçantë!",
  },
  {
    name: "Jutta",
    rating: 5,
    date: "9 muaj më parë",
    text:
      "E adhuruam totalisht këtë vend! Është i denjë për emrin që mban — një xhevahir prej restoranti me kopsht. Të gjitha tavolinat janë të vendosura nën hijen e drurëve, me pallonj që shëtisin përreth... perfekt pas një udhëtimi të gjatë. Sa për ushqimin: detyrë ta provosh! Të gjitha perimet dhe sallatat vijnë nga fshati përreth, me shije të përsosur.",
  },
  {
    name: "Thomas Pfneiszl",
    rating: 5,
    date: "7 muaj më parë",
    text:
      "Restorant shumë i mirë me një lokacion të bukur. Ndihesh sikur je ulur në kopshtin tënd të përsosur! Ndërsa shijon gatimet e mira, rrethohesh nga pula, mace dhe pak pallonj. Patjetër ndalo nëse kalon pranë!",
  },
  {
    name: "Iva Musaj",
    rating: 5,
    date: "9 muaj më parë",
    text:
      "Shërbim i mahnitshëm — kamerierja ishte vërtet e sjellshme dhe profesionale. Ushqimi ishte fantastik dhe shumë i shijshëm. Shijuam drekën familjare këtu me një pamje të jashtëzakonshme. E rekomandoj shumë 👍",
  },
  {
    name: "Ola Stafa",
    rating: 5,
    date: "8 muaj më parë",
    text:
      "Një vend i mrekullueshëm pranë Elbasanit, rreth 15 minuta larg. Ushqimi dhe shërbimi ishin të shkëlqyera. Një ambient shumë relaksues, i rrethuar nga drurë dhe lule që të bëjnë të ndihesh sikur je në parajsë. 10000/10",
  },
  {
    name: "Ntenis Xasa",
    rating: 5,
    date: "7 muaj më parë",
    text:
      "Vizitova kohët e fundit këtë restorant dhe pata një përvojë të mrekullueshme. Atmosfera ishte e ngrohtë dhe mikpritëse, duke e bërë vendin perfekt për t'u relaksuar dhe shijuar një vakt. Stafi ishte tepër i sjellshëm dhe i kujdesshëm — u kujdesën që çdo gjë të ishte pikërisht siç duhet.",
  },
];

const CUISINES = [
  {
    title: "Tradita Elbasanase",
    body: "Tavë baçe mbret, fërgesë Elbasani, qumështor Elbasani — gatimet që e bëjnë Elbasanin të famshëm, të servirura me respekt për ju.",
  },
  {
    title: "Kuzhina Shqiptare",
    body: "Mish qengji në helli, paidhaqe, petulla e fshirë e Korçës, qofte tradicionale — sapore të vërteta shqiptare të përgatitura me përbërës vendas.",
  },
  {
    title: "Gatime Ndërkombëtare",
    body: "Biftek me tartuf, fileto viçi me salcë demi-glace, sallata çezar — për ata që kërkojnë diçka tjetër pa lënë mënjanë komfortin.",
  },
];

export function AboutView() {
  return (
    <div className="relative bg-marble">
      {/* === HERO === */}
      <section className="relative overflow-hidden pb-24 pt-[150px] md:pt-[260px] lg:pb-32">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
          <div className="text-center">
            <p className="font-ui mb-6 text-[12px] tracking-[0.3em] uppercase text-black/55">
              rreth nesh
            </p>
            <h1 className="jf-headline mb-10 italic">
              Mirësevini në <br />
              <span style={{ color: "#b45309" }}>Baçe Mbret.</span>
            </h1>
            <p className="font-[var(--font-display)] mx-auto max-w-[820px] text-[20px] leading-[1.6] text-black/80 sm:text-[22px] lg:text-[26px]">
              Restorant <em>Baçe Mbret</em> ju ofron gatime të shijshme të
              kuzhinës tradicionale elbasanase, kuzhinës shqiptare dhe nuk
              mungojnë gatimet e kuzhinës së huaj. Ndodhemi vetëm pak minuta
              larg qytetit të Elbasanit.
            </p>
          </div>
        </div>
      </section>

      {/* === CUISINES === */}
      <section className="relative bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <h2 className="jf-headline mb-16 text-center italic md:mb-20">
            Tre tradita, <span style={{ color: "#b45309" }}>një tavolinë</span>.
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
            {CUISINES.map((c, i) => (
              <article
                key={c.title}
                className="flex flex-col items-center text-center"
              >
                <span className="font-[var(--font-display)] mb-6 text-[64px] italic leading-none text-black/15">
                  0{i + 1}
                </span>
                <h3 className="font-[var(--font-display)] mb-4 text-[26px] font-semibold leading-tight lg:text-[30px]">
                  {c.title}
                </h3>
                <p className="font-ui max-w-[360px] text-[15px] leading-relaxed text-black/70">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === LOCATION BANNER === */}
      <section className="relative overflow-hidden bg-marble py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 sm:px-10 md:grid-cols-2 md:gap-16 lg:px-16">
          <div>
            <p className="font-ui mb-5 text-[12px] tracking-[0.3em] uppercase text-black/55">
              vendi ynë
            </p>
            <h2 className="jf-headline mb-6 italic">
              Pak minuta nga qendra e <span style={{ color: "#b45309" }}>Elbasanit</span>.
            </h2>
            <p className="font-ui mb-8 max-w-[520px] text-[15px] leading-relaxed text-black/70 sm:text-[16px]">
              Largohuni pak nga zhurma e qytetit dhe ulu në një ambient të
              qetë e familjar, ku natyra dhe tradita takohen në një tavolinë
              të vetme. Vijmë e ju presim çdo ditë nga ora 10:28 deri në
              23:00.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bace+Mbret+Elbasan"
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui inline-flex items-center gap-3 rounded-full border border-black px-6 py-3 text-[13px] tracking-[0.22em] uppercase text-black transition-colors hover:bg-black hover:text-white"
              >
                hape në hartë
                <span aria-hidden>→</span>
              </a>
              <Link
                href="/menu"
                className="font-ui group inline-flex items-center gap-3 text-[13px] tracking-[0.22em] uppercase text-black"
              >
                <span className="border-b border-black/60 pb-1 transition-colors group-hover:border-black">
                  shiko menunë
                </span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] bg-black/5 shadow-[0_30px_60px_rgba(0,0,0,0.10)]">
              <Image
                src="/images/menu/tave-bace-mbret.png"
                alt="Tavë Baçe Mbret"
                fill
                sizes="(min-width: 768px) 600px, 100vw"
                className="object-contain p-8"
              />
            </div>
            <div className="pointer-events-none absolute -top-8 -left-8 hidden lg:block">
              <Image
                src="/images/branch_final-min.png"
                alt=""
                aria-hidden
                width={260}
                height={320}
                className="h-auto w-[200px] -rotate-12 opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === REVIEWS === */}
      <section className="relative bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="mb-16 text-center md:mb-20">
            <p className="font-ui mb-5 text-[12px] tracking-[0.3em] uppercase text-black/55">
              fjalët e mysafirëve tanë
            </p>
            <h2 className="jf-headline italic">
              Mendimet që na <span style={{ color: "#b45309" }}>ngrohin zemrën</span>.
            </h2>
            <div className="font-ui mt-7 inline-flex items-center gap-3 text-[14px] text-black/70">
              <Stars rating={5} />
              <span className="font-medium text-black">4.8</span>
              <span>·</span>
              <span>821 vlerësime në Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {REVIEWS.map((r) => (
              <article
                key={r.name + r.date}
                className="flex flex-col rounded-[24px] border border-black/10 bg-marble p-7 transition-shadow hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] lg:p-8"
              >
                <Stars rating={r.rating} />
                <p className="font-[var(--font-display)] mb-6 mt-5 text-[18px] italic leading-[1.55] text-black/85 lg:text-[19px]">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3 border-t border-black/10 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/85 font-[var(--font-display)] text-[16px] text-white">
                    {r.name.charAt(0)}
                  </div>
                  <div className="font-ui text-[12px] leading-tight">
                    <p className="font-medium uppercase tracking-[0.14em] text-black">
                      {r.name}
                    </p>
                    {r.date && (
                      <p className="mt-1 text-black/45">{r.date}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 flex justify-center md:mt-16">
            <a
              href="https://www.google.com/search?q=Bace+Mbret+Elbasan+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui group inline-flex items-center gap-3 text-[13px] tracking-[0.22em] uppercase text-black/70 hover:text-black"
            >
              <span className="border-b border-black/40 pb-1 transition-colors group-hover:border-black">
                lexoni më shumë në google
              </span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="relative bg-marble py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1000px] px-6 text-center sm:px-10">
          <h2 className="jf-headline mb-10 italic">
            Bëjuni pjesë e <span style={{ color: "#b45309" }}>tavolinës</span>.
          </h2>
          <p className="font-ui mx-auto mb-12 max-w-[600px] text-[15px] leading-relaxed text-black/65 sm:text-[16px]">
            Rezervoni një tavolinë ose vini direkt — porta jonë është gjithmonë
            e hapur për ju.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/menu"
              className="font-ui inline-flex items-center gap-3 rounded-full border border-black bg-black px-7 py-3 text-[13px] tracking-[0.22em] uppercase text-white transition-colors hover:bg-transparent hover:text-black"
            >
              shiko menunë
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="font-ui inline-flex items-center gap-3 rounded-full border border-black px-7 py-3 text-[13px] tracking-[0.22em] uppercase text-black transition-colors hover:bg-black hover:text-white"
            >
              na kontaktoni
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} nga 5`}>
      {stars.map((filled, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill={filled ? "#f59e0b" : "none"}
          stroke={filled ? "#f59e0b" : "rgba(0,0,0,0.25)"}
          strokeWidth="1.4"
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.78L10 14.77l-5.21 2.73 1-5.78-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
