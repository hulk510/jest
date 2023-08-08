import { isZero } from './isZero';

test('0 is true', () => {
  expect(isZero(0)).toBe(true);
});

test('1 is false', () => {
  expect(isZero(1)).toBe(false);
});
