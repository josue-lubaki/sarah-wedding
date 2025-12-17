import { Heart } from 'lucide-react';
import coupleLake from '@/assets/couple-lake.jpg';
import coupleEmbrace from '@/assets/couple-embrace.jpg';

const StorySection = () => {
  const storyEvents = [
    {
      date: '2018',
      title: 'Première Rencontre',
      description: 'Nous nous sommes rencontrés lors d\'une soirée chez des amis communs. Un regard, un sourire, et tout a commencé.',
    },
    {
      date: '2019',
      title: 'Premier Rendez-vous',
      description: 'Un dîner romantique sous les étoiles qui a scellé notre complicité. Ce soir-là, nous savions que c\'était spécial.',
    },
    {
      date: '2022',
      title: 'Emménagement',
      description: 'Nous avons décidé de construire notre nid d\'amour ensemble, partageant chaque moment du quotidien.',
    },
    {
      date: '2025',
      title: 'La Demande',
      description: 'Une demande magique lors d\'un voyage inoubliable. Elle a dit oui !',
    },
  ];

  return (
    <section id="histoire" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heart className="w-6 h-6 text-primary fill-primary/30 mx-auto mb-4" />
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Notre Histoire
          </h2>
          <p className="font-serif text-muted-foreground max-w-lg mx-auto">
            L'amour ne se résume pas à un coup de foudre, c'est une histoire qui s'écrit jour après jour.
          </p>
        </div>

        {/* Couple Introduction */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
          {/* Jonathan */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-lg mb-6">
              <img
                src={coupleLake}
                alt="Jonathan"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <span className="font-serif text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
              Le Marié
            </span>
            <h3 className="font-script text-3xl text-foreground mb-3">Jonathan</h3>
            <p className="font-serif text-muted-foreground max-w-xs">
              Passionné et rêveur, il cherchait l'amour sans le savoir. Jusqu'au jour où Sarah est entrée dans sa vie.
            </p>
          </div>

          {/* Sarah */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-lg mb-6">
              <img
                src={coupleEmbrace}
                alt="Sarah"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="font-serif text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
              La Mariée
            </span>
            <h3 className="font-script text-3xl text-foreground mb-3">Sarah</h3>
            <p className="font-serif text-muted-foreground max-w-xs">
              Lumineuse et pleine de vie, elle a su captiver le cœur de Jonathan dès leur première rencontre.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />

            {storyEvents.map((event, index) => (
              <div
                key={event.date}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                  }`}
                >
                  <span className="font-serif text-2xl text-primary font-semibold">
                    {event.date}
                  </span>
                  <h4 className="font-script text-2xl text-foreground mt-1 mb-2">
                    {event.title}
                  </h4>
                  <p className="font-serif text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
