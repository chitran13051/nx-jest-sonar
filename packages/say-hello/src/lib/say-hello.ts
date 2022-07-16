export function sayHello(name?: string): string {
  if (!name) return 'Hi ^_^'; // should be a Code Smell?
  return `Hi ${name}, how are you?`;
}
