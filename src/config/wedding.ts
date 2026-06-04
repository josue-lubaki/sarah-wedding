export const WEDDING_CONFIG = {
  // Interac details
  interac: {
    email: 'msarahpascale@gmail.com',
  },

  // Formspree configuration
  formspree: {
    formId: import.meta.env.VITE_FORMSPREE_FORM_ID || 'xwvnkovl',
    cancellationFormId: import.meta.env.VITE_FORMSPREE_CANCELLATION_FORM_ID || 'maqkrjbn',
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
