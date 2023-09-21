/*********** higher order functions ? *********
 * 
 * 5. we can pass function as an arguments (higher order functions)
 * 6. we can return functions from another function (higher order functions)
 * 
 * **********************************************/

function add(a, b) {
    return a + b
}

function manipulate(a, b, func) { // a = 4, b = 3, func = add
    var c = a + b // 7
    var d = a - b // 1

    // function multiply() {
    //     var m = func(a, b)
    //     return c * d * m
    // }
    // return multiply

    // return functions from another function
    return function() { // parameter pass kora lagbe na.. autometically tar parent theke data access nibe as a closure
        var m = func(a, b) // 7
        return c * d * m // 7 * 1 * 7 = 49
    }
}

var multiply = manipulate(4, 3, add) // pass function as an arguments
console.log(multiply())