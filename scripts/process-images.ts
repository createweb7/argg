import sharp from "sharp";
import path from "path";

const SRC = path.join(process.cwd(), "docs");
const OUT = path.join(process.cwd(), "public/images");

async function main() {
  // Real founder photography (not flyer crops) — used on the About page
  // only, never on Home. Cropped to a consistent 3:4 portrait ratio.
  await sharp(path.join(SRC, "founder-main.jpeg"))
    .resize(900, 1200, { fit: "cover", position: "attention" })
    .webp({ quality: 88 })
    .toFile(path.join(OUT, "about-founder.webp"));

  await sharp(path.join(SRC, "founder-secondary.jpeg"))
    .resize(600, 800, { fit: "cover", position: "attention" })
    .webp({ quality: 88 })
    .toFile(path.join(OUT, "founder-avatar.webp"));

  // Home hero background — premium office/skyline scene with real ARGG
  // branding visible on the folder. Resize down slightly (still comfortably
  // larger than any hero render width) to keep file size sane.
  await sharp(path.join(SRC, "hero.png"))
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(OUT, "hero-office.webp"));

  // Full "hexagon + ARGG Associates" lockup, real transparent background —
  // used in-page (Header/Footer). WebP supports alpha, so it stays WebP.
  // Resized to 1000px wide (~3.7:1 aspect) — plenty crisp at the ~250–300px
  // display width this renders at, even on retina, without shipping the
  // full 4521px source.
  await sharp(path.join(SRC, "ARGG_Associates_Transparent.png"))
    .resize(1000, null, { withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(OUT, "logo.webp"));

  // logo-new.png (the hexagon mark alone, square) stays the source for the
  // favicon/apple-icon — a square icon, not the wide lockup, is what those
  // need. The favicon/apple-icon are a Next.js file-convention special
  // case: only .ico/.jpg/.jpeg/.png/.svg (icon) and .jpg/.jpeg/.png
  // (apple-icon) are recognized — .webp is not — so those two stay PNG,
  // flattened onto white since some browsers/iOS render transparent app
  // icons with an unwanted black backing.
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
