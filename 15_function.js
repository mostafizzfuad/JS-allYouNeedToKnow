function functionName() {
    // statements
    console.log('Hello World!!')
}
functionName() // call / invoke

// for (var i = 0; i < 10; i++) {
//     functionName()
// }

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
sum(50, 60) // argument pass


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




console.log()




/****** arguments object ********/
// arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
// ai arguments object er karone amra chaile parameter bad diyew function declare korte pari & bahire theke data provide korte pari.

function func1(a, b, c) { // parameter list na likhlew aita kaj korbe
    console.log(arguments)
    console.log(arguments.length)

    // console.log(arguments[0]); // 1
    // console.log(arguments[1]); // 2
    // console.log(arguments[2]); // 3

    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}
func1(1, 2, 3)


// jokhn function er moddhe variable dorkar hbe na, tkhn chile arguments diye data calculation kora jai.. 
// example : sum function
function sumFunc() {
    var sum  = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}
sumFunc(1, 2, 3)
sumFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)



console.log()



/****** return *******/
// return example : 1
function helloFunction(a, b) {
    var result = a + b
    return result
}
var hello = helloFunction(2, 5)
console.log(hello)

// return example : 2
function birthCalculator(birthYear) {
    return 2023 - birthYear
}
console.log(birthCalculator(1998))

// return example : 3
function person(name, age) {
    return {
        Name : name,
        Age : age
    }
    console.log('I will never be shown')
    // return keyword pelei function okhanei break korbe. nicher line execute korbe na
}
console.log(person('Mostafizur', 25))



console.log()



/****** function expression *******/
// function expression : variable er moddhe annonymous function assign / declare kora...
var addition = function (a, b) {
    return a + b
}
console.log(addition(50, 100))
var another = addition
console.log(typeof another)
console.log(another(100, 150))


/****** annonymous function *******/
setTimeout(function () {
    console.log('I will call after 5 seconds')
} , 5000)


/****** inner function / nasted function *******/
function something(greet, name) {
    function sayHi() {
        console.log(greet, name)
    }
    sayHi() // invoke sayHi function
}
something('Good Morning', 'Mostafizur')


// example inner function
function nothing(greet, name) {
    function getFirstName() {
        if (name) { // jodi name thake
            return name.split(' ')[0] // split() method space/comma dara akta long string ke word jukto array te vag kore fele. akhane amra space dara word er array te vag kore fellam. jar index 0 hocche first word/firstName/Mostafizur
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


// function scoping example
function test(n) {

    function a() {
        return n % 3 === 0
    }

    function b() {
        return n % 5 === 0
    }

    if (a() && b()) {
        console.log(n + ' is divisable by both 3 and 5')
    } else {
        console.log('not a valid number')
    }

}

test(10)
test(15)





/********** scope define *********
 * global variable sobar kache accessable.
 * child function er kono data te tar parent function er kono access nei.
 * parent function er jekono data tar child function er jonno accessable.
 * child function tar block er moddhe kono variable khuje na pele, tar upper parent function theke access nite chaibe.
 * global scope variable & function scope variable same name e hoile, sei function er moddhe function scope variable er value pradhanno pabe. 
 * inner function ke invoke korte hole, tar parent function theke invoke kora lagbe.
 ********************************/