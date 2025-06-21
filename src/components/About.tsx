// components/AboutBook.tsx
export default function AboutBook() {
  return (
    <section className="bg-[#EBE8E0] min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-2xl mx-auto text-center w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A00] mb-4">
          About the Book
        </h2>
        <p className="text-lg sm:text-xl text-[#171717] mb-6">
          <span className="font-semibold">The Apartment Below</span> is a
          gripping thriller that follows former FBI agent Harper Lane as she
          descends into a world of secrets, paranoia, and unexpected danger.
          When disturbing noises echo through her new apartment, Harper realizes
          she’s at the center of a conspiracy far darker than anything she’s
          faced before.
        </p>
        <p className="text-base text-[#171717] mb-8">
          Twists lurk behind every wall. Loyalties are tested. And no one is who
          they seem. Will Harper uncover the truth before it’s too late?
        </p>
        <a href="/about" className="hover:underline text-[#D01110]">
          More Details
        </a>
      </div>
    </section>
  );
}
