// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
//empty array case
//const emptyUserNames: string[] = [];
// non empty array case
let userNames = ["iqra", "urooj", "rubab", "shagufta", "hussain", "fatma", 'maaz', 'sir hamza'];
//functional case
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log(`We need to find some users!`);
        return;
    }
    for (const username of usernames) {
        if (username.toLowerCase() === "urooj") {
            console.log(`Hello urooj, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
console.log(`For non empty usernames:\n`);
greetUsers(userNames);
// to make array empty we just assaging an empty array to usernames
userNames = [];
console.log(`For empty usernames:\n`);
greetUsers(userNames);
export {};
