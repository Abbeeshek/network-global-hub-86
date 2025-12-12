import { Film, Play, Sparkles } from "lucide-react";

const offerings = [
  {
    icon: Film,
    title: "Premium WebSeries Production",
    features: ["Film-grade shooting", "Professional storytelling", "Worldwide distribution"],
  },
  {
    icon: Play,
    title: "OTT Streaming Platform",
    features: ["Multi-language streaming", "Regional + global content", "Subscription + community rewards"],
  },
  {
    icon: Sparkles,
    title: "Cinified Projects",
    features: ["High-budget content", "Theatrical quality", "Investable digital assets"],
  },
];

const OfferingsSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      {/* Section title */}
      <div className="section-container mb-16">
        <div className="accent-line mb-6" />
        <h2 className="text-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground/90">
          What We Offer
        </h2>
      </div>

      {/* Cards */}
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {offerings.map((offering, index) => (
            <div
              key={offering.title}
              className="card-cinematic rounded-lg p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex p-3 rounded-lg bg-gold/10 border border-gold/20 group-hover:border-gold/40 transition-colors">
                <offering.icon className="w-6 h-6 text-gold" />
              </div>

              {/* Title */}
              <h3 className="text-display text-xl md:text-2xl font-medium text-foreground mb-6">
                {offering.title}
              </h3>

              {/* Features list */}
              <ul className="space-y-3">
                {offering.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 right-0 bottom-0 divider-gold" />
    </section>
  );
};

export default OfferingsSection;