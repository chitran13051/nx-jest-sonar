import { greaterThanTen, mul } from './mul';

describe('mul', () => {
  it('should work', () => {
    expect(mul(6, 8)).toEqual(48);
  });
});

describe('greateThanTen', () => {
  it('should return `true`', () => {
    expect(greaterThanTen(14)).toBe(true);
  });
});
