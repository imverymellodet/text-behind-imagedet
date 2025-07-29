// app/api/create-checkout-session/route.ts

export async function POST() {
  return new Response("Checkout is temporarily disabled.", { status: 200 });
}
