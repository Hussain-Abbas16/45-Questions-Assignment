import chalk from "chalk";

let guestList : string[] = ['Muniba Mazari','Qasim Ali Shah'
,'Hammad Safi','Sarmad Tariq','Ali Ahmad Awan'
,'Tanzila Khan','Arif Siddiqui','Arif Siddiqui'];

guestList.forEach((guestName)=>{
    console.log(`Dear ${chalk.yellowBright.italic(guestName)}, youre invited to governaor house. we'll be happy to have you..`);
    
})
