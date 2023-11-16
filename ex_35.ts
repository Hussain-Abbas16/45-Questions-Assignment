// Animals: Think of at least three different animals that have a common characteristic. 

const animals: string[] = ['cat', 'dog', 'goat'];

// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
console.log(animals);
for (const animal of animals) {
    console.log(animal);
}

// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
console.log("\n statements about each animal:");
for (const animal of animals) {
    if (animal == 'dog') {
        console.log(`A ${animal} is a great pet.`);
    } else if (animal === 'cat') {
        console.log(`A ${animal} would be a good companion at home.`);
    } else if (animal === 'goat') {
        console.log(`A ${animal} is an adorable pet that also give us a milk.`);
    }
}
// • Add a line at the end of your program stating what these animals have in common.
console.log("what these animals have in common.");

// You could print a sentence such as Any of these animals would make a great pet!

console.log("Any of these animals would make a great pet!");
