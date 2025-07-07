// Optional: Handle Chrome DevTools well-known request
export async function GET() {
  return new Response(
    JSON.stringify({
      origins: ["http://localhost:3000", "https://your-domain.com"],
      version: "1.0"
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
