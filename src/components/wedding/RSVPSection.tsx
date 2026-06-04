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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { WEDDING_CONFIG } from '@/config/wedding';

// ── RSVP schema ─────────────────────────────────────────────────────────────
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

// ── Cancellation schema ──────────────────────────────────────────────────────
const cancellationSchema = z.object({
  guestName: z.string().min(2, 'Nom requis (min 2 caractères)').max(100),
  email: z.string().email('Adresse email invalide').max(100),
  reason: z.string().max(500).optional(),
});

type CancellationFormData = z.infer<typeof cancellationSchema>;

type SubmitState = 'idle' | 'loading' | 'success' | 'error';
type CancelState = 'idle' | 'loading' | 'success' | 'error';

const RSVPSection = () => {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [cancelState, setCancelState] = useState<CancelState>('idle');

  const cancellationFormId = WEDDING_CONFIG.formspree.cancellationFormId;

  // ── RSVP form ──────────────────────────────────────────────────────────────
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
      const response = await fetch(
        `https://formspree.io/f/${WEDDING_CONFIG.formspree.formId}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );

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
      setTimeout(() => setSubmitState('idle'), 3000);
    }
  };

  // ── Cancellation form ──────────────────────────────────────────────────────
  const cancellationForm = useForm<CancellationFormData>({
    resolver: zodResolver(cancellationSchema),
    defaultValues: { guestName: '', email: '', reason: '' },
  });

  const onCancelSubmit = async (data: CancellationFormData) => {
    setCancelState('loading');

    try {
      const response = await fetch(
        `https://formspree.io/f/${cancellationFormId}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setCancelState('success');
        cancellationForm.reset();
        toast.success('Votre annulation a été enregistrée.');
      } else {
        throw new Error('Échec de la soumission');
      }
    } catch (error) {
      setCancelState('error');
      toast.error('Une erreur est survenue. Veuillez réessayer.');
      console.error('Cancellation submission error:', error);
      setTimeout(() => setCancelState('idle'), 3000);
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
            Veuillez confirmer votre présence avant le 1er septembre 2026.
            Nous avons hâte de célébrer ce jour spécial avec vous !
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          {/* ── RSVP card (success or form) ─────────────────────────────── */}
          {submitState === 'success' ? (
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
            <div className="bg-card rounded-xl p-8 md:p-12 border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="guestName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-serif">
                            Nom complet <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Jean Dupont" {...field} className="font-serif" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-serif">
                            Adresse email <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jean@example.com" {...field} className="font-serif" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Attendance */}
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
                              <label htmlFor="yes" className="font-serif text-sm cursor-pointer">
                                Oui, je serai présent(e) avec plaisir
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="no" />
                              <label htmlFor="no" className="font-serif text-sm cursor-pointer">
                                Non, je ne pourrai malheureusement pas venir
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Number of guests (conditional) */}
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

                  {/* Dietary restrictions (conditional) */}
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

                  {/* Special message */}
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

                  {/* Submit */}
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

          {/* ── Cancellation accordion — always visible if configured ────── */}
          {cancellationFormId && (
            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="cancellation" className="border rounded-xl px-4">
                <AccordionTrigger className="font-serif text-sm text-muted-foreground hover:no-underline py-4">
                  Vous avez déjà confirmé mais ne pouvez plus venir ?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-4 pt-2">
                  {cancelState === 'success' ? (
                    <div className="py-6 text-center">
                      <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                      <p className="font-serif text-foreground font-medium">
                        Votre annulation a été enregistrée.
                      </p>
                      <p className="font-serif text-sm text-muted-foreground mt-1">
                        Vous serez contacté pour le remboursement.
                      </p>
                    </div>
                  ) : (
                    <Form {...cancellationForm}>
                      <form
                        onSubmit={cancellationForm.handleSubmit(onCancelSubmit)}
                        className="space-y-6 pb-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={cancellationForm.control}
                            name="guestName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-serif">
                                  Nom complet <span className="text-destructive">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input placeholder="Jean Dupont" {...field} className="font-serif" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={cancellationForm.control}
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
                        <FormField
                          control={cancellationForm.control}
                          name="reason"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-serif">
                                Raison de l'annulation (optionnel)
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Expliquez brièvement si vous le souhaitez..."
                                  {...field}
                                  className="font-serif resize-none"
                                  rows={3}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          variant="outline"
                          disabled={cancelState === 'loading'}
                          className="w-full font-serif tracking-wider"
                        >
                          {cancelState === 'loading' ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Envoi en cours...
                            </>
                          ) : (
                            'Annuler ma présence'
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
