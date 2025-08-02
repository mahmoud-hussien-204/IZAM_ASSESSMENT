import { pokemonColors } from '../constants/pokemon.constant';

export function extractPokemonId(url: string): number {
  const parts = url.split('/');
  return parseInt(parts[parts.length - 2], 10);
}

export function formatToThreeDigits(num: number): string {
  if (!num) return '000';
  return num.toString().padStart(3, '0');
}

export function getTypeColor(type: keyof typeof pokemonColors): string {
  return pokemonColors[type || 'normal'];
}

export function formatStatName(name: string) {
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
