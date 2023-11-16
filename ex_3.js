let myFriend = "Quaid-e-Azam Muhammad Ali Jinnah";
let nameInUpperCase = myFriend.toUpperCase();
console.log(nameInUpperCase);
let nameInLowerCase = myFriend.toLowerCase();
console.log(nameInLowerCase);
let letters = myFriend.split(" ");
let nameInTitleCase = "";
for (let i = 0; i < letters.length; i++) {
    nameInTitleCase += letters[i].charAt(0).toUpperCase() + letters[i].slice(1).toLowerCase() + " ";
}
console.log(nameInTitleCase);
export {};
