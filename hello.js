var arr = [1, 2, 3, 4, 5]

// forEach() ::

// traverse
// arr.forEach(function(value, index, arr) {
//     console.log(value, index, arr)
// })


// implementation forEach() ::
// function forEach (arr, cb) {
//     for (var i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr)
//     }
// }

// var sum = 0
// forEach(arr, function(value, index, arr) {
//     sum += value
// })
// console.log(sum)



// map() :: 
// var sqrtArr = arr.map(function(value, index, arr) {
//     return value * value
// })

// console.log(sqrtArr)


// implementation map() ::
// function map (arr, cb) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//         var temp = cb(arr[i], i, arr)
//         newArr.push(temp)
//     }
//     return newArr
// }

// var sq = map(arr, function(value, index, arr) {
//     return value * value
// })
// console.log(sq)

// var multiply = map(arr, function(value, index, arr) {
//     return value * 10
// })

// console.log(multiply)



// filter() ::

// var result = arr.filter(function(value) {
//     return value % 2 === 0
// })

// console.log(result)


var arr = [5, 1, 3, 8, 10, 2, 6, 0]

// function filter(arr, cb) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//         if (cb(arr[i], i, arr)) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// var largeThanThree = filter(arr, function(value) {
//     return value > 3
// })

// console.log(largeThanThree)


// var largeThanThree = arr.filter(function(value) {
//     return value > 3
// })

// console.log(largeThanThree)