import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/ChatGPT Image Jun 24, 2025, 12_47_10 AM.png";

export default function Header() {
  return (
    <header className="bg-[#212121] shadow sticky z-99 top-0">
      <div className="container mx-auto p-4 flex flex-col items-center md:flex-row md:justify-between">
        {/* Logo on top (mobile), left (md+) */}
        <Link href="/">
          <Image alt="logo" src={logo} width={120} height={120} />
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
