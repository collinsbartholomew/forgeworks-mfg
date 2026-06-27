import type { Metadata } from "next";
import "./globals.css";
import "./site.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { outfit, parkinsans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "ForgeWorks MFG",
    template: "%s – ForgeWorks MFG",
  },
      description:
      "ForgeWorks MFG provides precision CNC machining, steel fabrication, plastic injection molding, and custom manufacturing solutions for automotive, energy, and industrial clients worldwide.",
    "Fabrik is a leading manufacturer specializing in steel products, precision machining, and custom manufacturing solutions for automotive, construction, energy, and industrial sectors.",
  openGraph: {
    title: "ForgeWorks MFG",
    description:
      "Leading manufacturer of steel products, precision machining, and custom manufacturing solutions.",
    url: "https://forgeworks.com",
    siteName: "ForgeWorks MFG",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${parkinsans.variable}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
