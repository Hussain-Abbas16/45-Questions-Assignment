let guestList: string[] = ['Muniba Mazari', 'Qasim Ali Shah'
    , 'Hammad Safi', 'Sarmad Tariq', 'Ali Ahmad Awan'
    , 'Tanzila Khan', 'Arif Siddiqui'];

let guestCantMakeIt: string = 'Arif Siddiqui';
console.log(`${guestCantMakeIt} cant make it to dinner`);

let newGuest: string = 'sandeep maheshwari'
let indexOfCantMakeIt: number = guestList.indexOf(guestCantMakeIt);
//console.log(indexOfCantMakeIt);

if (indexOfCantMakeIt !== -1) {
    guestList[indexOfCantMakeIt] = newGuest

}
console.log("second set of invitation:");
guestList.forEach((guest: string) => {
    console.log(`Dear ${guest}, youre invited to diner..`);

})

export{guestList}
