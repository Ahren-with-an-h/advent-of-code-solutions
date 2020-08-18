const fs = require("fs");
const path = "./input-1.txt";
const input = fs.readFileSync(path);

function q1() {
  console.time("timer");
  let position = 1;
  const dirArray = input.toString().split("");

  const answer = dirArray.reduce((acc, direction) => {
    if (direction === "(") return acc + 1;
    if (direction === ")") return acc - 1;
  }, 0);
  console.timeEnd("timer");
  console.log("q1: ", answer);
}

q1();

function q2() {
  console.time("timer");
  const dirArray = input.toString().split("");
  let accumulator = 0;
  let counter = 0;

  const answer = dirArray.some((c) => {
    counter++;
    if (c === "(") accumulator += 1;
    if (c === ")") accumulator -= 1;

    return accumulator < 0;
  });

  console.timeEnd("timer");
  console.log("q2: ", counter);
}

q2();
