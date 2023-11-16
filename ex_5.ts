import chalk from "chalk";

let famous_person = "Allama Iqbal once said:";
let message: string = famous_person + '" Khudi ko ker buland itna k har taqdeer se pehle,khuda bande se khud pochey bata teri raza kia hai. "'
console.log(chalk.bold.italic.magentaBright`${message}`);
