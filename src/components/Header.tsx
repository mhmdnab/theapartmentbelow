import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#212121] shadow">
      <div className="container mx-auto p-4 flex flex-col items-center md:flex-row md:justify-between">
        {/* Logo on top (mobile), left (md+) */}
        <Link href="/">
          <h1 className="text-2xl font-bold mb-4 md:mb-0 text-[#A8BBB0]">
            The Apartment Below
          </h1>
        </Link>

        {/* Nav links below logo on mobile, to the right on md+ */}
        <nav className="flex space-x-4">
          <Link
            href="/chapters/01-intro"
            className="hover:underline text-[#A8BBB0]"
          >
            Start Reading
          </Link>
          <Link href="/about" className="hover:underline text-[#A8BBB0]">
            About
          </Link>
          <Link href="/contact" className="hover:underline text-[#A8BBB0]">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
