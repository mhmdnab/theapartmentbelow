import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#212121] py-6">
      <div className="container mx-auto text-center text-sm text-[#EBE8E0]">
        © {new Date().getFullYear()}{" "}
        <Link
          href="https://mhmdnab.dev"
          className="hover:underline text-[#D01110]"
          target="_blank"
          rel="noopener"
        >
          Mohamad Nabloulsi.
        </Link>{" "}
        All rights reserved.
      </div>
    </footer>
  );
}
