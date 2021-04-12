// Calculate paycheck for the week & how many weeks it will take to make $1M
//Variables 
let hours = prompt('How many hours did you work this week?');
let wage = prompt('What is your hourly pay?');
let total = hours * wage;
let millionthBuck = Math.round(1000000 / total);

if (hours <= 40) {
    console.log(`You made $${total.toFixed(2)} this week`);
}
else {
    total = ((hours - 40) * (wage * 1.5)) + (40 * wage); // Total + overtime
    console.log(`You made $${total.toFixed(2)} this week`);
}

// Determine weeks to $1M 
console.log(`If this is how much you make every week, it will take you about ${millionthBuck} weeks to make $1,000,000.00.`);