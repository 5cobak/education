import { sum } from './sum';

describe('first test', () => {
  test('example', () => {
    expect(true).toBeTruthy();
    expect(sum(2, 2)).toBe(4);
  });
});
