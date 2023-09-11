 
/************ operators **********
 
 * Arithmetic (+ - * / % ++ --)
 * Assignment (= += -= *= /= %=)
 * Comparison (== === != !== > >= < <=)
 * Logical (|| && !)
 * Bitwise (| & ~ ^ << >>)
 * Type (typeof())
 * Ternary Operators
 * String Operators
 
 *********************************/

// == check only values. type doesn't matter
// === type and values both are check

// =! check only values. type doesn't matter
// ==! type and values both are check

// | binary OR
// & binary AND
// ~ binary NOT
// ^ binary XOR
// << left shift
// >> right shift


// typeof operator
console.log(typeof 10)
console.log(typeof '10')



/************ logical operators **********/
// example: find large between three numbers (logical and)
var num1 = 50
var num2 = 60
var num3 = 80

if (num1 > num2 && num1 > num3) {
    console.log('large number = ' + num1)
} else if (num2 > num1 && num2 > num3) {
    console.log('large number = ' + num2)
} else if (num3 > num1 && num3 > num2) {
    console.log('large number = ' + num3)
} else {
    console.log('Numbers are equal')
}


// example: check a letter vowel or consonant (logical or)
var letter = 'B'
letter = letter.toLowerCase();

if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
    console.log('vowel')
} else {
    console.log('consonant')
}



// example of logical not
var a = 10
var b = 20
var check = !(a > b) // using logical not
console.log(check)






/************ ternary operators **********/
// example 1: find large between two numbers
var a = 100
var b = 200
var c = (a > b) ? a : b
console.log(c) 

// example 2: find even or odd
var number = 25
var result = (number % 2 == 0) ? 'even' : 'odd'
console.log(result)





/************ logical operators (and or shorthand) **********/
// example: 1 (or operation)
var shortName = 'MR Fuad' // if shortName is null, then print Mostafizur Rahman Fuad
var fullName = ''

if (shortName.length === 0) {
    fullName = 'Mostafizur Rahman Fuad'
    console.log(fullName)
} else {
    fullName = shortName
    console.log(fullName)
}

// example: 1 (shorthand)
var shortName = '' // if shortName is null, it returns falsy value. that's why fullName prints Mostafizur Rahman Fuad
var fullName = shortName || 'Mostafizur Rahman Fuad'
console.log(fullName)




// example: 2 (and operation)
var isMorning = true
if (isMorning) {
    console.log('Please give me a cup of coffee')
}
// example: 2 (shorthand)
var isMorning = true
isMorning && console.log('Please give me a cup of coffee') // when isMorning is true, then this statement execute console log operation




// example: 3 (and or combination shorthand)
var savings = 200000
var job = true
var gettingMarriage = savings >= 500000 || job 
gettingMarriage && console.log("Ok!! We'are looking for a pretty bride for you")