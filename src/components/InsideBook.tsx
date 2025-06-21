// components/InsideBook.tsx
import { BookOpen, Shuffle, Eye, Users } from "lucide-react";

const features = [
  {
    icon: <Shuffle className="h-8 w-8 text-red-600 mb-2" />,
    title: "Twisty Plot",
    desc: "A web of secrets, false leads, and shocking revelations.",
  },
  {
    icon: <Eye className="h-8 w-8 text-red-600 mb-2" />,
    title: "Atmospheric Suspense",
    desc: "Moody settings and tense scenes keep you guessing.",
  },
  {
    icon: <Users className="h-8 w-8 text-red-600 mb-2" />,
    title: "Vivid Characters",
    desc: "Meet allies and adversaries you'll never forget.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-red-600 mb-2" />,
    title: "Page-Turner",
    desc: "Short, punchy chapters pull you straight through to the end.",
  },
];

export default function InsideBook() {
  return (
    <section className="bg-[#212121] py-28 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#A8BBB0] pb-12">
          Inside the Book
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
            >
              {f.icon}
              <h3 className="text-xl font-extrabold text-gray-900 pb-2 text-center tracking-wide">
                {f.title}
              </h3>
              <p className="text-gray-600 text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
