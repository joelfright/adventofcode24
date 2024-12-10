import readInput from '../helper.js';

export function solution() {
  const input = readInput(6).split('\n').map(line => Array.from(line.trim()));
  let resultP1 = 0, resultP2 = 0;

  let pos, obstaclePos = [], visitedPos = [], moveDirection = 'up';

  input.forEach((row, i) => 
    row.forEach((value, j) => {
      if (value === '^') pos = [i, j];
      if (value === '#') obstaclePos.push([i, j]);
    })
  );
  
  const isObstacle = ([x, y]) => obstaclePos.some(([ox, oy]) => x === ox && y === oy);
  
  const directions = {
    up: [-1, 0],
    right: [0, 1],
    down: [1, 0],
    left: [0, -1]
  };
  
  const nextDirection = dir => ({ up: 'right', right: 'down', down: 'left', left: 'up' }[dir]);
  
  while (pos[0] >= 0 && pos[1] >= 0 && pos[0] < input.length && pos[1] < input[0].length) {
    const [dx, dy] = directions[moveDirection];
    pos = [pos[0] + dx, pos[1] + dy];
    visitedPos.push(pos);
  
    if (isObstacle(pos)) {
      visitedPos.pop();
      pos = [pos[0] - dx, pos[1] - dy];
      moveDirection = nextDirection(moveDirection);
    }
  }
  
  const uniqueArr = [...new Set(visitedPos.map(JSON.stringify))].map(JSON.parse);
  resultP1 = uniqueArr.length;

  return `Part 1: ${resultP1} / Part 2: ${resultP2}`;

}