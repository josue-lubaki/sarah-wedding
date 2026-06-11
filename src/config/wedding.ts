export const WEDDING_CONFIG = {
  // Interac details
  interac: {
    email: 'msarahpascale@gmail.com',
  },

  // Formspree configuration
  formspree: {
    formId: import.meta.env.VITE_FORMSPREE_FORM_ID || 'mdavolqb',
    cancellationFormId: import.meta.env.VITE_FORMSPREE_CANCELLATION_FORM_ID || 'mojzqkav',
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
    confirmationFee: 100,
  },
} as const;

export const checkIsVip = () => {
  if (typeof window === 'undefined') return false;
  return (
    window.location.hostname === 'vip.cs-wedding.ca' ||
    window.location.search.includes('vip')
  );
};
