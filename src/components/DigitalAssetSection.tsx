const DigitalAssetSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground/90 mb-8">
            Digital Asset Integration
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            We transform entertainment into digital assets — giving viewers ownership 
            and creators new income streams.
          </p>
        </div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Divider */}
      <div className="absolute left-0 right-0 bottom-0 divider-gold" />
    </section>
  );
};

export default DigitalAssetSection;