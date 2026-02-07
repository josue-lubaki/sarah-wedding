import { Gift, Copy, Check } from 'lucide-react';
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
            Votre Présence Est Notre Cadeau
          </h2>
          <p className="font-serif text-muted-foreground max-w-lg mx-auto">
            Votre présence à notre mariage est le plus beau cadeau que vous puissiez nous offrir.
            Si vous souhaitez également contribuer, nous acceptons les virements Interac.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            {/* Email Display with Copy Button */}
            <div className="text-center mb-8">
              <p className="font-serif text-sm text-muted-foreground mb-3">
                Adresse email pour virement Interac
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
                      Copier
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Instructions */}
            <div className="border-t border-border pt-6 mb-6">
              <h3 className="font-serif text-base font-semibold text-foreground mb-4">
                Comment effectuer un virement Interac :
              </h3>
              <ol className="space-y-2 text-sm text-muted-foreground font-serif">
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">1.</span>
                  <span>Connectez-vous à votre banque en ligne ou application mobile</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">2.</span>
                  <span>Sélectionnez "Envoyer de l'argent par Interac"</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">3.</span>
                  <span>Entrez l'adresse email ci-dessus comme destinataire</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">4.</span>
                  <span>Ajoutez un montant et un message personnel si vous le souhaitez</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">5.</span>
                  <span>Confirmez l'envoi (aucune question de sécurité n'est requise)</span>
                </li>
              </ol>
            </div>

            {/* Thank You Message */}
            <div className="border-t border-border pt-6 text-center">
              <p className="font-serif text-sm text-muted-foreground italic">
                Merci infiniment pour votre générosité et votre soutien.
                Votre présence et vos bons vœux sont ce qui compte le plus pour nous.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteracSection;
