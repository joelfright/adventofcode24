import readInput from '../helper.js';

export function solution() {
  const input = readInput(2).split('\n');
  let resultP1 = 0;
  let resultP2 = 0;

  const invalidLevel = (level, diff) => (diff.filter(a => Math.abs(a) < 4).length < level.length - 1) || (diff.some(a => a <= 0) && diff.some(a => a >= 0))

  input.forEach((row) => {
    let level = row.split(' ').map(Number);
    let diff = level.slice(1).map((v, i) => v - level[i]);
    if (invalidLevel(level, diff)) {
      for (let index = 0; index < level.length; index++) {
        let newLevel = level.slice(0, index).concat(level.slice(index + 1));
        let diff = newLevel.slice(1).map((v, i) => v - newLevel[i]);
        if (!(invalidLevel(newLevel, diff))) {
          resultP2 += 1;
          break;
        }
      }
    } else {
      resultP1 += 1;
    }
  })

  resultP2 = resultP1 + resultP2;

  return `Part 1: ${resultP1} / Part 2: ${resultP2}`;
}