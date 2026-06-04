import { Camera } from 'lucide-react';
import couple1 from '@/assets/couple-accolade.png';
import couple2 from '@/assets/couple-eye-contant.png';
import couple3 from '@/assets/couple-repos2.png';
import couple4 from '@/assets/couple-check-smile.png';
import couple5 from '@/assets/couple-main.png';
import couple6 from '@/assets/couple-my-man2.png';


const GallerySection = () => {
  const images = [
    { src: couple1, alt: 'Christian et Sarah dans la forêt', span: 'md:col-span-2 md:row-span-2' },
    { src: couple2, alt: 'Moment d\'intimité', span: '' },
    { src: couple3, alt: 'Au bord du lac', span: '', style: { transform: 'translateX(20px) scale(1.2)' } },
    { src: couple4, alt: 'Sous le voile', span: 'md:col-span-2', style: { transform: 'translateX(20px) scale(1.2)' } },
    { src: couple5, alt: 'Sous le voile', span: 'md:col-span-2', style: { transform: 'translateX(20px) scale(1.2)' } },
    { src: couple6, alt: 'Sous le voile', span: 'md:col-span-2', style: { transform: 'translateX(20px) scale(1.2)' } },
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
                  style={image.style}
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
