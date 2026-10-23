// Downloads every asset the cloned trustmrr.com home page uses and writes a URL -> local path map.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const ref = "docs/design-references/trustmrr";
const out = "public/sites/trustmrr";
const data = JSON.parse(readFileSync(`${ref}/data.json`, "utf8"));
const more = JSON.parse(readFileSync(`${ref}/more.json`, "utf8"));
const dom = JSON.parse(readFileSync(`${ref}/dom.json`, "utf8"));

const urls = new Set();
const add = (u) => u && urls.add(u.startsWith("/") ? `https://trustmrr.com${u}` : u);
for (const s of data.sponsors) add(s.img);
for (const c of data.cards) add(c.img);
for (const r of data.rows) {
  add(r.img);
  add(r.founderImg);
}
for (const t of more.tweets) for (const i of t.imgs) add(i);
for (const u of [
  "https://trustmrr.com/_next/static/media/icon_trans.5846c62e.png",
  "https://trustmrr.com/_next/static/media/warren_1.554a8001.png",
  "https://trustmrr.com/unicorn.png",
]) urls.add(u);

mkdirSync(`${out}/img`, { recursive: true });
mkdirSync(`${out}/fonts`, { recursive: true });
const extFor = (type) =>
  ({ "image/png": "png", "image/jpeg": "jpg", "image/webp": "webp", "image/avif": "avif", "image/svg+xml": "svg", "image/gif": "gif", "image/x-icon": "ico" })[type?.split(";")[0]] ?? null;

const map = {};
const failed = [];
await Promise.all(
  [...urls].map(async (u) => {
    try {
      const res = await fetch(u, { signal: AbortSignal.timeout(20000), headers: { "user-agent": "Mozilla/5.0" } });
      const ext = extFor(res.headers.get("content-type"));
      if (!res.ok || !ext) throw new Error(`${res.status} ${res.headers.get("content-type")}`);
      const name = `${createHash("sha1").update(u).digest("hex").slice(0, 10)}.${ext}`;
      writeFileSync(`${out}/img/${name}`, Buffer.from(await res.arrayBuffer()));
      map[u] = `/sites/trustmrr/img/${name}`;
    } catch (e) {
      failed.push([u, String(e)]);
    }
  }),
);

const fonts = {};
for (const u of dom.fonts.filter((f) => f.startsWith("https://trustmrr.com"))) {
  const res = await fetch(u);
  const name = u.split("/").pop();
  writeFileSync(`${out}/fonts/${name}`, Buffer.from(await res.arrayBuffer()));
  fonts[u] = name;
}
writeFileSync(`${ref}/asset-map.json`, JSON.stringify({ map, failed, fonts }, null, 1));
console.log(Object.keys(map).length, "ok;", failed.length, "failed");
for (const f of failed) console.log(f);
