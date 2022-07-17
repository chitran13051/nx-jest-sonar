import { sayGoodBye } from './say-good-bye';

describe('sayGoodBye', () => {
  it('should work', () => {
    expect(sayGoodBye()).toEqual('say-good-bye');
  });
  it('dummy test', () => {
    expect('hello').toBe('hello');
  });
  it('dummy test 2', () => {
    let dummyVar;
    expect('hello1').toBe('hello1');
  });
});
