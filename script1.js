//Variables 
let hours = prompt('How many hours did you work this week?');
let wage = prompt('What is your hourly pay?');
let total = hours * wage;

if (hours <= 40) {
    console.log(`$${total.toFixed(2)}`);
}
else {
    total = ((hours - 40) * (wage * 1.5)) + (40 * wage);
    console.log(`$${total.toFixed(2)}`);
}

let millionthBuck = Math.round(1000000 / total);
console.log(`It will take you about ${millionthBuck} weeks to make $1,000,000.00.`);