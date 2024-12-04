import readInput from '../helper.js';

export function solution() {
  const input = readInput(4);
  let resultP1 = 0;

  const validateArr = (array) => {
    array.forEach(row => {
      let stringifiedRow = row.join("");
      resultP1 = resultP1 + (stringifiedRow.match(/XMAS/g) || []).length + (stringifiedRow.match(/SAMX/g) || []).length
    })
  }

  const transpose = (arr, degrees) => {
    if (degrees === 45) {
      let rowSize = arr[0].length - 1, colSize = arr.length;

      let result = Array.from({ length: colSize }, (_, layer) => {
        let row = Array(layer).fill(' ');
        for (let i = rowSize; i > layer; i--) {
          row.push(arr[layer][i]);
        }
        for (let i = layer; i < colSize; i++) {
          row.push(arr[i][layer]);
        }

        return row;
      });
      return transpose(result, 90);
    } else if (degrees === 90) {
      return arr[0].map((x, i) => arr.map(x => x[i]));
    }
  }

  const across = input.split('\n').map(line => Array.from(line.trim()));

  validateArr(across)
  validateArr(transpose(across, 90));
  validateArr(transpose(across, 45));
  validateArr(transpose(across.reverse(), 45));

  return `Part 1: ${resultP1}`;

}