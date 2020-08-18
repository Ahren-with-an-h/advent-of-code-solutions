const fs = require("fs");
const path = "./input-3.txt";
// const path = "./test.txt";


function q1() {
  const data = fs.readFileSync(path).toString().split("");

  function address(x, y) {
    return `${x}_${y}`;
  }

  const city = new Set();
  let x = 0;
  let y = 0;
  city.add(address(x, y));

  data.forEach((direction) => {
    if (direction === ">") x++;
    else if (direction === "<") x--;
    else if (direction === "^") y++;
    else if (direction === "v") y--;
    else console.log("Input Error");

    city.add(address(x, y));
  });

  console.log(city.size);
}

function q2() {
  const data = fs.readFileSync(path).toString().split("");

  class Santa {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.locations = {};
      this.markSpot(this.x, this.y);
    }

    markSpot(x, y) {
      const coordinates = `${x}_${y}`;
      if (this.locations.hasOwnProperty(coordinates)) {
        this.locations[coordinates] += 1;
      } else {
        this.locations[coordinates] = 1;
      }
    }

    move(direction) {
      if (direction === ">") this.x++;
      else if (direction === "<") this.x--;
      else if (direction === "^") this.y++;
      else if (direction === "v") this.y--;

      this.markSpot(this.x, this.y);
    }
  }

  realSanta = new Santa();
  roboSanta = new Santa();

  let realSantasMove = true;

  data.forEach((direction) => {
    if (realSantasMove) {
      realSanta.move(direction);
    } else {
      roboSanta.move(direction);
    }
    realSantasMove = !realSantasMove;
  });

  function mergeVisits(santa) {
    for (const [house, visits] of Object.entries(santa.locations)) {
      if (house in totalVisits) {
        totalVisits[house] += visits;
      } else {
        totalVisits[house] = visits;
      }
    }
  }

  const totalVisits = {};
  mergeVisits(realSanta);
  mergeVisits(roboSanta);

  let housesWithMultipleVisits = 0;

  for (const [house, visits] of Object.entries(totalVisits)) {
    if (visits > 0) {
      housesWithMultipleVisits++;
    }
  }

  console.log(housesWithMultipleVisits);
}

// q1();
q2();
