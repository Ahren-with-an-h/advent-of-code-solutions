const fs = require("fs");
const path = "input-6.txt";
// const path = "test.txt";
const arraySize = 1000;

function solve() {
  const instructions = cleanInstructions(path);
  const grid = new Array(arraySize);
  buildGrid(grid);

  // Follow instructions from input file
  instructions.forEach((instruction) => {
    const start = instruction["start"];
    const stop = instruction["stop"];

    for (let x = start[0]; x <= stop[0]; x++) {
      for (let y = start[1]; y <= stop[1]; y++) {
        grid[x][y] = adjustLight(grid[x][y], instruction["power"]);
      }
    }
  });

  // Determine how much power is used
  totalPower = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      totalPower += grid[x][y];
    }
  }

  console.log("Total power used: ", totalPower);
}

// Convert instructions to an array of objects
function cleanInstructions(path) {
  const data = fs.readFileSync(path).toString().split("\r\n");
  const instructions = [];

  data.forEach((line) => {
    line = line.replace(" through ", " ");
    if (line.startsWith("turn ")) {
      line = line.replace(" ", "_");
    }
    line = line.split(" ");

    const instruction = {};
    instruction["power"] = line[0];
    const start = line[1].split(",");
    const stop = line[2].split(",");
    instruction["start"] = [parseInt(start[0]), parseInt(start[1])];
    instruction["stop"] = [parseInt(stop[0]), parseInt(stop[1])];
    instructions.push(instruction);
  });
  return instructions;
}

function buildGrid(grid) {
  for (let i = 0; i < arraySize; i++) {
    const row = new Array(arraySize);
    row.fill(0);
    grid[i] = row;
  }
}

function adjustLight(light, power) {
  if (power === "toggle") {
    light += 2;
  } else if (power === "turn_on") {
    light += 1;
  } else if (power === "turn_off") {
    if (light > 0) {
      light -= 1;
    }
  }
  return light;
}

solve();
