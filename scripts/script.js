let name = "Lauren Mooney";
let age = 26;
let birthday = "February 2";
let detroitGC = true;
let lifeEvents = ["I grew up in Lincoln Park, MI.", "I graduated from UDM with a BS in biology.","I used to work as a medical scribe.","I have hit a personal record of 320 lbs on the leg press." ];


// if/else
if (detroitGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

// for loop
for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

// random number
let randomNumber = Math.floor(Math.random() * 11);

//counter 
let counter = 0;

// while loop
while (true) {
    if (randomNumber !== 5) {
        console.log(`${randomNumber} !== 5`);
        randomNumber = Math.floor(Math.random() * 11);
        counter++;
    } else {
        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
}

