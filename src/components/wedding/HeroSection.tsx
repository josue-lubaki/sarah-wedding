import { Heart, ChevronDown } from 'lucide-react';
import coupleHero from '@/assets/couple-hero.jpg';
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
          src={coupleHero}
          alt="Jonathan et Sarah"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
        <div className="absolute inset-0 bg-foreground/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20">
        {/* Decorative element */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <Heart className="w-6 h-6 text-primary fill-primary/50 animate-pulse-soft" />
        </div>

        {/* Pre-title */}
        <p className="font-serif text-sm md:text-base tracking-[0.3em] uppercase text-foreground/80 mb-4 animate-fade-in-up">
          Nous allons nous marier
        </p>

        {/* Names */}
        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-foreground mb-2 animate-fade-in-up animation-delay-200">
          Jonathan
        </h1>
        <div className="flex items-center justify-center gap-4 my-3 animate-fade-in-up animation-delay-200">
          <span className="h-px w-12 md:w-20 bg-primary/40" />
          <span className="font-serif text-lg text-primary italic">&</span>
          <span className="h-px w-12 md:w-20 bg-primary/40" />
        </div>
        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 animate-fade-in-up animation-delay-400">
          Sarah
        </h1>

        {/* Date */}
        <div className="animate-fade-in-up animation-delay-600">
          <p className="font-serif text-xl md:text-2xl tracking-wider text-foreground/90 mb-2">
            1er Novembre 2026
          </p>
          <div className="flex justify-center mb-8">
            <span className="decorative-line" />
          </div>
        </div>

        {/* Countdown */}
        <div className="animate-fade-in-up animation-delay-800">
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
