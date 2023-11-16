import chalk from "chalk";

let name : string = "\t Aslam Chaudri \n";
console.log(`${chalk.bold.bgGreen("name with whitespace:")},${name}`);

let nameWithoutSpace = name.trim();
console.log(`${chalk.bold.bgGreen("removal of white space:")}, ${nameWithoutSpace}`);

