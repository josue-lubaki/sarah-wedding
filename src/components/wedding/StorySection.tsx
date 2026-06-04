import { Heart } from 'lucide-react';
import couple1 from '@/assets/christian.png';
import couple2 from '@/assets/sarah.png';

const StorySection = () => {
  const storyEvents = [
    {
      date: '2012',
      title: 'La Vraie Rencontre',
      description: 'Ils se connaissaient depuis l\'enfance — leurs parents étaient amis — mais c\'est en 2012, à 14 et 15 ans, qu\'ils se sont vraiment rencontrés. Deux chemins qui se croisent à l\'époque où tout est encore à découvrir.',
    },
    {
      date: '2014',
      title: 'Le Début de l\'Aventure',
      description: 'Ce qui avait commencé comme une simple amitié s\'est doucement transformé en quelque chose de plus profond. En 2014, ils ont choisi de se mettre ensemble, nourris par des rires partagés et des années à grandir côte à côte.',
    },
    {
      date: '2024',
      title: 'Un Projet de Vie',
      description: 'Après avoir traversé des épreuves et des séparations qui les ont aidés à grandir, ils ont commencé à parler sérieusement de mariage — avec la conviction de vouloir bâtir leur avenir ensemble.',
    },
    {
      date: '27 déc. 2025',
      title: 'La Demande en Mariage',
      description: 'Une promesse solennelle, un moment inoubliable. Christian a demandé Sarah en mariage le 27 décembre 2025. Elle a dit oui.',
    },
    {
      date: '24 jan. 2026',
      title: 'Les Fiançailles',
      description: 'Entourés de leur famille, ils ont célébré leurs fiançailles le 24 janvier 2026 — une belle étape avant le grand jour.',
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
            Une histoire écrite avec patience, forgée par les épreuves, guidée par le cœur… et destinée à durer pour toujours.
          </p>
        </div>

        {/* Narrative */}
        <div className="max-w-2xl mx-auto mb-20 text-center">
          <p className="font-serif text-muted-foreground leading-relaxed mb-4">
            Leur histoire a commencé bien avant qu'ils en comprennent le sens. Ils se connaissent depuis l'enfance, leurs parents étant amis. Mais c'est en 2012 qu'ils se sont vraiment rencontrés, avant de se mettre ensemble en 2014.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mb-4">
            Comme beaucoup d'histoires sincères, la leur a connu des séparations et des épreuves, qui leur ont permis de grandir et de mieux se retrouver. Avec le temps, leur lien est resté fort, les ramenant toujours l'un vers l'autre.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed">
            Ils se sont rencontrés à l'adolescence, à seulement 14 et 15 ans — à une époque où tout était encore à découvrir. Aujourd'hui, adultes qu'ils sont devenus à travers chaque étape de la vie, ils ont continué à se choisir et à bâtir un lien fondé sur la patience, la fidélité et l'amour. Après avoir mûri côte à côte et transformé leurs rêves de jeunesse en projets concrets, ils s'apprêtent à entamer un nouveau chapitre en se mariant cette année — non seulement comme amoureux, mais comme de véritables partenaires de vie.
          </p>
        </div>

        {/* Couple Introduction */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
          {/* Christian */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-lg mb-6">
              <img
                src={couple1}
                alt="Christian"
                style={{
                  objectPosition: 'top', scale: '1.2'
                }}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <span className="font-serif text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
              Le Marié
            </span>
            <h3 className="font-script text-3xl text-foreground mb-3">Christian</h3>
            <p className="font-serif text-muted-foreground max-w-xs">
              Fidèle et patient, il a su garder ce lien précieux au fil des années. Avec Sarah, il a trouvé son véritable partenaire de vie.
            </p>
          </div>

          {/* Sarah */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-lg mb-6">
              <img
                src={couple2}
                style={{
                  objectPosition: 'center',
                  transform: 'scaleX(-1)',
                  scale: '1.1'
                }}
                alt="Sarah"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="font-serif text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
              La Mariée
            </span>
            <h3 className="font-script text-3xl text-foreground mb-3">Sarah</h3>
            <p className="font-serif text-muted-foreground max-w-xs">
              Lumineuse et pleine de vie, elle a grandi aux côtés de Christian, transformant une belle amitié en un amour profond et durable.
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
                  <p className="font-serif text-lg text-muted-foreground">
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
