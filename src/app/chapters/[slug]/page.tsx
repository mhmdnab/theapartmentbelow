// app/chapters/[slug]/page.jsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { chapters } from "../../../data/chapters";

export async function generateStaticParams() {
  // only generate pages for chapters that have been unlocked
  return chapters.filter((ch) => ch.available).map((ch) => ({ slug: ch.slug }));
}
const PURCHASE_URL = "https://your-purchase-link.com";
export default async function ChapterPage({ params }: any) {
  // find this chapter by slug
  const chapterIndex = chapters.findIndex((ch) => ch.slug === params.slug);
  const chapter = chapters[chapterIndex];

  // if the slug isn't in the list, or it's locked, 404
  if (chapterIndex === -1) {
    return notFound();
  }

  if (!chapter.available) {
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
            href={PURCHASE_URL}
            className="inline-block bg-[#D01110] hover:bg-[#ab0000] text-white font-semibold py-3 px-8 rounded-lg text-base sm:text-lg transition"
          >
            Purchase to Unlock All Chapters
          </Link>
        </div>
      </main>
    );
  }

  // figure out the next chapter in the array
  const nextChapter = chapters[chapterIndex + 1];

  return (
    <main className="min-h-screen bg-[#0A0A00] flex items-center justify-center py-28 px-4">
      <div className="bg-[#212121] rounded-2xl shadow-lg p-10 max-w-3xl w-full">
        {/* Chapter Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#A8BBB0] mb-4">
          {chapter.title}
        </h1>

        {/* Chapter Content */}
        <div className="prose prose-invert mb-8 text-[#A8BBB0]">
          <p>
            The hum of the hallway lights was the only sound Cal Rainer could
            rely on. It buzzed low and steady, like a lazy hornet nest just out
            of reach. Everything else—the creaks, the shifting shadows, the
            occasional thump—was part of the building’s nightly ritual. Or at
            least that’s what he told himself.
          </p>

          <p>
            It was <span className="font-semibold">3:04 a.m.</span>
          </p>

          <p>
            He stood at the end of the eighth-floor corridor of the Denslow
            Tower Apartments, arms folded, leaning against the wall like a
            gargoyle in a cheap security uniform. The monitors in the control
            room were quiet. Nothing unusual—just pixelated ghosts pacing their
            homes, lost in sleep or screens.
          </p>

          <p>Cal glanced at the elevator panel. All floors inactive. Except…</p>

          <p>
            <em>Ding.</em> The 7th-floor button flickered. No movement. No one
            called it.
          </p>

          <p>He waited. Listened.</p>

          <p>
            There it was again. A faint dragging sound. Like something heavy
            being pulled across linoleum.
          </p>

          <p>
            He’d heard it three nights in a row now. Always at the same time.
            Always from one floor below—apartment 703.
          </p>

          <p>
            He tapped the side of his flashlight.
            <span className="italic">“Rats,”</span> he muttered, but he didn’t
            believe it. Not really.
          </p>

          <hr className="border-gray-700 my-6" />

          <p>
            He went back to the control room and sat down in the squeaky, cursed
            chair he swore hated him more than the job itself. Brought up the
            camera feed for floor 7.
          </p>

          <p>Blank.</p>

          <p>
            Of course. That wing of the building didn’t have hallway cams.
            Budget cuts. Convenient.
          </p>

          <p>
            He poured himself a finger of bourbon from the flask in his desk
            drawer—not enough to feel it, just enough to taste the fire—and
            watched the clock crawl.
          </p>

          <p>
            <span className="font-semibold">3:18 a.m.</span>
          </p>

          <p>The dragging started again.</p>

          <hr className="border-gray-700 my-6" />

          <p>
            He could ignore it. Pretend it was plumbing. Pretend the building
            was settling. Pretend someone else could deal with it.
          </p>

          <p>
            But no one else was there. Just him, ghosts on the screens, and
            whatever was making that sound.
          </p>

          <p>He opened the tenant roster.</p>

          <p>
            <span className="font-mono">Apartment 703: Vacant.</span>
          </p>

          <p>He stared at the word for a long time.</p>

          <p>
            Then he grabbed his keys, his flashlight, and the little part of him
            that still gave a damn—and headed for the elevator.
          </p>
        </div>

        {/* Next Chapter button (locked or unlocked) */}
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
