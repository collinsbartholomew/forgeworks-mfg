"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setError(json.error || "Something went wrong");
      }
    } catch {
      setError("Network error. Please try again.");
    }
  }

  if (submitted) {
    return (
      <div className="bg-light rounded-2xl p-8 lg-p-10 text-center">
        <span className="text-4xl mb-4 block">&#10003;</span>
        <h3 className="text-xl font-heading font-medium mb-2">Thank you!</h3>
        <p className="text-black-60 text-sm">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm-grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-black-70 mb-1.5">First Name</label>
          <input type="text" name="firstName" placeholder="John" className="w-full px-4 py-3 rounded-lg border-black-10 text-sm focus:outline-none focus:border-black/30 transition-colors" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-black-70 mb-1.5">Last Name</label>
          <input type="text" name="lastName" placeholder="Smith" className="w-full px-4 py-3 rounded-lg border-black-10 text-sm focus:outline-none focus:border-black/30 transition-colors" required />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-black-70 mb-1.5">Email</label>
        <input type="email" name="email" placeholder="john@youremail.com" className="w-full px-4 py-3 rounded-lg border-black-10 text-sm focus:outline-none focus:border-black/30 transition-colors" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-black-70 mb-1.5">Phone</label>
        <input type="tel" name="phone" placeholder="(1) 23 4567 891" className="w-full px-4 py-3 rounded-lg border-black-10 text-sm focus:outline-none focus:border-black/30 transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-medium text-black-70 mb-1.5">Company</label>
        <input type="text" name="company" placeholder="Company name" className="w-full px-4 py-3 rounded-lg border-black-10 text-sm focus:outline-none focus:border-black/30 transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-medium text-black-70 mb-1.5">Message</label>
        <textarea name="message" rows={5} placeholder="Tell us about your manufacturing needs..." className="w-full px-4 py-3 rounded-lg border-black-10 text-sm focus:outline-none focus:border-black/30 transition-colors resize-none" required />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" className="w-full btn btn-primary">
        Send Message
      </button>
    </form>
  );
}
