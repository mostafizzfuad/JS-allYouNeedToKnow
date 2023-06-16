function functionName() {
    // statements
    console.log('Hello World!!')
}
functionName() // call / invoke

function add() {
    var a = 10
    var b = 20
    console.log(a + b)
}
add() // call / invoke

function sub() {
    var a = 15
    var b = 5
    console.log(a - b)
}
sub() // call / invoke


/****** argument and parameter *******/
function sum(a, b) { // parameter
    var result = a + b
    console.log(result)
}
sum(30, 40) // argument pass

// example : sum of array
var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = [15, 8, 9]

function sumOfArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)



/****** return *******/
function birthCalculator(birthYear) {
    return 2023 - birthYear // return keyword pelei function okhanei break korbe. nicher line execute korbe na
}
console.log(birthCalculator(1998))

function person(name, age) {
    return {
        Name : name,
        Age : age
    }
    console.log('I will never be shown')
}
console.log(person('Mostafizur', 25))




/****** function expression *******/
var addition = function (a, b) {
    return a + b
}
console.log(addition(50, 100))
var another = addition
console.log(another(100, 150))

/****** annonymous function *******/
setTimeout(function () {
    console.log('I will call after 5 seconds')
} , 5000)

/****** inner function *******/
function something(greet, name) {
    function sayHi() {
        console.log(greet, name)
    }
    sayHi()
}
something('Good Morning', 'Mostafizur')


function nothing(greet, name) {
    function getFirstName() {
        if (name) {
            return name.split(' ')[0]
        } else {
            return ''
        }
    }
    var message = greet + ' ' + getFirstName()
    console.log(message)
}
nothing('Good Night', 'Mostafizur Rahman')


/****** function scoping *******/
var a = 'abc'
function x() {
    // var a = 20
    function y() {
        var a = 10
        console.log(a)
    }
    console.log(a)
    y()
}
x()

// global variable sobar kache accessable
// child function er kono data te tar parent function er kono access nei
// parent function er jekono data tar child function er jonno accessable