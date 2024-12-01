import readline from "readline-sync"
import fs from "fs/promises"
import { read } from "fs";

async function loginUser(){

    let userInput = readline.question("Enter your username: ");
    let passInput = readline.question("Enter your Password: ");

    let readDB = await fs.readFile("./db.json", "utf-8");

    let stringToObject = JSON.parse(readDB);



    let checkUserCredentials =  stringToObject.users.find((x)=> x.username === userInput && x.password == passInput);
    if(checkUserCredentials){
        console.log("You have logged in Successfully!");
        return  checkUserCredentials;
    }
    else{
        console.log("Invalid Credentials! Please Try Again!");
        return null;
    }


}


export default loginUser