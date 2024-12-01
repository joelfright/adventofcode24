import readInput from '../helper.js';

export function solution() {
  const input = readInput(1).split('\n');

  // Format the lists
  let list = { one: [], two: [] }
  input.forEach((pair) => {
    const number = pair.split('   ');
    list.one.push(Number(number[0]));
    list.two.push(Number(number[1]));
  });

  // Sort the lists
  list.one.sort();
  list.two.sort();

  // Calculate differences
  let result = 0;
  for (let index = 0; index < list.one.length; index++) {
    result += Math.abs(list.one.at(index) - list.two.at(index));
  }

  return result;
}
