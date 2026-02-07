import { QrCode, Download } from 'lucide-react';
// import QRCode from 'qrcode.react';
import { QRCodeSVG } from 'qrcode.react';
import { Button } from '@/components/ui/button';
import { WEDDING_CONFIG } from '@/config/wedding';

const QRCodeSection = () => {
  const handleDownload = () => {
    window.open(WEDDING_CONFIG.invitation.pdfUrl, '_blank');
  };

  return (
    <section id="invitation" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <QrCode className="w-6 h-6 text-primary mx-auto mb-4" />
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Invitation Papier
          </h2>
          <p className="font-serif text-muted-foreground max-w-lg mx-auto">
            Scannez le code QR avec votre smartphone pour télécharger
            une copie imprimable de notre invitation.
          </p>
        </div>

        {/* QR Code Card */}
        <div className="max-w-md mx-auto animate-fade-in-up animation-delay-200">
          <div className="bg-card rounded-xl p-8 md:p-12 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            {/* QR Code */}
            <div className="bg-white p-6 rounded-lg mb-6 flex justify-center">
              <QRCodeSVG
                value={WEDDING_CONFIG.invitation.pdfUrl}
                size={200}
                level="H"
                className="w-full max-w-[200px] md:max-w-[256px] h-auto"
              />
            </div>

            {/* Instructions */}
            <div className="text-center space-y-4">
              <p className="font-serif text-sm text-muted-foreground">
                Utilisez l'appareil photo de votre téléphone ou une application
                de lecture de code QR pour scanner le code ci-dessus.
              </p>

              {/* Direct Download Button */}
              <div className="pt-4 border-t border-border">
                <p className="font-serif text-xs text-muted-foreground mb-3">
                  Ou téléchargez directement :
                </p>
                <Button
                  onClick={handleDownload}
                  variant="outline"
                  size="sm"
                  className="font-serif"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger le PDF
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-6">
            <p className="font-serif text-xs text-muted-foreground italic">
              Format PDF haute qualité, parfait pour l'impression
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;
