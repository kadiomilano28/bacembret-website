import Image from "next/image";
import { SparkleIcon } from "./icons";

export function EatSipSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Section headline */}
        <h2 className="jf-headline mb-16 text-center italic md:mb-20">
          relaks <span className="not-italic font-normal text-black/55">apo</span> festë
        </h2>

        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:gap-28">
        {/* EAT */}
        <div className="relative flex flex-col items-center">
          <div className="relative aspect-[3/4] w-full max-w-[460px] overflow-hidden rounded-[600px] bg-black/5">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/eat_web.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Decorative props */}
          <Image
            src="/images/2024/04/golden-square.svg"
            alt=""
            width={36}
            height={36}
            aria-hidden
            className="absolute left-2 top-20 h-9 w-9 float-y rotate-12 opacity-90"
          />
          <Image
            src="/images/2024/08/double-round1.svg"
            alt=""
            width={20}
            height={36}
            aria-hidden
            className="absolute -right-2 top-1/3 h-9 w-5 float-y-slow opacity-80"
          />
          <SparkleIcon
            aria-hidden
            className="absolute bottom-10 left-6 h-5 w-4 float-y opacity-90"
          />
        </div>

        {/* SIP */}
        <div className="relative flex flex-col items-center">
          <div className="relative aspect-[3/4] w-full max-w-[460px] overflow-hidden rounded-[600px] bg-[#f4ecdf]">
            <Image
              src="/images/2024/10/sip-bg.jpg"
              alt="Vibrant juice"
              fill
              sizes="(min-width: 768px) 460px, 100vw"
              className="object-cover"
            />
            {/* Glass overlay */}
            <Image
              src="/images/2025/08/glass.png"
              alt=""
              aria-hidden
              fill
              sizes="(min-width: 768px) 460px, 100vw"
              className="object-contain object-bottom"
            />
          </div>

          {/* Floating orange */}
          <Image
            src="/images/2025/08/orange.png"
            alt=""
            width={160}
            height={120}
            aria-hidden
            className="absolute -right-4 top-24 h-auto w-[120px] float-y opacity-95 sm:w-[160px]"
          />

          {/* Sparkles */}
          <SparkleIcon
            aria-hidden
            className="absolute right-12 top-10 h-4 w-3 float-y opacity-85"
          />
          <Image
            src="/images/2024/04/golden-square.svg"
            alt=""
            width={28}
            height={28}
            aria-hidden
            className="absolute -left-2 bottom-32 h-7 w-7 float-y-slow -rotate-12 opacity-90"
          />
          <Image
            src="/images/2024/08/double-round1.svg"
            alt=""
            width={20}
            height={36}
            aria-hidden
            className="absolute -left-4 top-1/3 h-9 w-5 float-y opacity-80"
          />
        </div>
        </div>
      </div>
    </section>
  );
}
