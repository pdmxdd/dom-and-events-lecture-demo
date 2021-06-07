// declaring a couple of functions:
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function rollDie(sides) {
    return randomInt(1, sides + 1);
}

// declaring a couple of variables
let firstName = "Paul";
let lastName = "Matthews";

// calling the alert(alertMessage) function to create an alert window in HTML. The argument is the message that will be displayed.
alert(`Hello ${firstName} ${lastName}. Your random number is: ${rollDie(10)}.`);