import { Gift, Copy, Check, Info, CheckCircle, Wallet, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { WEDDING_CONFIG } from '@/config/wedding';

const InteracSection = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(WEDDING_CONFIG.interac.email);
      setCopied(true);
      toast.success('Email copié dans le presse-papier !');

      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Erreur lors de la copie');
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="interac" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Gift className="w-6 h-6 text-primary mx-auto mb-4" />
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Confirmation & Cadeaux
          </h2>
          <p className="font-serif text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
            Votre présence à notre mariage est le plus beau cadeau. Afin de nous aider dans nos préparatifs, veuillez prendre connaissance des modalités de confirmation de présence et de contributions ci-dessous.
          </p>
        </div>

        {/* Content - Two Column Layout */}
        <div className="max-w-5xl mx-auto animate-fade-in-up animation-delay-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Column 1: RSVP Confirmation (Mandatory) */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                    Obligatoire
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                  Validation de votre Présence
                </h3>
                <p className="font-serif text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  Pour confirmer officiellement votre présence à la célébration, un virement Interac de <strong className="text-foreground font-semibold font-sans text-base md:text-lg">{WEDDING_CONFIG.rsvp.confirmationFee}$</strong> par personne est requis.
                </p>
                <p className="font-serif text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                  Ce montant nous permet de sécuriser le nombre final d'invités auprès de nos prestataires. Il est <strong className="text-foreground font-semibold">entièrement remboursable</strong> en cas d'annulation avant le 1er septembre 2026.
                </p>
              </div>
              <div className="flex gap-3 bg-accent/60 border-l-4 border-primary rounded-md p-4 mt-auto">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="font-serif text-xs md:text-sm text-foreground">
                  La validation finale de votre formulaire RSVP n'est effective qu'à la réception de ce virement.
                </p>
              </div>
            </div>

            {/* Column 2: Gifts & Contributions (Optional) */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-xs font-semibold uppercase tracking-wider bg-muted text-muted-foreground px-3 py-1 rounded-full">
                    Libre & Optionnel
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                  Cadeaux & Intentions
                </h3>
                <p className="font-serif text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  Votre présence et vos vœux sont ce qui nous importe le plus. Si vous désirez toutefois nous témoigner votre soutien par un cadeau, sachez que <strong className="text-foreground font-semibold">nous acceptons avec reconnaissance tout type de présent</strong>.
                </p>
                <div className="font-serif text-sm md:text-base text-muted-foreground mb-6 space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Virements Interac :</strong> Vous pouvez envoyer vos contributions à l'adresse de virement ci-dessous.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Espèces et Enveloppes :</strong> Une urne nuptiale sera à votre disposition le jour J pour recueillir vos enveloppes et petits mots.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Autres attentions :</strong> Toute autre forme de cadeau sera accueillie avec beaucoup de bonheur.</span>
                  </p>
                </div>
              </div>
              <div className="border-t border-border pt-4 mt-auto text-center">
                <p className="font-serif text-xs md:text-sm text-muted-foreground italic">
                  Merci infiniment pour votre générosité et votre accompagnement.
                </p>
              </div>
            </div>

          </div>

          {/* Virement Interac Details Block */}
          <div className="bg-card rounded-xl p-8 border border-border">
            {/* Email Display with Copy Button */}
            <div className="text-center mb-8">
              <p className="font-serif text-sm md:text-base text-muted-foreground mb-3">
                Adresse de virement Interac unique (Confirmation & Cadeaux)
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <p className="font-serif text-lg md:text-xl text-foreground font-semibold">
                  {WEDDING_CONFIG.interac.email}
                </p>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="sm"
                  className="font-serif"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copié !
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copier l'email
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Instructions */}
            <div className="border-t border-border pt-6">
              <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mb-4">
                Comment effectuer votre virement Interac :
              </h3>
              <ol className="space-y-3 text-sm md:text-base text-muted-foreground font-serif">
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">1.</span>
                  <span>Connectez-vous à votre banque ou application bancaire mobile.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">2.</span>
                  <span>Sélectionnez "Envoyer de l'argent avec Virement Interac".</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">3.</span>
                  <span>Ajoutez l'adresse email ci-dessus comme nouveau destinataire.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">4.</span>
                  <span>Saisissez le montant approprié (ex: <span className="font-sans text-foreground font-semibold">100$</span> par personne pour la confirmation de présence).</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">5.</span>
                  <span><strong>IMPORTANT :</strong> Dans le champ message/note du virement, veuillez inscrire le <strong>nom complet des personnes pour qui vous confirmez la présence</strong> afin que nous puissions faire le rapprochement avec vos formulaires de réponse.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteracSection;
