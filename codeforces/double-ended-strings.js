/**
 * @author PranjalAgni
 * @createdAt 05/09/2021 12:09:15
 */
// https://codeforces.com/problemset/problem/1506/C

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
    let maxLength = 0;
    for (let jdx = 0; jdx < strA.length; jdx++) {
      const wordSoFar = strA.substring(startPos, jdx + 1);
      if (strB.includes(wordSoFar)) {
        maxLength = Math.max(maxLength, jdx - startPos + 1);
      } else {
        startPos += 1;
      }
    }

    const answer = strA.length - maxLength + strB.length - maxLength;
    console.log(answer);
  }
};
