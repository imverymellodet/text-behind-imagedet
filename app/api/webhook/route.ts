// app/api/webhook/route.ts

export async function POST() {
  return new Response("✅ Webhook endpoint temporarily disabled. No action taken.", {
    status: 200,
  });
}
