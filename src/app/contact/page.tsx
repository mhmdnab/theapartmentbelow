// app/contact/page.tsx
"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Integrate with backend/email API here
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A00] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg bg-[#212121] rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-[#A8BBB0] mb-4 text-center">
          Contact
        </h1>
        <p className="text-[#A8BBB0] mb-8 text-center">
          Have a question, feedback, or media inquiry? Send a message below and
          I'll get back to you!
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-[#EBE8E0] mb-1">
              Name
            </label>
            <input
              className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#EBE8E0] mb-1">
              Email
            </label>
            <input
              className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#EBE8E0] mb-1">
              Message
            </label>
            <textarea
              className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
          >
            Send Message
          </button>
        </form>
        {status === "success" && (
          <p className="text-green-600 mt-4 text-center">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-4 text-center">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </div>
    </main>
  );
}
