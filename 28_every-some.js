// arr.every() method : The every() method executes a function for each array element. The every() method returns true if the function returns true for all elements.


var arr = [2, 4, 3, 12, 5, 6, 8, 1]

// Is all array elements are even ? 
var result1 = arr.every(function(value) {
    return value % 2 === 0
})

// Is all array elements are positive ? 
var result2 = arr.every(function(value) {
    return value > 0
})

console.log(result1, result2) // false true



console.log()




// arr.some() method :  checks whether at least one of the elements of the array satisfies the condition checked by the argument method


// check the array elements which have at least one negative value
var arr = [2, 4, 3, 12, -5, 6, 8, 1]
var resultSome = arr.some(function(value) {
    return value < 0
})

console.log(resultSome) // true