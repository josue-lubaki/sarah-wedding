export const WEDDING_CONFIG = {
  // Interac details
  interac: {
    email: 'josuelubaki@gmail.com', // À remplacer par votre vrai email Interac
  },

  // Formspree configuration
  formspree: {
    formId: import.meta.env.VITE_FORMSPREE_FORM_ID || 'xwvnkovl',
  },

  // Invitation PDF URL
  invitation: {
    pdfUrl: import.meta.env.VITE_INVITATION_PDF_URL ||
            'https://example.com/wedding-invitation.pdf',
  },

  // RSVP form constraints
  rsvp: {
    maxGuests: 10,
    minGuestNameLength: 2,
  },
} as const;
