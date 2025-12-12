import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Full Coverage */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      </div>

      {/* Decorative gold line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
        {/* Brand Name */}
        <p className="text-gold text-xs sm:text-sm tracking-[0.4em] uppercase mb-2 opacity-0 animate-fade-up font-medium">
          Network Global
        </p>
        
        {/* Sub-brand */}
        <p className="text-foreground/60 text-xs sm:text-sm tracking-[0.25em] uppercase mb-8 opacity-0 animate-fade-up font-light">
          Entertainment Ecosystem
        </p>

        {/* Tagline */}
        <p className="text-gold/70 text-xs sm:text-sm tracking-[0.2em] uppercase mb-8 opacity-0 animate-fade-up delay-100">
          WebSeries • OTT • Cinified Projects — All Under One Business
        </p>

        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 opacity-0 animate-fade-up delay-200">
          <span className="block text-foreground/90">A Unified</span>
          <span className="text-gold-gradient">Entertainment Powerhouse</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 opacity-0 animate-fade-up delay-300">
          Where storytelling meets technology — powering global content creation and streaming.
        </p>

        {/* Gold accent line */}
        <div className="accent-line mx-auto opacity-0 animate-fade-up delay-400" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default HeroSection;