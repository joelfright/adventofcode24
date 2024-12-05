import readInput from '../helper.js';

export function solution() {
  const [ rulesSection , updatesSection ] = readInput(5).split(/\n\s*\n/);
  let resultP1 = 0;

  const rules = rulesSection.split(/\n/).map(rule => rule.split('|').map(Number));
  let ruleMap = {};
  rules.forEach(rule => {
    !ruleMap[rule[0]] ? ruleMap[rule[0]] = [rule[1]] : ruleMap[rule[0]].push(rule[1])
  })

  const updates = updatesSection.split(/\n/).map(update => update.split(',').map(Number));
  let failed = false;
  updates.forEach(update => {
    failed = false;
    for(let i = 1; i < update.length && !failed; i++){
      if(ruleMap[update[i]]){
        for(let j = i; j >= 0; j--){
          if(ruleMap[update[i]].includes(update[j])){
            failed = true;
            break;
          }
        }
      }
    }
    if(!failed){
      resultP1 += update[Math.floor(update.length / 2)]
    }
  })

  return `Part 1: ${resultP1}`;

}