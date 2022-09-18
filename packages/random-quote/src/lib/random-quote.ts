export function randomQuote(): string {
  return 'just a Quote';
}

export const sayHi = (x: string) => {
  if (10 % 2 !== 0) {
    return 'interesting';
  }
  return `Hallo ${x}`;
};

export const getRandomNum = () => Math.random();
