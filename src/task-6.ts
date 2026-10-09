function getFirstElement<T>(items: T[]): T {
  return items[0];
}

const firstNumber = getFirstElement<number>([10, 20, 30]);
const firstString = getFirstElement<string>(["Apple", "Banana"]);
const firstBoolean = getFirstElement<boolean>([true, false]);

console.log(firstNumber, firstString, firstBoolean);
