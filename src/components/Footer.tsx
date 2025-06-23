// components/Footer.jsx

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import logo from "../../public/images/ChatGPT Image Jun 24, 2025, 12_47_10 AM.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#212121] py-12">
      {/* Top row: social & logo */}
      <div className="container mx-auto flex justify-between items-center space-x-6 mb-8">
        {/* Logo */}
        <Link href="/" className="block mx-6">
          <Image src={logo} alt="Site Logo" width={120} height={120} />
        </Link>

        <div className="flex flex-row mx-6 gap-3 text-white">
          <Link
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener"
            className="hover:text-[#D01110] transition-transform hover:scale-110 duration-100"
          >
            <RiTwitterXLine size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener"
            className="hover:text-[#D01110] transition-transform hover:scale-110 duration-100"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener"
            className="hover:text-[#D01110] transition-transform hover:scale-110 duration-100"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>

      {/* Bottom row: credits */}
      <div className="container mx-auto text-center md:text-base text-xs text-[#EBE8E0]">
        {year} - Made with love by{" "}
        <Link
          href="https://mhmdnab.dev"
          className="hover:underline text-[#D01110]"
          target="_blank"
          rel="noopener"
        >
          Mohamad Nabloulsi.
        </Link>
      </div>
    </footer>
  );
}
