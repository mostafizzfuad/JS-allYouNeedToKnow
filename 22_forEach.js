/************** forEach() **************
 * ai function er kaj hocche 1 ta array ke first to last traverse kora.
 * forEach() method main array ke change kore fele...
 ***************************************/  

// example : array traverse using functional programming : forEach()
var arr = [1, 2, 3, 4, 5]

arr.forEach(function(value, index, arr) {
    console.log(value , index , arr)
})



// example : sum of all array elements using forEach()
var arr = [1, 2, 3, 4, 5]

var sum = 0
arr.forEach(function(value, index, arr) {
    // console.log(value , index , arr)
    sum += value
})
console.log(sum) 




/************ implementation forEach() *************/
var arr = [1, 2, 3, 4, 5]

function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        cb(arr[i], i, arr) // argument pass
    }
}


// example : array traverse
forEach(arr, function(value, index, arr) {
    console.log(value, index, arr)
})


// example : sum of all array elements
var sum = 0
forEach(arr, function(value, index, arr) {
    sum += value
})
console.log(sum)


// example : add 5 in every single element
forEach(arr, function(value, index, arr) {
    arr[index] = value + 5 // muted/re-assign
})
console.log(arr)