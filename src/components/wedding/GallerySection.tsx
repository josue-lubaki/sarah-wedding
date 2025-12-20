import { Camera } from 'lucide-react';
import coupleHero from '@/assets/couple-hero.jpg';
import coupleEmbrace from '@/assets/couple-embrace.jpg';
import coupleLake from '@/assets/couple-lake.jpg';
import coupleVeil from '@/assets/couple-veil.jpg';

const GallerySection = () => {
  const images = [
    { src: coupleHero, alt: 'Christian et Sarah dans la forêt', span: 'md:col-span-2 md:row-span-2' },
    { src: coupleEmbrace, alt: 'Moment d\'intimité', span: '' },
    { src: coupleLake, alt: 'Au bord du lac', span: '' },
    { src: coupleVeil, alt: 'Sous le voile', span: 'md:col-span-2' },
  ];

  return (
    <section id="galerie" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Camera className="w-6 h-6 text-primary mx-auto mb-4" />
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Nos Moments
          </h2>
          <p className="font-serif text-muted-foreground max-w-lg mx-auto">
            Quelques instants capturés de notre belle histoire d'amour.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${image.span}`}
            >
              <div className="aspect-square md:aspect-auto h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
