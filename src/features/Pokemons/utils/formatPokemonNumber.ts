export function formatPokemonNumber(num: number): string {
  if (num >= 1 && num <= 9) {
    return `#000${num}`;
  } else if (num >= 10 && num <= 99) {
    return `#00${num}`;
  } else if (num >= 100 && num <= 999) {
    return `#0${num}`;
  }
  return '#' + num.toString(); // No changes for 1000-9999
}
