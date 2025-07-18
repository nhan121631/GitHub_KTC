import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "app nhaan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#373b44] to-[#4286f4] shadow">
          <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="text-2xl font-bold text-white drop-shadow">
              My Next App
            </div>
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/"
                  className="text-white font-medium hover:text-[#6dd5fa] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white font-medium hover:text-[#6dd5fa] transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white font-medium hover:text-[#6dd5fa] transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white font-medium hover:text-[#6dd5fa] transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="text-white font-medium hover:text-[#6dd5fa] transition"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="pt-24"> {children}</main>
      </body>
    </html>
  );
}
