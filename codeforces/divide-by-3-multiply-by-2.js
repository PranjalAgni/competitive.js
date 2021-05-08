'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}

const getMapFromArray = (arr) => {
  const map = {};

  arr.forEach((elt) => {
    map[elt] = 0;
  });

  return map;
};

const main = () => {
  const len = parseInt(readline());
  const arr = readline()
    .split(' ')
    .map((x) => +x);

  let sequence = [];
  for (let pos = 0; pos < len; pos++) {
    const start = arr[pos];
    const usedMap = getMapFromArray(arr);
    usedMap[start] = 1;
    sequence = [start];

    let isFound = false;

    while (sequence.length !== len) {
      const latest = sequence[sequence.length - 1];
      let isDoublePossible = false;
      let isOneByThreePossible = false;

      if (usedMap[latest * 2] === 0) isDoublePossible = true;

      if (latest % 3 === 0 && usedMap[latest / 3] === 0)
        isOneByThreePossible = true;

      if (isDoublePossible) {
        sequence.push(latest * 2);
        usedMap[latest * 2] = 1;
      } else if (isOneByThreePossible) {
        sequence.push(latest / 3);
        usedMap[latest / 3] = 1;
      }

      if (!isDoublePossible && !isOneByThreePossible) break;

      if (sequence.length === len) isFound = true;
    }

    if (isFound) break;
  }

  console.log(sequence.join(' '));
};

// 4 8 6 3 12 9
