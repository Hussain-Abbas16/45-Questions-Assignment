import chalk from "chalk";

let myFriend: string = "Quaid-e-Azam Muhammad Ali Jinnah";

let nameInUpperCase: string = myFriend.toUpperCase();
console.log(nameInUpperCase);

let nameInLowerCase: string = myFriend.toLowerCase();
console.log(nameInLowerCase);

let letters: string[] = myFriend.split(" ");

let nameInTitleCase: string = "";

for (let i = 0; i < letters.length; i++) {
    nameInTitleCase += letters[i].charAt(0).toUpperCase() + letters[i].slice(1).toLowerCase() + " "
}
console.log(nameInTitleCase);
