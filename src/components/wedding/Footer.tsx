import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        {/* Names */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="font-script text-3xl text-foreground">Christian</span>
          <Heart className="w-5 h-5 text-primary fill-primary/50" />
          <span className="font-script text-3xl text-foreground">Sarah</span>
        </div>

        {/* Date */}
        <p className="font-serif text-muted-foreground mb-6">
          1er Novembre 2026
        </p>

        {/* Decorative line */}
        <div className="flex justify-center mb-6">
          <span className="h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Message */}
        <p className="font-serif text-sm text-muted-foreground italic">
          "L'amour ne vieillit pas, il s'approfondit avec le temps."
        </p>

        {/* Hashtag */}
        <p className="mt-6 font-serif text-xs tracking-[0.2em] uppercase text-primary">
          #ChristianEtSarah2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
