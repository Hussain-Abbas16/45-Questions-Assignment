// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// step 1 arrays
const current_users: string[] = ['IQRA','Urooj','Rubab','shagufta','hussain','fatma','maaz','sir hamza']

const new_users: string[] = ['Shahid','amir','Ayesha','AMNA','ali','areeba','maham','sir okasha']

// .map
const num1: number[] = [1, 2, 3, 4, 5]
console.log(num1);

const num2: number[] = num1.map(i => i ** 2)
console.log(num2);

//step 2 functions

function checkUserNames(current_users: string[], new_users: string[]): void {
// 1st step of func
    const loweCasedCurrentUsers = current_users.map(user => user.toLowerCase());
    // 2nd step of func
    for (const newUser of new_users){
        const loweCasedNewUsers = newUser.toLowerCase();
        if(loweCasedCurrentUsers.includes(loweCasedNewUsers)){
            console.log(`username "${newUser}" is already taken.
            Please enter a new username`);    
        } else {
            console.log(`username "${newUser}" is available`);
            
        }
    }
    
}
checkUserNames(current_users, new_users);
