const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "./input.txt"), "utf8")
  .split("\n")
  .map((i) => i * 1);

const day01_part1 = (input) => input.reduce(([count, acc], curr) => [acc < curr ? count + 1 : count, curr], [0, Math.MAX_INFINITY])[0];
const sumByThree = (input) => input.map((a, i) => (i >= 2 ? a + input[i - 1] + input[i - 2] : null)).filter((i) => i !== null);
const day02_part2 = (input) => day01_part1(sumByThree(input));

console.log(day01_part1(input)); // 1298
console.log(day02_part2(input)); // 1248
