import readInput from '../helper.js';

export function solution() {
  const [ rulesSection , updatesSection ] = readInput(5).split(/\n\s*\n/);
  let resultP1 = 0, resultP2 = 0;

  const rules = rulesSection.split(/\n/).map(rule => rule.split('|').map(Number));
  let ruleMap = {};
  rules.forEach(rule => {
    !ruleMap[rule[0]] ? ruleMap[rule[0]] = [rule[1]] : ruleMap[rule[0]].push(rule[1])
  })

  const updates = updatesSection.split(/\n/).map(update => update.split(',').map(Number));
 
  let incorrectUpdates = [];
  
  const checkUpdate = (update, part) => {
    let failNum = 0, failed = false;
    for(let i = 1; i < update.length && !failed; i++){
      if(ruleMap[update[i]]){
        for(let j = i; j >= 0; j--){
          if(ruleMap[update[i]].includes(update[j])){
            failed = true;
            failNum = update[i];
            break;
          }
        }
      }
    }
    if(part === 1){
      failed ? incorrectUpdates.push({failNum, update}) : resultP1 += update[Math.floor(update.length / 2)]
    }else if(part === 2){
      failed ? checkUpdate(swapNum(failNum, update), 2) : resultP2 += update[Math.floor(update.length / 2)];
    }
  }

  const swapNum = (failNum, update) => {
    const index = update.indexOf(failNum);
    [update[index - 1], update[index]] = [update[index], update[index - 1]];
    return update;
  }

  updates.forEach(update => checkUpdate(update, 1))
  incorrectUpdates.forEach(({failNum, update}) => checkUpdate(swapNum(failNum, update), 2))

  return `Part 1: ${resultP1} / Part 2: ${resultP2}`;

}