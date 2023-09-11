// loops : loops are statement which execute some block of code Repeatedly until the condition is False.
// loops and conditions are two main fundamental concepts of core programming.

/************ loops *************
 * 
 * for loop
 * while loop
 * do while loop
 * 
 *******************************/





/************ for loops *************/
// write a program thats prints your name 10 times
for (var i = 0; i < 10; i++) {
    console.log('Mostafizur Rahman Fuad')
}

// write a program thats print 1-100
for (var i = 1; i <= 100; i++) {
    console.log(i)
}

// write a program thats print 1-100 odd numbers
for (var i = 1; i <= 100; i+=2) {
    console.log(i)
}

// write a program thats sum 1-10 numbers
var sum = 0
for (var i = 1; i <= 10; i++) {
    sum += i
} 
console.log(sum) // 55

// write a program thats sum 1-10 even numbers
var sum = 0
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        sum += i
    }
} 
console.log(sum) // 30




/************ while loops *************/
// write a program thats print 1-100 even numbers
var i = 2
while (i <= 100) {
    console.log(i)
    i+=2
}



// random number game using while loop
var isRunning = true

while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1) // 1-10
    if (rand == 9) {
        console.log('Winner Winner Chicken Dinner')
        break; // isRunning = false
    } else {
        console.log('You have got ' + rand)
    }
}





/************ do while loops *************/
// write a program thats print your name 10 times
var i = 1
do {
    console.log('Mostafizur Rahman Fuad')
    i++
} while (i <= 10)







/************ nasted loops *************/
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

var numberOfRows = 5
for (var row = 1; row <= numberOfRows; row++) {
    var result = ''
    for (var col = 1; col <= row; col++) {
        result += col + ' '
    }
    console.log(result)
}



// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

var numberOfRows = 5
for (var row = 1; row <= numberOfRows; row++) {
    var result = ''
    for (var col = 1; col <= numberOfRows; col++) {
        result += '* '
    }
    console.log(result)
}





/************ break *************/
for (var i = 1; i < 10; i++) {
    if (i % 5 == 0) {
        break
    } else {
        console.log(i)
    }
}





/************ continue *************/
for (var i = 1; i < 10; i++) {
    if (i == 3 || i == 7) {
        continue
    } else {
        console.log(i)
    }
}






/************ infinity loop *************/
for (var i = 1; i < 10; i--) {
    console.log(i)
}

// infinite for loop structure
for (; ;) {

}