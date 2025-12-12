const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <p className="text-display text-xl font-medium text-gold-gradient">
              NETWORK GLOBAL
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Entertainment Ecosystem
            </p>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Network Global Entertainment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;