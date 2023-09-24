/************** filter() **************
 * ai function er kaj hocche 1 ta iterable object (array/function) er duita value niye finally akta result produce kora...
 ***************************************/  

// sum of all array elements using reduce method
var arr = [1, 2, 3, 4, 5]

var sum = arr.reduce(function(prev, curr) {
    return prev + curr
})

console.log(sum)




// sum of all array elements using reduce method (use initial value)
var sum = arr.reduce(function(prev, curr) {
    return prev + curr
}, 100)

console.log(sum) // sum = initial value + calculated value




// find max number using reduce method
var arr = [1, 20, 31, 14, 5]

var max = arr.reduce(function(prev, curr) {
    return Math.max(prev, curr)
}, arr[0])

console.log(max)


console.log()


/************ implementation reduce() *************/
var arr = [1, 20, 30, 10, 5]

function myReduce(arr, cb, acc) { // acc = accumulator
    for (var i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i])
    }
    return acc
}

var sum = myReduce(arr, function(prev, curr) {
    return prev + curr
}, 0)

var max = myReduce(arr, function(prev, curr) {
    return Math.max(prev, curr)
}, arr[0])

var min = myReduce(arr, function(prev, curr) {
    return Math.min(prev, curr)
}, arr[0])

console.log(sum, max, min) // 66, 30, 1
