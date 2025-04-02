"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

type Duration = {
  id: string;
  name: string;
  price: string;
  isBestseller?: boolean;
};

const durations: Duration[] = [
  {
    id: "1week",
    name: "1x Week",
    price: "€24.99",
  },
  {
    id: "1month",
    name: "1x Month",
    price: "€49.99",
  },
  {
    id: "lifetime",
    name: "Lifetime",
    price: "€79.99",
    isBestseller: true,
  },
];

export default function PurchaseOptions() {
  const [selectedDuration, setSelectedDuration] = useState<string>("lifetime");

  const handlePurchase = () => {
    const redirectUrl = `https://freezegg.sellhub.cx/product/Fortnite-Ai/?duration=${selectedDuration}`;
    window.location.href = redirectUrl;
  };

  return (
    <div className="bg-[#090a10] border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Select Duration</h2>

      <div className="space-y-3 mb-6">
        {durations.map((duration) => (
          <Card
            key={duration.id}
            className={`border cursor-pointer transition-all ${
              selectedDuration === duration.id
                ? "border-blue-500 bg-blue-900/10"
                : "border-gray-800 hover:border-gray-700 bg-[#090a10]"
            }`}
            onClick={() => setSelectedDuration(duration.id)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedDuration === duration.id ? "border-blue-500" : "border-gray-600"
                }`}>
                  {selectedDuration === duration.id && (
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  )}
                </div>
                <span className="ml-3 font-medium">{duration.name}</span>
                {duration.isBestseller && (
                  <span className="ml-3 text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                    Bestseller
                  </span>
                )}
              </div>
              <span className="font-semibold">{duration.price}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <Button
          className="w-full py-6 bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium flex items-center justify-center"
          onClick={handlePurchase}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          PURCHASE NOW
        </Button>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Upon purchasing you will receive:</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Freeze AI License Key
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Freeze AI Installation Guide
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Access to Private Customer Server
          </li>
        </ul>
      </div>
    </div>
  );
}
