var userName = 'Alberto';

userName ? console.log (`Hello, ${userName}.`) : console.log ('Hello!');

userQuestion = "Will I achieve my goal?";

console.log (userQuestion);

var randomNumber = Math.floor(Math.random() * 7);
console.log(randomNumber)

var eightBall = ""

if (randomNumber === 0){
    console.log('It is certain');
}else if (randomNumber === 1){
    console.log('It is decidedly so');
}else if (randomNumber === 2){
    console.log('Reply hazy try again');
}else if (randomNumber === 3){
    console.log("Cannot predict now");
}else if (randomNumber === 4){
    console.log("Do not count on it");
}else if (randomNumber === 5){
    console.log('My sources say no');
}else if (randomNumber === 6){
    console.log('Outlook not so good');
}else 
    console.log('Signs point yes');
