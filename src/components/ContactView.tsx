import { FacebookIcon, InstagramIcon, TiktokIcon } from "./icons";
import { RESTAURANT } from "@/lib/jf-data";

interface InfoCard {
  label: string;
  icon: React.ReactNode;
  value: string;
  href: string;
  external?: boolean;
}

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.94.36 1.86.68 2.75a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.33-1.33a2 2 0 0 1 2.11-.45c.89.32 1.81.55 2.75.68A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6 12 13 2 6" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20 10c0 7-8 13-8 13S4 17 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export function ContactView() {
  const phoneClean = RESTAURANT.phone.replace(/[^\d+]/g, "");

  const cards: InfoCard[] = [
    {
      label: "Telefon",
      icon: <PhoneIcon />,
      value: RESTAURANT.phone,
      href: `tel:${phoneClean}`,
    },
    {
      label: "Email",
      icon: <MailIcon />,
      value: RESTAURANT.email,
      href: `mailto:${RESTAURANT.email}`,
    },
    {
      label: "Adresa",
      icon: <MapPinIcon />,
      value: `${RESTAURANT.address}, ${RESTAURANT.city}`,
      href: "https://www.google.com/maps/search/?api=1&query=Bace+Mbret+Elbasan",
      external: true,
    },
    {
      label: "Orari",
      icon: <ClockIcon />,
      value: `${RESTAURANT.hours[0]?.label}: ${RESTAURANT.hours[0]?.value}`,
      href: "#",
    },
  ];

  return (
    <div className="relative bg-marble">
      {/* === HERO === */}
      <section className="relative overflow-hidden pb-20 pt-[150px] md:pt-[260px] lg:pb-24">
        <div className="mx-auto max-w-[1100px] px-6 text-center sm:px-10 lg:px-16">
          <p className="font-ui mb-6 text-[12px] tracking-[0.3em] uppercase text-black/55">
            kontakt
          </p>
          <h1 className="jf-headline mb-10 italic">
            Na shkruani, na <br />
            <span style={{ color: "#b45309" }}>telefononi.</span>
          </h1>
          <p className="font-[var(--font-display)] mx-auto max-w-[720px] text-[18px] leading-[1.6] text-black/75 sm:text-[20px] lg:text-[22px]">
            Jemi gjithmonë të lumtur t&apos;ju dëgjojmë. Rezervoni një tavolinë,
            na pyetni për ngjarje speciale, ose thjesht na shkruani një &laquo;hello&raquo;.
          </p>
        </div>
      </section>

      {/* === INFO CARDS === */}
      <section className="relative bg-white py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {cards.map((c) => {
              const inner = (
                <>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-black transition-colors group-hover:border-black group-hover:bg-black group-hover:text-white">
                    {c.icon}
                  </span>
                  <div>
                    <p className="font-ui mb-2 text-[11px] tracking-[0.28em] uppercase text-black/55">
                      {c.label}
                    </p>
                    <p className="font-[var(--font-display)] text-[18px] leading-snug text-black lg:text-[20px]">
                      {c.value}
                    </p>
                  </div>
                </>
              );
              const baseClass =
                "group flex flex-col items-start gap-4 rounded-[24px] border border-black/10 bg-marble p-7 transition-all lg:p-8";
              if (c.href === "#") {
                return (
                  <div key={c.label} className={baseClass}>
                    {inner}
                  </div>
                );
              }
              return (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`${baseClass} hover:-translate-y-1 hover:border-black/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]`}
                >
                  {inner}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* === MAP === */}
      <section className="relative bg-marble py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="mb-12 grid grid-cols-1 items-end gap-8 md:grid-cols-[1fr_auto] md:gap-12">
            <div>
              <p className="font-ui mb-4 text-[12px] tracking-[0.3em] uppercase text-black/55">
                gjej rrugën
              </p>
              <h2 className="jf-headline italic">
                Na vizitoni në <span style={{ color: "#b45309" }}>Elbasan</span>.
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bace+Mbret+Elbasan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui inline-flex items-center gap-3 rounded-full border border-black px-6 py-3 text-[13px] tracking-[0.22em] uppercase text-black transition-colors hover:bg-black hover:text-white"
            >
              hape në google maps
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-black/10 shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
            <iframe
              title="Baçe Mbret në Google Maps"
              src="https://www.google.com/maps?q=Bace+Mbret+Elbasan&output=embed"
              className="block aspect-[16/9] w-full md:aspect-[21/9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* === SOCIAL === */}
      <section className="relative bg-white py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[900px] px-6 text-center sm:px-10">
          <p className="font-ui mb-5 text-[12px] tracking-[0.3em] uppercase text-black/55">
            na ndiqni
          </p>
          <h2 className="jf-headline mb-10 italic">
            Bashkohuni me <span style={{ color: "#b45309" }}>familjen</span>.
          </h2>
          <p className="font-ui mx-auto mb-12 max-w-[560px] text-[15px] leading-relaxed text-black/65 sm:text-[16px]">
            Foto të reja, eventet që organizojmë, dhe gjellët e sezonit —
            gjithçka në rrjetet tona sociale.
          </p>

          <div className="flex items-center justify-center gap-5">
            <a
              href={RESTAURANT.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-black/20 text-black transition-all hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a
              href={RESTAURANT.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-black/20 text-black transition-all hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={RESTAURANT.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-black/20 text-black transition-all hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
            >
              <TiktokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
