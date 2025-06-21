import AboutBook from "@/components/About";
import Hero from "@/components/Hero";
import InsideBook from "@/components/InsideBook";
import NewsletterSignup from "@/components/NewsletterSignup";
import SampleChapter from "@/components/SampleChapter";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Hero />
      <AboutBook />
      <InsideBook />
      <SampleChapter />
      {/* <NewsletterSignup /> */}
    </main>
  );
}
