import sharp from "sharp";
import path from "path";

const SRC = path.join(process.cwd(), "docs");
const OUT = path.join(process.cwd(), "public/images");

type Box = { l: number; t: number; r: number; b: number };

async function cropPctWebp(file: string, out: string, box: Box) {
  const img = sharp(path.join(SRC, file));
  const meta = await img.metadata();
  const w = meta.width!;
  const h = meta.height!;
  const left = Math.round(w * box.l);
  const top = Math.round(h * box.t);
  const width = Math.round(w * (box.r - box.l));
  const height = Math.round(h * (box.b - box.t));

  await sharp(path.join(SRC, file))
    .extract({ left, top, width, height })
    .webp({ quality: 88 })
    .toFile(path.join(OUT, out));

  console.log(`wrote ${out} (${width}x${height} from ${file})`);
}

async function main() {
  await cropPctWebp("2.jpeg", "about-founder.webp", { l: 0.64, t: 0.04, r: 0.98, b: 0.43 });
  await cropPctWebp("3.jpeg", "founder-avatar.webp", { l: 0.605, t: 0.065, r: 0.945, b: 0.365 });

  // Home hero background — premium office/skyline scene with real ARGG
  // branding visible on the folder. Resize down slightly (still comfortably
  // larger than any hero render width) to keep file size sane.
  await sharp(path.join(SRC, "hero.png"))
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(OUT, "hero-office.webp"));

  // logo-new.png has a real transparent background — keep it transparent for
  // in-page use (Header/Footer render it inside their own light chip). WebP
  // supports alpha, so the in-page logo can be WebP too.
  //
  // The favicon/apple-icon are a Next.js file-convention special case: only
  // .ico/.jpg/.jpeg/.png/.svg (icon) and .jpg/.jpeg/.png (apple-icon) are
  // recognized — .webp is not — so those two stay PNG, flattened onto white
  // since some browsers/iOS render transparent app icons with an unwanted
  // black backing.
  await sharp(path.join(SRC, "logo-new.png"))
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 90 })
    .toFile(path.join(OUT, "logo.webp"));

  await sharp(path.join(SRC, "logo-new.png"))
    .resize(512, 512, { fit: "contain", background: "#ffffff" })
    .flatten({ background: "#ffffff" })
    .png()
    .toFile(path.join(process.cwd(), "app/icon.png"));

  await sharp(path.join(SRC, "logo-new.png"))
    .resize(180, 180, { fit: "contain", background: "#ffffff" })
    .flatten({ background: "#ffffff" })
    .png()
    .toFile(path.join(process.cwd(), "app/apple-icon.png"));

  console.log("done");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
