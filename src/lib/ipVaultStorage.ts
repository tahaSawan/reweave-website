import fs from 'fs';
import path from 'path';

const SLIDE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.pdf']);

export function vaultDir() {
  return path.join(process.cwd(), 'private', 'ip-vault');
}

export function listVaultSlides(): string[] {
  const dir = vaultDir();
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => SLIDE_EXT.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

export function resolveVaultFile(filename: string): string | null {
  const base = path.basename(filename);
  if (base !== filename || base.includes('..')) return null;
  const full = path.join(vaultDir(), base);
  if (!fs.existsSync(full)) return null;
  if (!SLIDE_EXT.has(path.extname(base).toLowerCase())) return null;
  return full;
}
