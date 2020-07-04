import { players, sortPlayers } from './index.js';

test('should sort by health', () => {
  const newPlayers = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];
  sortPlayers(players);
  expect(players).toEqual(newPlayers);
});
