// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// • If the alien is green, print a message that the player earned 5 points.

console.log("1st version of code when else will run.....");

let alien_color : string = 'green';

if (alien_color === 'green') {
    console.log("Congratulation! you just earned 5 points.");
    
}else if (alien_color === 'yellow') {
    console.log("Congratulation! you just earned 10 points.")
    
}else if (alien_color === 'red') {
    console.log("Congratulation! you just earned 15 points.")   
}else{
    console.log('unknown alien color');
    
}

// • If the alien is yellow, print a message that the player earned 10 points.
console.log("2nd version of code when else will run.....");

alien_color = 'yellow';

if (alien_color === 'green') {
    console.log("Congratulation! you just earned 5 points.");
    
}else if (alien_color === 'yellow') {
    console.log("Congratulation! you just earned 10 points.")
    
}else if (alien_color === 'red') {
    console.log("Congratulation! you just earned 15 points.")   
}else{
    console.log('unknown alien color');  
};

// • If the alien is red, print a message that the player earned 15 points.
console.log("3rd version of code when else will run.....");

alien_color = 'red';

if (alien_color === 'green') {
    console.log("Congratulation! you just earned 5 points.");
    
}else if (alien_color === 'yellow') {
    console.log("Congratulation! you just earned 10 points.")
    
}else if (alien_color === 'red') {
    console.log("Congratulation! you just earned 15 points.")   
}else{
    console.log('unknown alien color');
    
};

