const md5 = require("md5");
const input = "yzbqklnj";

function q1() {
  let answer = 0;

  while (true) {
    const key = input + answer.toString();
    const hash = md5(key);
    const first5 = hash.slice(0, 5);

    if (first5 === "00000") {
      break;
    }
    answer++;
  }
  console.log(answer++);
}

function q2() {
  let answer = 0;

  while (true) {
    const key = input + answer.toString();
    const hash = md5(key);
    const first6 = hash.slice(0, 6);

    if (first6 === "000000") {
      break;
    }
    answer++;
  }
  console.log(answer++);
}

// q1();
q2();
