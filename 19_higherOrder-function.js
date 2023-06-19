/*********** higher order functions ? *********
 * 
 * 5. we can pass function as an arguments (higher order functions)
 * 6. we can return functions from another function (higher order functions)
 * 
 * **********************************************/ 

function add(a, b) {
    return a + b
}

function manipulate(a, b, func) {
    var c = a + b
    var d = a - b

    // function multiply() {
    //     var m = func(a, b)
    //     return c * d * m
    // }
    // return multiply

    
    return function() {
        var m = func(a, b)
        return c * d * m
    }
}

var multiply = manipulate(3, 4, add)
console.log(multiply())