import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PurchaseOptions from "@/components/PurchaseOptions";

export const metadata: Metadata = {
  title: "Purchase Freeze AI",
  description: "Purchase the most advanced AI Powered Aim Assist on the market.",
};

export default function PurchasePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              FREEZE <span className="text-blue-500">AI</span>
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="bg-[#090a10] border border-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src="https://cdn.discordapp.com/attachments/1346167329041416243/1356963107288645754/6b9e249a8234db48cd6a46d7437d7ca1f70be66b718e5242f84885a6cef831d5-Photoroom.png?ex=67ee79df&is=67ed285f&hm=e9ffb33f3fb4cc6091667886f6205a6b11b110113dce752ffa38d48b4f8d8699&"
                    alt="Freeze AI Interface"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-6 bg-[#090a10] border border-gray-800 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Information</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Supported OS</span>
                      <span className="text-white">Windows 10/11</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Supported GPU</span>
                      <span className="text-white">NVIDIA/AMD/INTEL</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Supported Setups</span>
                      <span className="text-white">Single/Dual-PC</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Cloud Gaming Support</span>
                      <span className="text-white">Yes</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Controller Support</span>
                      <span className="text-white">Yes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Supported Resolutions</span>
                      <span className="text-white">All</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="sticky top-24">
                  <PurchaseOptions />
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6">
                User Security
              </h2>
              <p className="text-gray-300 mb-6">
                Unlike other providers, each Freeze user receives a unique and private software build to prevent third party signature scans.
                This ensures that even if one user gets banned, everyone else remains completely safe.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
