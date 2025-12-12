import { Globe, Languages, Layers, Server } from "lucide-react";

const infrastructurePoints = [
  { icon: Languages, text: "Multilingual support" },
  { icon: Globe, text: "Global markets" },
  { icon: Layers, text: "Cross-platform content pipeline" },
  { icon: Server, text: "Scalable streaming technology" },
];

const GlobalInfraSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-charcoal/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground/90 mb-6">
            Global Infrastructure
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A worldwide entertainment ecosystem built for expansion.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {infrastructurePoints.map((point, index) => (
            <div
              key={point.text}
              className="card-cinematic rounded-lg p-6 text-center group"
            >
              <div className="mb-4 inline-flex p-3 rounded-full bg-gold/10 border border-gold/20 group-hover:border-gold/40 transition-colors">
                <point.icon className="w-6 h-6 text-gold" />
              </div>
              <p className="text-secondary-foreground text-sm">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalInfraSection;