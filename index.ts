#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message:"enter your first number" , type : "number" , name : "numer1"},
    { message:"enter your second number" , type : "number" , name : "numer2"},
    { message:"select the operator" , type : "list" , name : "operators" , choices:["+","-","*","/"]}
])
if (answer.operators=== "+"){
    console.log( answer.numer1 + answer.numer2)
}
else if (answer.operators=== "-"){
    console.log(answer.numer1 - answer.numer2)
}
else if (answer.operators=== "*"){
    console.log(answer.numer1 * answer.numer2)
}
else if (answer.operators=== "/"){
    console.log(answer.numer1 / answer.numer2)
}
else{console.log("select valid operator")}