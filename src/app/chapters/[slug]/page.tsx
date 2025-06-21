import Link from "next/link";
import { notFound } from "next/navigation";
import { chapters } from "../../../data/chapters";

export async function generateStaticParams() {
  return chapters.map((ch) => ({ slug: ch.slug }));
}

export default async function ChapterPage({ params }: any) {
  const chapterIndex = chapters.findIndex((ch) => ch.slug === params.slug);
  const chapter = chapters[chapterIndex];
  if (!chapter) return notFound();

  const nextChapter = chapters[chapterIndex + 1];

  if (!chapter.available) {
    // LOCKED chapter message
    return (
      <main className="min-h-screen bg-[#0A0A00] flex items-center justify-center px-4">
        <div className="bg-[#212121] rounded-2xl shadow-lg p-10 text-center max-w-3xl w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#A8BBB0] mb-4">
            {chapter.title}
          </h1>
          <p className="text-[#EBE8E0] mb-6">
            This chapter is only available after purchase.
          </p>
          <Link
            href="https://your-purchase-link.com"
            className="inline-block bg-[#D01110] hover:bg-[#ab0000] text-white font-semibold py-3 px-8 rounded-lg text-base sm:text-lg transition"
          >
            Purchase to Unlock All Chapters
          </Link>
        </div>
      </main>
    );
  }

  // Render actual chapter content here
  return (
    <main className="min-h-screen bg-[#0A0A00] flex items-center justify-center py-28 px-4">
      <div className="bg-[#212121] rounded-2xl shadow-lg p-10 max-w-3xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#A8BBB0] mb-4">
          {chapter.title}
        </h1>
        <p className="text-[#EBE8E0] mb-8">
          The hum of the hallway lights was the only sound Cal Rainer could rely
          on...
        </p>
        {/* Next Chapter Button */}
        {nextChapter ? (
          nextChapter.available ? (
            <Link href={`/chapters/${nextChapter.slug}`}>
              <span className="inline-block bg-[#D01110] hover:bg-[#ab0000] text-white font-semibold py-3 px-8 rounded-lg text-base sm:text-lg transition cursor-pointer">
                Next Chapter: {nextChapter.title}
              </span>
            </Link>
          ) : (
            <button
              disabled
              className="inline-block bg-gray-700 text-gray-400 font-semibold py-3 px-8 rounded-lg text-base sm:text-lg transition cursor-not-allowed"
            >
              Next Chapter Locked
            </button>
          )
        ) : null}
      </div>
    </main>
  );
}
