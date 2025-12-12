import { Blocks, Shield, Users, TrendingUp } from "lucide-react";

const features = [
  { icon: Blocks, text: "Blockchain-ready content ownership" },
  { icon: TrendingUp, text: "Transparent creator revenue" },
  { icon: Shield, text: "Secure rights management" },
  { icon: Users, text: "Community-driven growth" },
];

const PoweredBySection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-charcoal/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="accent-line mb-6" />
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground/90 mb-6">
              Entertainment Powered by{" "}
              <span className="text-gold-gradient">Network Global</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Network Global unifies three industries under a single ecosystem — creating a scalable, 
              global, and tech-driven entertainment business.
            </p>
          </div>

          {/* Right - Feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.text}
                className="flex items-start gap-4 p-5 rounded-lg bg-obsidian/50 border border-border/50 hover:border-gold/20 transition-colors"
              >
                <div className="p-2 rounded bg-gold/10">
                  <feature.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="text-secondary-foreground text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoweredBySection;