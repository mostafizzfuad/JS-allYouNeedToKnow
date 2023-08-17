console.log(typeof Math)

console.log(Math.E)
console.log(Math.PI)

var n = 4.589
console.log(Math.abs(n))
console.log(Math.ceil(n))
console.log(Math.floor(n))
console.log(Math.round(n))
console.log(Math.max(400, 500))
console.log(Math.min(400, 500))
console.log(Math.pow(2, 3))
console.log(Math.sqrt(49))

console.log(Math.random()) // 0 to 1
console.log(Math.random() * 6) // 0 to 6
console.log(Math.floor(Math.random() * 6)) // 0 to 5
console.log(Math.floor(Math.random() * 5) + 1) // 1 to 5
console.log(Math.floor(Math.random() * 6) + 1) // 1 to 6
console.log(Math.floor(Math.random() * 11) + 10) // 10 to 20



// guessing game (working in browser console)
/*************************************************
 * guess a number from 1 to 5
 * generate a random number between 1 to 5
 * if the guess number matches random number, then show message won else lost
 * run the game for 5 times
 * show the number of wons and losts
 *************************************************/ 

var numberOfWons = 0
var numberOfLosts = 0

for (let i = 0; i < 5; i++) {
    var guessNumber = parseInt(prompt('Enter a number from 1 to 5 : '))
    var randomNumber = Math.floor(Math.random() * 5) + 1

    if (guessNumber == randomNumber) {
        console.log('You have won')
        numberOfWons++
    } else {
        console.log('You have lost. Random number was ' + randomNumber)
        numberOfLosts++
    }
}

console.log('number of wons: ' + numberOfWons)
console.log('number of losts: ' + numberOfLosts)

