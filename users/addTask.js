import readline from "readline-sync";
import fs from "fs/promises";

async function addTask(loggedInUser) {
  if (!loggedInUser) {
    console.log("No Login User! You need to login First!");
    return;
  }
  let title = readline.question("Enter your task: ");
  let description = readline.question("Enter your Description: ");

  let readDB = await fs.readFile("./db.json", "utf-8");
  let stringTooObject = JSON.parse(readDB);

  let checkUserinDB = stringTooObject.users.find((x)=> x.username === loggedInUser.username);
  const newTask = {id:Date.now(),title:title,description:description}
  checkUserinDB.todos.push(newTask);

  await fs.writeFile("./db.json", JSON.stringify(stringTooObject));
  console.log("Task added successfully!");
}

export default addTask;
