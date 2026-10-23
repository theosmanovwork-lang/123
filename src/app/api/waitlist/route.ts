import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DATA_DIR = path.join(process.cwd(), ".data");

/**
 * Collects waitlist signups into .data/waitlist.jsonl.
 * File storage is a placeholder: swap it for a database or a mailing service before deploying to an
 * ephemeral host (Vercel, serverless), where the filesystem is not persistent.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  const { email, website, source } = (body ?? {}) as Record<string, unknown>;

  // Honeypot: real users never fill the hidden "website" field.
  if (typeof website === "string" && website.length > 0) {
    return Response.json({ ok: true });
  }
  if (typeof email !== "string" || email.length > 254 || !EMAIL_RE.test(email.trim())) {
    return Response.json({ error: "Проверь email — похоже, в нём опечатка" }, { status: 422 });
  }

  const entry = {
    email: email.trim().toLowerCase(),
    source: typeof source === "string" ? source.slice(0, 40) : "landing",
    at: new Date().toISOString(),
  };

  try {
    await mkdir(DATA_DIR, { recursive: true });
    await appendFile(path.join(DATA_DIR, "waitlist.jsonl"), `${JSON.stringify(entry)}\n`, "utf8");
  } catch {
    return Response.json({ error: "Не получилось сохранить. Попробуй ещё раз позже" }, { status: 500 });
  }
  return Response.json({ ok: true });
}
