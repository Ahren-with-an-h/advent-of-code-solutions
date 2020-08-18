const fs = require("fs");
const path = "input-5.txt";
const vowels = ["a", "e", "i", "o", "u"];
const data = fs.readFileSync(path).toString().split("\r\n");

function q1() {
  function has3Vowels(phrase) {
    const lettersArr = phrase.split("");
    let vowelCount = 0;
    lettersArr.forEach((letter) => {
      if (vowels.includes(letter)) {
        vowelCount += 1;
      }
    });
    return vowelCount >= 3;
  }

  function containsDoubleLetter(phrase) {
    const lettersArr = phrase.split("");
    for (let i = 0; i < lettersArr.length - 1; i++) {
      const char1 = lettersArr[i];
      const char2 = lettersArr[i + 1];
      if (char1 === char2) {
        return true;
      }
    }
    return false;
  }

  function noBadPatterns(phrase) {
    const badPatterns = ["ab", "cd", "pq", "xy"];
    let noBadMatches = true;

    badPatterns.forEach((pattern) => {
      if (phrase.includes(pattern)) {
        noBadMatches = false;
        return;
      }
    });
    return noBadMatches;
  }

  let passingCount = 0;
  data.forEach((phrase) => {
    if (has3Vowels(phrase) && containsDoubleLetter(phrase) && noBadPatterns(phrase)) {
      passingCount += 1;
    }
  });
  console.log(passingCount);
}

function q2() {
  function pairAppearsTwice(phrase) {
    for (let i = 0; i < phrase.length - 2; i++) {
      const pair = phrase.slice(i, i + 2);
      const lookIn = phrase.slice(i + 2);
      if (lookIn.includes(pair)) {
        return true;
      }
    }
    return false;
  }

  function containsDuplicate2Later(phrase) {
    const lettersArr = phrase.split("");
    for (let i = 0; i < lettersArr.length - 2; i++) {
      const char1 = lettersArr[i];
      const char2 = lettersArr[i + 2];
      if (char1 === char2) {
        return true;
      }
    }
    return false;
  }

  let passingCount = 0;
  data.forEach((phrase) => {
    if (containsDuplicate2Later(phrase) && pairAppearsTwice(phrase)) {
      passingCount += 1;
    }
  });
  console.log(passingCount);
}

// q1();
q2();
