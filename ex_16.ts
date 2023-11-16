let guestList : string[] = ['Muniba Mazari','Qasim Ali Shah'
,'Hammad Safi'];

for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`);    
}

let newGuestAtBegining : string = 'dr mashood';
guestList.unshift(newGuestAtBegining);

//console.log(guestList);

let newGuestInMiddle : string = 'dr asif';
let middleIndex : number = Math.floor(guestList.length/2);
guestList.splice(middleIndex, 0, newGuestInMiddle)

//4rth step

let myGuestAtEnd : string = "Muhammad ali";
guestList.push(myGuestAtEnd)
//console.log(guestList);

console.log("new set of invitation");

for (let guest of guestList){
    console.log(`Dear ${guest}, you're invited to dinner..`);
    
}
