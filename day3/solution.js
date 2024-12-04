import readInput from '../helper.js';

export function solution() {
  const input = readInput(3);
  let resultP1 = 0;
  let resultP2 = 0;

  const arr = input.match(/mul\([0-9]+\,[0-9]+\)/gm);
  arr.forEach(command => {
    let [num1, num2] = command.slice(4, -1).split(',').map(Number);
    resultP1 += num1 * num2;
  })

  const arr2 = input.match(/(do\(\)|don't\(\)|mul\([0-9]+\,[0-9]+\))/gm);
  let enabled = true;
  arr2.forEach(command => {
    if (command === 'do()') {
      enabled = true;
    } else if (command === "don't()") {
      enabled = false;
    } else if (enabled && command.startsWith('mul(')) {
      let [num1, num2] = command.slice(4, -1).split(',').map(Number);
      resultP2 += num1 * num2;
    }
  })

  return `Part 1: ${resultP1} / Part 2: ${resultP2}`;
}