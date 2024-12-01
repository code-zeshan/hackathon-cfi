import readline from "readline-sync";
import registerUser from "./users/register.js";
import loginUser from "./users/login.js";
import addTask from "./users/addTask.js";

async function main() {
  console.clear();
let loggedInUser = null;
  const options = [
    "Exit",
    "Register",
    "Login",
    "Edit Task",
    "Delete Task",
    "Delete User",
  ];

  options.map((element, index)=>{
    console.log(`${index}. ${element}`);
  })

  let userOption = readline.questionInt("Enter the Option: ");
  console.log(userOption);
  switch(userOption){
    case 1:
        console.log("Register");
        await registerUser();
        break;
    case 2:
        console.log("Login");
        loggedInUser = await loginUser();
        break;
    case 3:
        console.log("Edit Task");
        await addTask(loggedInUser)
        break;
    case 4:
        console.log("Delete Task");

        break;
    case 5:
        console.log("Delete User");
        break;
    default:
        console.log("Invalid Option!");
        main()
        break;
  }

}

main();