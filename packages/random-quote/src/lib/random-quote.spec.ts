import { randomQuote, sayHi } from './random-quote';

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
