import { getLlmsTxt, TEXT_HEADERS } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  return new Response(getLlmsTxt(), { headers: TEXT_HEADERS });
}
