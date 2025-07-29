// lib/stripe.ts
export const stripe = {
  // Dummy method to avoid runtime errors
  checkout: {
    sessions: {
      create: () => ({ id: "dummy_session_id" }),
    },
  },
};
