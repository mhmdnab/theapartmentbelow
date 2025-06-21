import Link from "next/link";
import { notFound } from "next/navigation";
import { chapters } from "../../../data/chapters";

export async function generateStaticParams() {
  return chapters.map((ch) => ({ slug: ch.slug }));
}

export default async function ChapterPage({
  params,
}: {
  params: { slug: string };
}) {
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
        {/* Render the intro chapter’s real content here! */}
        <p className="text-[#EBE8E0] mb-8">
          {/* ...your long text here... */}
          The hum of the hallway lights was the only sound Cal Rainer could rely
          on. It buzzed low and steady, like a lazy hornet nest just out of
          reach. Everything else—the creaks, the shifting shadows, the
          occasional thump—was part of the building’s nightly ritual. Or at
          least that’s what he told himself. It was 3:04 a.m. He stood at the
          end of the eighth-floor corridor of the Denslow Tower Apartments, arms
          folded, leaning against the wall like a gargoyle in a cheap security
          uniform. The monitors in the control room were quiet. Nothing
          unusual—just pixelated ghosts pacing their homes, lost in sleep or
          screens. Cal glanced at the elevator panel. All floors inactive.
          Except… Ding. The 7th-floor button flickered. No movement. No one
          called it. He waited. Listened. There it was again. A faint dragging
          sound. Like something heavy being pulled across linoleum. He’d heard
          it three nights in a row now. Always at the same time. Always from one
          floor below—apartment 703. He tapped the side of his flashlight.
          “Rats,” he muttered, but he didn’t believe it. Not really. He went
          back to the control room and sat down in the squeaky, cursed chair he
          swore hated him more than the job itself. Brought up the camera feed
          for floor 7. Blank. Of course. That wing of the building didn’t have
          hallway cams. Budget cuts. Convenient. He poured himself a finger of
          bourbon from the flask in his desk drawer—not enough to feel it, just
          enough to taste the fire—and watched the clock crawl. 3:18 a.m. The
          dragging started again. He could ignore it. Pretend it was plumbing.
          Pretend the building was settling. Pretend someone else could deal
          with it. But no one else was there. Just him, ghosts on the screens,
          and whatever was making that sound. He opened the tenant roster.
          Apartment 703: Vacant. He stared at the word for a long time. Then he
          grabbed his keys, his flashlight, and the little part of him that
          still gave a damn—and headed for the elevator.
        </p>
        {/* Next Chapter Button */}

        <Link href={`/chapters/${nextChapter.slug}`}>
          <span className="inline-block bg-[#D01110] hover:bg-[#ab0000] text-white font-semibold py-3 px-8 rounded-lg text-base sm:text-lg transition cursor-pointer">
            Next Chapter: {nextChapter.title}
          </span>
        </Link>
      </div>
    </main>
  );
}
