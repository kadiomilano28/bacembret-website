import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const BASE = 'https://jfvegancafe.com';
const PUBLIC = fileURLToPath(new URL('../public/', import.meta.url));
console.log('Writing to:', PUBLIC);

const ASSETS = [
  // Logos
  '/wp-content/uploads/2024/09/Logo_vector_white.png',
  '/wp-content/uploads/2024/08/Falafel_vector.svg',
  '/wp-content/themes/Justfalafel/assets/video/Falafel_vector.svg',
  '/wp-content/themes/Justfalafel/assets/images/logo-icons/jf-favicon.ico',
  '/wp-content/themes/Justfalafel/assets/images/logo-icons/71three-logo.svg',
  // Backgrounds
  '/wp-content/uploads/2025/09/gradient-header.png',
  '/wp-content/themes/Justfalafel/assets/images/marble-bg.webp',
  '/wp-content/themes/Justfalafel/assets/images/footer-bg.png',
  '/wp-content/themes/Justfalafel/assets/images/falafel-bowl-bg.png',
  '/wp-content/themes/Justfalafel/assets/images/branch_final-min.png',
  // Hero intro
  '/wp-content/uploads/2025/custom/falafel1.jpg',
  '/wp-content/uploads/2025/custom/falafel2.jpg',
  '/wp-content/uploads/2025/custom/falafel3.jpg',
  '/wp-content/uploads/2025/custom/falafel4.jpg',
  // Bowl slider
  '/wp-content/uploads/2024/10/1.png',
  '/wp-content/uploads/2024/10/2-1.png',
  '/wp-content/uploads/2024/10/3.png',
  '/wp-content/uploads/2024/10/4.png',
  '/wp-content/uploads/2024/10/5-1.png',
  // Eat-Sip
  '/wp-content/uploads/2024/10/sip-bg.jpg',
  '/wp-content/uploads/2025/08/glass.png',
  '/wp-content/uploads/2025/08/orange.png',
  '/wp-content/uploads/2024/04/sip-bg.png',
  '/wp-content/uploads/2024/04/golden-square.svg',
  '/wp-content/uploads/2024/08/double-round1.svg',
  // Gallery
  '/wp-content/uploads/2024/10/f1.jpg',
  '/wp-content/uploads/2024/10/f2.jpg',
  '/wp-content/uploads/2024/10/f3-1.jpg',
  '/wp-content/uploads/2024/10/f4-1.jpg',
  '/wp-content/uploads/2024/10/f5.jpg',
  '/wp-content/uploads/2024/10/f6.jpg',
  '/wp-content/uploads/2024/10/f7-1.jpg',
  '/wp-content/uploads/2024/10/f8.jpg',
  '/wp-content/uploads/2024/10/f9.jpg',
  '/wp-content/uploads/2024/10/f10.jpg',
  '/wp-content/uploads/2024/10/f-12.jpg',
  '/wp-content/uploads/2024/10/f13.jpg',
  '/wp-content/uploads/2024/10/f14.jpg',
  '/wp-content/uploads/2024/04/golden-gate.png',
  '/wp-content/uploads/2024/04/fork-bg.png',
  '/wp-content/uploads/2024/04/fork-bg2.png',
  '/wp-content/uploads/2024/04/fork-leaf.png',
  '/wp-content/uploads/2025/09/fork-1.png',
  '/wp-content/uploads/2024/04/onion.png',
  '/wp-content/uploads/2024/04/stone1.png',
  '/wp-content/uploads/2024/04/stone2.png',
  '/wp-content/uploads/2024/04/stone3.png',
  '/wp-content/uploads/2024/04/load-more-btn.svg',
  // Videos
  '/wp-content/themes/Justfalafel/assets/video/home_web-1.mp4',
  '/wp-content/themes/Justfalafel/assets/video/eat_web.mp4',
  '/wp-content/themes/Justfalafel/assets/video/jf-gallery-grid.mp4',
];

async function downloadOne(rel) {
  const url = BASE + rel;
  const localRel = rel.replace(/^\/wp-content\/(uploads|themes\/Justfalafel\/assets)\//, '');
  // Map to public folder
  let targetPath;
  if (rel.endsWith('.mp4')) targetPath = join(PUBLIC, 'videos', rel.split('/').pop());
  else if (rel.endsWith('.ico') || rel.includes('favicon')) targetPath = join(PUBLIC, 'seo', rel.split('/').pop());
  else targetPath = join(PUBLIC, 'images', localRel.replace(/^images\//, ''));

  if (existsSync(targetPath)) {
    process.stdout.write('.');
    return { url, ok: true, cached: true };
  }

  await mkdir(dirname(targetPath), { recursive: true });
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }});
    if (!res.ok) {
      console.error(`\n[ERR] ${res.status} ${url}`);
      return { url, ok: false };
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(targetPath, buf);
    process.stdout.write('o');
    return { url, ok: true };
  } catch (e) {
    console.error(`\n[ERR] ${url}: ${e.message}`);
    return { url, ok: false };
  }
}

async function batch(items, n = 4) {
  const results = [];
  for (let i = 0; i < items.length; i += n) {
    const chunk = items.slice(i, i + n);
    const r = await Promise.all(chunk.map(downloadOne));
    results.push(...r);
  }
  return results;
}

console.log(`Downloading ${ASSETS.length} assets...`);
const r = await batch(ASSETS, 6);
const ok = r.filter(x => x.ok).length;
const failed = r.filter(x => !x.ok);
console.log(`\n\nDone: ${ok}/${r.length} succeeded`);
if (failed.length) {
  console.log('\nFailures:');
  failed.forEach(f => console.log('  ' + f.url));
}
