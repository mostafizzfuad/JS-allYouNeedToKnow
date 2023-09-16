/*********** first class functions ? ***********
 * 
 * 1. a function can be stored in a variable
 * 2. a function can be stored in an array
 * 3. a function can be stored in an object
 * 4. we can create function as need
 * 5. we can pass function as an arguments (higher order functions)
 * 6. we can return functions from another function (higher order functions)
 * 
 ***********************************************/

function add(a, b) {
    return a + b
}

// 1. a function can be stored in a variable
var sum = add
console.log(sum(4, 5))
console.log(typeof sum)


// 2. a function can be stored in an array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5, 3))


// 3. a function can be stored in an object
var obj = {
    sum: add 
}
console.log(obj)
console.log(obj.sum(7, 9))


// 4. we can create function as need
setTimeout(function() {
    console.log('I have created ...')
}, 5000)