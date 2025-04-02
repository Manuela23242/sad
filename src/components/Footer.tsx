import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0f] border-t border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              PayPal
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              CRYPTOCURRENCY
            </Link>
            <span className="text-gray-600">|</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-medium">
              Freeze
            </Link>
            <span className="mx-2">•</span>
            <span>Copyright © {new Date().getFullYear()}</span>
            <span className="mx-2">•</span>
            <span>All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
