import { Heart, Loader2, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { WEDDING_CONFIG } from '@/config/wedding';

// Zod validation schema
const rsvpFormSchema = z.object({
  guestName: z
    .string()
    .min(WEDDING_CONFIG.rsvp.minGuestNameLength, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom est trop long'),
  email: z
    .string()
    .email('Adresse email invalide')
    .max(100, 'Email trop long'),
  willAttend: z.enum(['yes', 'no'], {
    required_error: 'Veuillez indiquer si vous serez présent',
  }),
  numberOfGuests: z.coerce
    .number()
    .min(0, 'Le nombre ne peut être négatif')
    .max(WEDDING_CONFIG.rsvp.maxGuests, `Maximum ${WEDDING_CONFIG.rsvp.maxGuests} personnes`)
    .default(0),
  dietaryRestrictions: z
    .string()
    .max(500, 'Message trop long')
    .optional(),
  specialMessage: z
    .string()
    .max(1000, 'Message trop long')
    .optional(),
});

type RSVPFormData = z.infer<typeof rsvpFormSchema>;

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const RSVPSection = () => {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const form = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpFormSchema),
    defaultValues: {
      guestName: '',
      email: '',
      willAttend: undefined,
      numberOfGuests: 0,
      dietaryRestrictions: '',
      specialMessage: '',
    },
  });

  const willAttend = form.watch('willAttend');

  const onSubmit = async (data: RSVPFormData) => {
    setSubmitState('loading');

    try {
      const formspreeEndpoint = `https://formspree.io/f/${WEDDING_CONFIG.formspree.formId}`;

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitState('success');
        form.reset();
        toast.success('Votre réponse a été envoyée avec succès !');
      } else {
        throw new Error('Échec de la soumission');
      }
    } catch (error) {
      setSubmitState('error');
      toast.error('Une erreur est survenue. Veuillez réessayer.');
      console.error('Form submission error:', error);

      // Reset to idle after 3 seconds
      setTimeout(() => setSubmitState('idle'), 3000);
    }
  };

  return (
    <section id="rsvp" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Heart className="w-6 h-6 text-primary mx-auto mb-4" />
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Répondez S'il Vous Plaît
          </h2>
          <p className="font-serif text-muted-foreground max-w-lg mx-auto">
            Veuillez confirmer votre présence avant le 1er juin 2026.
            Nous avons hâte de célébrer ce jour spécial avec vous !
          </p>
        </div>

        {/* Form or Success Message */}
        <div className="max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          {submitState === 'success' ? (
            // Success Message
            <div className="bg-card rounded-xl p-8 md:p-12 border border-border text-center">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-script text-3xl md:text-4xl text-foreground mb-4">
                Merci beaucoup !
              </h3>
              <p className="font-serif text-muted-foreground mb-6">
                Votre réponse a été enregistrée avec succès. Nous sommes impatients de vous voir à notre mariage !
              </p>
              <Button
                onClick={() => setSubmitState('idle')}
                variant="outline"
                className="font-serif"
              >
                Soumettre une autre réponse
              </Button>
            </div>
          ) : (
            // Form
            <div className="bg-card rounded-xl p-8 md:p-12 border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Guest Name and Email - Two columns on desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Guest Name */}
                    <FormField
                      control={form.control}
                      name="guestName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-serif">
                            Nom complet <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Jean Dupont"
                              {...field}
                              className="font-serif"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-serif">
                            Adresse email <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="jean@example.com"
                              {...field}
                              className="font-serif"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Will Attend - Radio Group */}
                  <FormField
                    control={form.control}
                    name="willAttend"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-serif">
                          Serez-vous présent(e) ? <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="yes" />
                              <label
                                htmlFor="yes"
                                className="font-serif text-sm cursor-pointer"
                              >
                                Oui, je serai présent(e) avec plaisir
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="no" />
                              <label
                                htmlFor="no"
                                className="font-serif text-sm cursor-pointer"
                              >
                                Non, je ne pourrai malheureusement pas venir
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Number of Guests - Conditional (only if attending) */}
                  {willAttend === 'yes' && (
                    <FormField
                      control={form.control}
                      name="numberOfGuests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-serif">
                            Nombre de personnes vous accompagnant
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="0"
                              max={WEDDING_CONFIG.rsvp.maxGuests}
                              placeholder="0"
                              {...field}
                              className="font-serif"
                            />
                          </FormControl>
                          <p className="text-xs text-muted-foreground font-serif">
                            N'incluez pas vous-même, seulement vos accompagnants (max {WEDDING_CONFIG.rsvp.maxGuests})
                          </p>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {/* Dietary Restrictions - Conditional (only if attending) */}
                  {willAttend === 'yes' && (
                    <FormField
                      control={form.control}
                      name="dietaryRestrictions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-serif">
                            Restrictions alimentaires ou allergies (optionnel)
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Végétarien, sans gluten, allergies aux noix, etc."
                              {...field}
                              className="font-serif resize-none"
                              rows={3}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {/* Special Message */}
                  <FormField
                    control={form.control}
                    name="specialMessage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-serif">
                          Message spécial pour les mariés (optionnel)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Partagez vos vœux ou un message personnel..."
                            {...field}
                            className="font-serif resize-none"
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitState === 'loading'}
                    className="w-full font-serif tracking-wider"
                  >
                    {submitState === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      'Envoyer ma réponse'
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
