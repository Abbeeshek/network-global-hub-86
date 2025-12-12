const VisionSection = () => {
  return (
    <section className="relative py-32 md:py-40">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="accent-line mx-auto mb-8" />
          
          <h2 className="text-display text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80 mb-8 leading-relaxed">
            In the future, entertainment belongs to communities.
          </h2>
          
          <p className="text-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            <span className="text-foreground/90">Network Global empowers </span>
            <span className="text-gold-gradient">creators, viewers, and investors</span>
            <span className="text-foreground/90"> within one connected platform.</span>
          </p>
        </div>
      </div>

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 divider-gold" />
    </section>
  );
};

export default VisionSection;