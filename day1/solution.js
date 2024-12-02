import readInput from '../helper.js';

export function solution() {
  const input = readInput(1).split('\n');

  let list = { one: [], two: [] }
  input.forEach(pair => {
    const number = pair.split('   ');
    list.one.push(Number(number[0]));
    list.two.push(Number(number[1]));
  });

  list.one.sort();
  list.two.sort();

  function partOne(){
    let result = 0;
    for (let index = 0; index < list.one.length; index++) {
      result += Math.abs(list.one.at(index) - list.two.at(index));
    }
    return result;
  }

  function partTwo(){
    let countedNum = {};
    list.two.forEach(value => {
        countedNum[value] = (countedNum[value] || 0) + 1;
    })
    let result = 0;
    list.one.forEach(number => {
      result += number * (countedNum[number] ? countedNum[number] : 0)
    })
    return result;
  }

  return `Part 1: ${partOne()} / Part 2: ${partTwo()}`;
}
