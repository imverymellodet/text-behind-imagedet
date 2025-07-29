// lib/stripe.ts

export const stripe = {
  checkout: {
    sessions: {
      create: () => ({ id: "dummy_session_id" }),
    },
  },
  webhooks: {
    constructEvent: () => ({
      type: "checkout.session.completed",
      data: { object: {} },
    }),
  },
};
