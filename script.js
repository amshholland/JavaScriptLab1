// Life events
// Variables
const name = "Amber";
const birthday = "June 15"
let age = 29;
let detroitGC = true;
let lifeEvents = ['I was born in Newport News, VA.',
    'I went to SVSU.',
    'I got married in 2017.',
    'I will graduate GC FullStack bootcamp in June.'
];

if (detroitGC === true) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, MI. I am currently ${age} years old and my birthday is on ${birthday}.`);
}
else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

// Iterate through lifeEvents array
for (i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}


// Random numbers
// Variables
let counter = 0;

while (true) {
    let randomNumber = Math.floor(Math.random() * 11); // Generates number from 0 - 10

    if (randomNumber !== 5) {
        counter++;
        console.log(`${randomNumber} !== 5`);
    }
    else {
        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
}