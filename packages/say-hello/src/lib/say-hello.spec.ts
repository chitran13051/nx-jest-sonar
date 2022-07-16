import { sayHello } from './say-hello';

describe('sayHello', () => {
  it('should work if have a name', () => {
    expect(sayHello('Tony')).toEqual('Hi Tony, how are you?');
  });
  it('should say default', () => {
    expect(sayHello()).toEqual('Hi ^_^');
  });
});
