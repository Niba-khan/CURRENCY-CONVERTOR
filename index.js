#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.red.italic("Enter from Currency"),
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: chalk.yellow.italic("Enter to Currency"),
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: chalk.blue.italic('Enter your Amount'),
        type: 'number',
    }
]);
let fromAmount = currency[userAnswer.from]; // exchange rate
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; //USD based currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
/*console.log(fromAmount);
console.log(toAmount);
console.log(amount);*/ 
