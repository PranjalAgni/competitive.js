/**
 * @author PranjalAgni
 * @createdAt 04/28/2021 12:30:40
 */
// https://codeforces.com/problemset/problem/136/A

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

const main = () => {
  const N = parseInt(readline());
  const friends = readline()
    .split(' ')
    .map((x) => parseInt(x));
  const friendsGaveVsRecieved = {};
  friends.forEach((friend, idx) => {
    friendsGaveVsRecieved[friend] = idx + 1;
  });

  const answers = [];
  for (let idx = 1; idx <= N; idx++) {
    answers.push(friendsGaveVsRecieved[idx]);
  }

  console.log(answers.join(' '));
};
