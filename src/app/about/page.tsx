// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/ChatGPT Image Jun 24, 2025, 12_47_10 AM.png";
import { chapters } from "@/data/chapters";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A00] flex items-center justify-center py-16 px-4">
      <div className="max-w-3xl w-full mx-auto b bg-[#212121] rounded-2xl shadow-lg p-8">
        {/* Book Cover & Title */}
        <div className="flex md:flex-row flex-col items-center justify-evenly mb-8">
          <Image alt="logo" src={logo} width={250} height={250} />
          <span className="text-lg text-red-700 font-semibold tracking-wide">
            A Psychological Thriller
          </span>
        </div>

        {/* Book Description */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#A8BBB0] mb-2">
            About the Book
          </h2>
          <p className="text-[#EBE8E0] text-base mb-3">
            <span className="font-semibold">The Apartment Below</span> follows
            Harper Lane, a former FBI agent haunted by her past and desperate
            for a fresh start. But the walls of her new apartment hide more than
            memories—a series of eerie sounds and unexplained events draw Harper
            into a dangerous web of secrets, lies, and paranoia.
          </p>
          <p className="text-[#EBE8E0] text-base mb-3">
            As Harper digs deeper, she finds herself questioning not just her
            neighbors, but her own sanity. With each twist, the line between
            friend and foe blurs, and time is running out to uncover the truth
            about the apartment below.
          </p>
        </section>

        {/* Book Facts */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#A8BBB0] mb-2">
            Quick Facts
          </h2>
          <ul className="list-disc list-inside text-[#EBE8E0] text-base space-y-1">
            <li>Genre: Psychological Thriller / Mystery</li>
            <li>Length: 240 pages</li>
            <li>Standalone novel</li>
            <li>Available in eBook formats</li>
            <li>Release Date: July 2025</li>
          </ul>
        </section>
        <section className="my-8">
          <h2 className="text-xl font-semibold text-[#A8BBB0] mb-2">
            Table of Contents
          </h2>
          <ul className="list-decimal list-inside text-base space-y-1">
            {chapters.map((ch) => (
              <li key={ch.slug} className="text-[#A8BBB0] hover:text-red-500">
                <Link
                  href={`/chapters/${ch.slug}`}
                  className="hover:text-red-500 transition text-[#A8BBB0]"
                >
                  {ch.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        {/* Author Section */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-[#A8BBB0] mb-2">
            About the Author
          </h2>
          <div className="flex items-center gap-4 mb-2">
            <div>
              <span className="font-semibold text-[#EBE8E0]">Steve N.</span>
              <p className="text-[#EBE8E0] text-sm">
                Steve N. is a web developer and lifelong fan of suspense
                fiction. Inspired by true crime, urban legends, and the quiet
                dread of city life, Steve crafts stories that linger long after
                the last page. "The Apartment Below" is his chilling debut
                novel.
              </p>
            </div>
          </div>
        </section>

        {/* Creation Story (Optional) */}
        <section>
          <h2 className="text-xl font-semibold text-[#A8BBB0] mb-2">
            How the Book Was Written
          </h2>
          <p className="text-[#EBE8E0] text-base">
            “The Apartment Below” began as a late-night idea after moving into
            an old apartment building. Drawing on personal experiences, hours of
            research, and a love for all things mysterious, Steve poured his
            anxieties and imagination into every chapter—hoping to leave readers
            looking twice at the world around them.
          </p>
        </section>
        {/* Table of Contents */}
      </div>
    </main>
  );
}
