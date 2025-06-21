"use client";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: integrate with your email API
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h4 className="text-2xl font-semibold mb-4">
          Get the Latest Chapters Delivered
        </h4>
        <form onSubmit={subscribe} className="flex justify-center">
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-2/3 md:w-1/3 p-3 border rounded-l-lg focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-r-lg"
          >
            Subscribe
          </button>
        </form>
        {status === "success" && (
          <p className="mt-4 text-green-600">Subscribed successfully!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600">Something went wrong.</p>
        )}
      </div>
    </section>
  );
}
