import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-gray-800 sticky top-0 z-50 bg-[#0e0e0f]/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Freeze Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-2xl font-bold text-white">Freeze</span>
          </Link>
          <div className="ml-4 hidden md:flex">
            <div className="flex items-center justify-center rounded-full bg-blue-500 px-2 py-1 text-xs">
              <span className="mr-1">✓</span> Verified Seller Since 2025
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-medium text-white hover:text-blue-400 transition">
            HOME
          </Link>
          <Link href="/discord" className="font-medium text-blue-500 hover:text-blue-400 transition flex items-center">
            DISCORD <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </nav>

        <div className="md:hidden">
          <button className="p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
