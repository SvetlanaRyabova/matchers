export const players = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export function sortPlayers(arr) {
  arr.sort((a, b) => (a.health > b.health ? 1 : -1));
}
