export function extractPokemonId(url: string): number {
  const parts = url.split('/');
  return parseInt(parts[parts.length - 2], 10);
}

export function formatToThreeDigits(num: number): string {
  return num.toString().padStart(3, '0');
}
