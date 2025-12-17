import { Heart, ChevronDown } from 'lucide-react';
import coupleLake from '@/assets/couple-lake.jpg';
import Countdown from './Countdown';

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={coupleLake}
          alt="Jonathan et Sarah"
          className="w-full h-full object-cover object-right"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
        <div className="absolute inset-0 bg-foreground/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20">
        {/* Elegant card backdrop */}
        <div className="relative inline-block">
          {/* Circular/oval backdrop */}
          <div className="absolute inset-0 -inset-x-12 -inset-y-8 md:-inset-x-20 md:-inset-y-12 bg-background/90 backdrop-blur-sm rounded-full shadow-xl" />
          
          {/* Content inside card */}
          <div className="relative px-8 py-6 md:px-16 md:py-10">
            {/* Decorative element */}
            <div className="flex justify-center mb-4 animate-fade-in">
              <Heart className="w-5 h-5 text-primary fill-primary/50 animate-pulse-soft" />
            </div>

            {/* Pre-title */}
            <p className="font-serif text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-fade-in-up">
              Nous allons nous marier
            </p>

            {/* Names */}
            <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-primary mb-2 animate-fade-in-up animation-delay-200">
              Jonathan
            </h1>
            <div className="flex items-center justify-center gap-4 my-2 animate-fade-in-up animation-delay-200">
              <span className="h-px w-10 md:w-16 bg-primary/40" />
              <span className="font-serif text-base text-muted-foreground italic">- et -</span>
              <span className="h-px w-10 md:w-16 bg-primary/40" />
            </div>
            <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-primary mb-6 animate-fade-in-up animation-delay-400">
              Sarah
            </h1>

            {/* Date */}
            <div className="animate-fade-in-up animation-delay-600">
              <div className="flex items-center justify-center gap-2 md:gap-4">
                <span className="font-serif text-sm md:text-base tracking-wider text-muted-foreground">Novembre</span>
                <span className="font-serif text-3xl md:text-4xl font-semibold text-foreground border-x border-primary/30 px-3 md:px-4">01</span>
                <span className="font-serif text-sm md:text-base tracking-wider text-muted-foreground">2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown - outside the card */}
        <div className="mt-10 animate-fade-in-up animation-delay-800">
          <Countdown targetDate={new Date('2026-11-01T14:00:00')} />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#histoire"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/60 hover:text-primary transition-colors animate-float"
      >
        <span className="font-serif text-xs tracking-widest uppercase">Découvrir</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default HeroSection;
