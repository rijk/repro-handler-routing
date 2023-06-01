export const dynamic = 'force-static'

export async function GET() {
  return new Response(new Date().toISOString())
}

export async function generateStaticParams() {
  return [{ param1: 'a' }]
}
