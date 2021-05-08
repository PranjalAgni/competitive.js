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

const getStringByLength = (strA, strB) => {
  const lenA = strA.length;
  const lenB = strB.length;

  if (lenA < lenB) return [strA, strB];

  return [strB, strA];
};

const main = () => {
  const rows = parseInt(readline());

  for (let idx = 0; idx < rows; idx++) {
    const wordA = readline();
    const wordB = readline();

    const [strA, strB] = getStringByLength(wordA, wordB);
    let startPos = 0;
    for (let jdx = 0; jdx < strA.length; jdx++) {
      const wordSoFar = strA.substring(startPos, jdx);
      if (!strB.includes(wordSoFar)) {
      }
    }
  }
};
