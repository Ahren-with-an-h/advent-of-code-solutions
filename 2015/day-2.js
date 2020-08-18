const fs = require("fs");
const path = "./input-2.txt";

function q1() {
  fs.readFile(path, (err, data) => {
    if (err) throw err;

    const wrappingPaperRaw = data.toString().split("\r\n");
    const wrappingPaper = [];
    wrappingPaperRaw.forEach((dimensions) => {
      dimensionsArr = dimensions.split("x");
      wrappingPaper.push(dimensionsArr);
    });

    const totalWrappingPaper = wrappingPaper.reduce((acc, package) => {
      function getAreasOfSides(length, width, depth) {
        let areaArr = [];
        areaArr.push(length * width);
        areaArr.push(length * depth);
        areaArr.push(depth * width);
        return areaArr;
      }

      const areaArr = getAreasOfSides(...package);
      const slack = Math.min(...areaArr);

      let totalArea = 0;
      areaArr.forEach((area) => {
        totalArea += area * 2;
      });

      return acc + totalArea + slack;
    }, 0);

    console.log("q1: ", totalWrappingPaper);
  });
}

q1();

function q2() {
  fs.readFile(path, (err, data) => {
    if (err) throw err;

    const packageDimensionsRaw = data.toString().split("\r\n");
    const packageDimensions = [];

    packageDimensionsRaw.forEach((dimensions) => {
      dimensionsArr = dimensions.split("x");
      packageDimensions.push(dimensionsArr);
    });

    const totalRibbon = packageDimensions.reduce((acc, dimensions) => {
      function getRibbonLength(sides) {
        sides.sort((a, b) => a - b);
        return sides[0] * 2 + sides[1] * 2;
      }
      function getBowLength(d) {
        return d[0] * d[1] * d[2];
      }

      const ribbon = getRibbonLength(dimensions);
      const bow = getBowLength(dimensions);
      const total = ribbon + bow;

      return acc + total;
    }, 0);

    console.log("q2: ", totalRibbon);
  });
}

q2();
