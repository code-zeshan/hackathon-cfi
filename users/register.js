import { read } from "fs";
import fs from "fs/promises"
import readline from "readline-sync"

async function registerUser(){
    let userInput = readline.question("Enter your Username: ");
    let passInput = readline.question('Enter your password: ');

    let readDB = await fs.readFile("./db.json", "utf-8");
    // console.log((readDB, typeof readDB));

    let stringtoObj = JSON.parse(readDB);

    // console.log(stringtoObj, typeof stringtoObj);
    let duplicateCheck = stringtoObj.users.find((x)=>x.username === userInput)
    // console.log(duplicateCheck);

    if(duplicateCheck){
        console.log("User Already Exists");
        return
    }

    stringtoObj.users.push({username:userInput, password:passInput, todo:[]});

    await fs.writeFile("./db.json", JSON.stringify(stringtoObj));


} 


async function loginUser(){
    let userINput = readline.question("Enter your Username: ");
    let passInput = readline.question("Enter your password: ");

}

export default registerUser