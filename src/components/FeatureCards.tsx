import { Card, CardContent } from "@/components/ui/card";

type Feature = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: "products-sold",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v5" />
        <path d="M6.5 9l-1.5-2" />
        <path d="M17.5 9l1.5-2" />
        <circle cx="12" cy="14" r="8" />
        <path d="M12 18v2" />
      </svg>
    ),
    title: "100+ Products sold",
    description: "Trusted by 850+ active users, Freeze has sold more than 4500 products.",
  },
  {
    id: "games-supported",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "10+ Games Supported",
    description: "Freeze works for many games with our universal model, no extra payments for other games.",
  },
  {
    id: "security",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Unique Security",
    description: "Benefit from unique, private builds and undetectable external object detection to stay secure.",
  },
  {
    id: "easy-to-use",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      </svg>
    ),
    title: "Easy To Use",
    description: "User friendly UI, simple installation, and 24/7 customer support.",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0e0e0f] to-[#121520]">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="bg-[#090a10] border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <CardContent className="pt-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
