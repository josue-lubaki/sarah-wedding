import { MapPin, Clock, Calendar, Church, PartyPopper } from 'lucide-react';

const EventSection = () => {
  const events = [
    {
      icon: Church,
      title: 'La Cérémonie',
      time: '14h00',
      location: 'Église Saint-Pierre',
      address: '123 Rue de la Paix, Paris',
      description: 'Cérémonie religieuse en présence de nos familles et amis proches.',
    },
    {
      icon: PartyPopper,
      title: 'La Réception',
      time: '17h00',
      location: 'Château des Roses',
      address: '456 Avenue des Jardins, Paris',
      description: 'Cocktail, dîner et festivités dans un cadre enchanteur.',
    },
  ];

  return (
    <section id="evenement" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Calendar className="w-6 h-6 text-primary mx-auto mb-4" />
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Le Grand Jour
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary/30" />
            <span className="font-serif text-lg text-primary">1er Novembre 2026</span>
            <span className="h-px w-12 bg-primary/30" />
          </div>
          <p className="font-serif text-muted-foreground max-w-lg mx-auto">
            Nous serions honorés de vous compter parmi nous pour célébrer notre union.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="group bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <event.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-script text-3xl text-foreground mb-4">
                {event.title}
              </h3>

              {/* Time */}
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="font-serif text-foreground">{event.time}</span>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2 mb-4">
                <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <p className="font-serif font-medium text-foreground">{event.location}</p>
                  <p className="font-serif text-sm text-muted-foreground">{event.address}</p>
                </div>
              </div>

              {/* Description */}
              <p className="font-serif text-muted-foreground text-sm">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dress Code */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-accent/50 rounded-lg px-8 py-6">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
              Code Vestimentaire
            </h4>
            <p className="font-script text-2xl text-foreground">Élégant & Chic</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
