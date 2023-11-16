import chalk from "chalk";
let myFriend = "ayesha memon queen"; // i make an simple variable called myfriend
// name in uppercase 
let nameInUpperCase = myFriend.toUpperCase(); // then used touppercase() method to show name in capital alphabets
console.log(`${chalk.blueBright.bold(nameInUpperCase)}`);
// name in lowercase 
let nameInLowerCase = myFriend.toLowerCase(); // i used the method tolowercase(), to lowercase my freind name  
console.log(`${chalk.greenBright.bold(nameInLowerCase)}`);
// name in titlecase 
let letters = myFriend.split(" "); // then i used .split () method with "" to have witespace in spelling
let nameInTitleCase = "";
// then i created a for loop function to add some logics for output myfriendname in title case
for (let i = 0; i < letters.length; i++) {
    nameInTitleCase += letters[i].charAt(0).toUpperCase() + letters[i].slice(1).toLowerCase() + " ";
}
console.log(`${chalk.yellow.bold(nameInTitleCase)}`);
// we use ctrl/ to comment the statements
