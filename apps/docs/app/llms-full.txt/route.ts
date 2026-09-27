import { getLlmsFullTxt, TEXT_HEADERS } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  return new Response(getLlmsFullTxt(), { headers: TEXT_HEADERS });
}
