// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let travelDestinations = ["Paris", "SouthKorea", "Dubai", "Caymen", "Turkey", "Madina", "Portugul"];
// • Print your array in its original order.
console.log("Original Order");
console.log(travelDestinations);
// • Print your array in alphabetical order without modifying the actual list.
console.log("\n Alphabetical Order without modifying the actual list");
console.log([...travelDestinations].sort());
// • Show that your array is still in its original order by printing it.
console.log("\nShowing array is still in its original order");
console.log(travelDestinations);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n Reverse Alphabetical order without modfying the actual list");
console.log([...travelDestinations].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in its original order");
console.log(travelDestinations);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n Reverse order");
travelDestinations.reverse();
console.log(travelDestinations);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Back to original");
travelDestinations.reverse();
console.log(travelDestinations);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n Change to alphabatical order");
travelDestinations.sort();
console.log(travelDestinations);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n Change to reverse alphabatical order");
travelDestinations.reverse();
console.log(travelDestinations);
export {};
