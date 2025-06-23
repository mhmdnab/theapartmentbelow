// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import image from "../../public/images/0540fc3a566a978e1d61b5c4ef6372ac.jpg";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt="Hero background"
        fill // Next 13+ fill API
        sizes="(max-width: 768px) 100vw, 100vw"
        style={{ objectFit: "cover" }}
        priority // load immediately
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full text-center text-white">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-6 break-words">
          Unravel the Conspiracy
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 break-words">
          Follow former FBI agent Cal Rainer on a pulse-pounding journey through
          secrets, betrayal, and redemption across a riveting multi-part
          thriller.
        </p>
        <Link href="/chapters/01-intro">
          <span className="inline-block bg-[#D01110] hover:bg-[#ab0000] font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-sm sm:text-base transition cursor-pointer">
            Start Reading
          </span>
        </Link>
      </div>
    </section>
  );
}
