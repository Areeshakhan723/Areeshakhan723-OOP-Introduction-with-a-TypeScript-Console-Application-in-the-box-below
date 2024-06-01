// Import necessary modules
import chalk from "chalk";
import readline from "readline";

// create a person class
class Person {
  private personality: string; // private variable accessible in the class

  // Constructor sets default personality value to "Mystery"
  public constructor() {
    this.personality = "Mystery";
  }

  // Method to ask a question and determine personality based on answer
  public AskQuestion(answer: number): void {
    if (answer === 1) {
      this.personality = "Extrovert";
    } else if (answer === 2) {
      this.personality = "Introvert";
    } else {
      this.personality = "You are still Mistery"; // Corrected typo and clarified message
    }
  }
  // This method returns the current value of the personality
  public GetPersonality(): string {
    return this.personality;
  }
}
// Define a Student class that extends Person class
class Student extends Person {
  // private field hold any data assigned Name property
  private _name: string;

  public constructor() {
    super();
    this._name = "";
  }

  // Getter method for the name property
  get name(): string {
    return this._name;  
  }

  // Setter method for the name property
  set name(value: string) {
    this._name = value;
  }
}

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let myInput: string; // Variable to store user's input
let myName: string; // Variable to store user's name

// Prompt user for their name                             // callback
rl.question(chalk.bold.greenBright("What is your name?"), (Name: string) => {
  myName = Name; // store the user name
  let myStudent = new Student(); // create a new student object
  myStudent.name = myName; // Set the student's name

  // Ask the second question
  rl.question(chalk.bold.greenBright(chalk.bold.yellowBright("Type 1:"),"If you like to talk to others?",
  chalk.bold.yellowBright("Type 2:")," If you would rather keep to yourself?"),(answer: string) => {
      myInput = answer; // assign the answer value to input vailable
      myStudent.AskQuestion(parseInt(myInput)); // Convert answer to integer and assign answer value
      console.log(
        chalk.bold.magentaBright(
          `Your Name is ${
            myStudent.name
          }! and Your personality type is ${myStudent.GetPersonality()}!`
        )
      );
      rl.close();
    }
  );
});
