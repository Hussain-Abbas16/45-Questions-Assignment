let guestList = ['Muniba Mazari', 'Qasim Ali Shah',
    'Hammad Safi'];
for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`);
}
let newGuestAtBegining = 'dr mashood';
guestList.unshift(newGuestAtBegining);
//console.log(guestList);
let newGuestInMiddle = 'dr asif';
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
//4rth step
let myGuestAtEnd = "Muhammad ali";
guestList.push(myGuestAtEnd);
//console.log(guestList);
console.log("new set of invitation");
for (let guest of guestList) {
    console.log(`Dear ${guest}, you're invited to dinner..`);
}
export {};
