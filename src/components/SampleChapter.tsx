// components/SampleChapter.tsx
import Link from "next/link";

export default function SampleChapter() {
  return (
    <section className="bg-[#EBE8E0] min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-[#232323] rounded-xl shadow-lg p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#D01110] mb-6 text-center">
          Sample Chapter
        </h2>
        <h3 className="text-xl font-semibold text-white mb-4 text-center">
          Chapter 1: A Noisy Night
        </h3>
        <p className="text-gray-200 text-base sm:text-lg mb-8 text-center italic">
          Cal’s sleep was shattered by a crash from the apartment below. She sat
          up, pulse racing. The sound wasn’t just noise—it was a warning. In the
          silent minutes that followed, Harper realized this was no ordinary
          night.
        </p>
        <div className="text-center">
          <Link href="/chapters/01-intro">
            <span className="inline-block bg-[#D01110] hover:bg-[#ab0000] text-white font-semibold py-3 px-8 rounded-lg text-base sm:text-lg transition cursor-pointer">
              Read Full Chapter
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
