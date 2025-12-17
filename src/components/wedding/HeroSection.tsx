import { Heart, ChevronDown } from 'lucide-react';
import coupleVeil from '@/assets/couple-veil.jpg';
import watercolorBg from '@/assets/watercolor-bg.jpg';
import floralDecoration from '@/assets/floral-decoration.png';
import Countdown from './Countdown';

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Watercolor Background */}
      <div className="absolute inset-0">
        <img
          src={watercolorBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative floral elements - Top Left */}
      {/* <div className="absolute top-0 left-0 w-32 md:w-48 opacity-40 -rotate-12">
        <img src={floralDecoration} alt="" className="w-full h-auto" />
      </div> */}

      {/* Decorative floral elements - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-40 md:w-56 opacity-35 rotate-45 -translate-x-1/4">
        <img src={floralDecoration} alt="" className="w-full h-auto" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Names */}
            <h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 animate-fade-in-up">
              Jonathan <span className="text-primary">&</span> Sarah
            </h1>

            {/* Subtitle */}
            <p className="font-serif text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              Nous vous invitons à célébrer notre union et à partager ce moment de bonheur avec nous.
            </p>

            {/* Decorative divider with heart */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up animation-delay-400">
              <span className="h-px w-16 bg-foreground/30" />
              <Heart className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="h-px w-16 bg-foreground/30" />
            </div>

            {/* Date Button */}
            <div className="mb-6 animate-fade-in-up animation-delay-400">
              <span className="inline-block bg-primary text-primary-foreground font-serif text-sm md:text-base tracking-wider uppercase px-6 py-3 rounded-md shadow-sm">
                10 Novembre 2026
              </span>
            </div>

            {/* Location */}
            <div className="font-serif text-sm md:text-base space-y-1 mb-10 animate-fade-in-up animation-delay-600">
              <p>Château des Roses,</p>
              <p>456 Avenue des Jardins,</p>
              <p>Montréal, France</p>
            </div>

            {/* Countdown */}
            <div className="animate-fade-in-up animation-delay-800">
              <Countdown targetDate={new Date('2026-11-01T14:00:00')} />
            </div>
          </div>

          {/* Right Side - Circular Photo with Floral Frame */}
          <div className="relative flex justify-center order-1 lg:order-2 animate-scale-in">
            {/* Circular Photo Frame */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Floral frame around the photo */}
              <div className="pointer-events-none absolute inset-0 -m-6 md:-m-8 lg:-m-10">
                {/* Top-left corner */}
                {/* <img
                  src={floralDecoration}
                  alt=""
                  className="absolute -top-6 -left-6 w-24 md:w-32 lg:w-40 opacity-60 rotate-0"
                /> */}
                {/* Top-right corner */}
                <img
                  src={floralDecoration}
                  alt=""
                  className="absolute -top-6 -right-6 w-24 md:w-32 lg:w-40 opacity-60 rotate-90"
                />
                {/* Bottom-right corner */}
                <img
                  src={floralDecoration}
                  alt=""
                  className="absolute -bottom-6 -right-6 w-24 md:w-32 lg:w-40 opacity-60 rotate-180"
                />
                {/* Bottom-left corner */}
                <img
                  src={floralDecoration}
                  alt=""
                  className="absolute -bottom-6 -left-6 w-24 md:w-32 lg:w-40 opacity-60 -rotate-90"
                />
              </div>

              {/* Outer ring decoration */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
              
              {/* Photo container */}
              <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-background">
                <img
                  src={coupleVeil}
                  alt="Jonathan et Sarah"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#histoire"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hover:text-primary transition-colors animate-float"
      >
        <span className="font-serif text-xs tracking-widest uppercase">Découvrir</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default HeroSection;
