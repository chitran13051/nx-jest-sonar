import { sayGoodBye } from './say-good-bye';

describe('sayGoodBye', () => {
  it('should work', () => {
    expect(sayGoodBye()).toEqual('say-good-bye');
  });
  it('dummy test', () => {
    expect('hello').toBe('hello');
  });
});
