import { randomQuote, sayHi, getRandomNum } from './random-quote';

describe('randomQuote', () => {
  it('should work  correctly', () => {
    expect(randomQuote()).toEqual('just a Quote');
  });
});

describe('sayHi', () => {
  it('should say hi', () => {
    expect(sayHi('Chi')).toEqual('Hallo Chi');
  });
});

describe('getRandomNum', () => {
  it('run', () => {
    expect(getRandomNum()).toBe(10);
  });
});
