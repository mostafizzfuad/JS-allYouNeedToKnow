// array : array is a data structure where we can organize multiple data under a single variable

var arr = [1, 5, 8, 7, 2, 3] // array literal
console.log(arr)
console.log(arr[3])
console.log(arr[0])
console.log(arr.length) // length of array


var arr2 = Array(5, 6, 8, 2, 7, 1) // array constructor
console.log(arr2)


// traverse an array - (touch 1st to last of all array elements)
var arr = [9, 1, 5, 8, 7, 2, 3]
// last index of array = arr.length - 1
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// increment 2 of all array elements
for (var i = 0; i < arr.length; i++) {
    arr[i] += 2
}
console.log(arr)


// sum of all array elements
var arr = [9, 1, 5, 8, 7, 2, 3]
var sum = 0
for (var i = 0; i < arr.length; i++) {
    sum += arr[i] 
}
console.log(sum)


// output even number from array elements
var arr = [9, 1, 5, 8, 7, 2, 3]
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i])
    }
}

// insert elements
var  arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.push(9) // last e insert hbe
// arr.unshift(9) // first e insert hbe
// arr.splice(3, 0, 9) // arr.splice(indexNo, removeElement, insertElement)
arr.splice(3, 0, 9, 10)
console.log(arr)


// remove elements
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.pop() // remove last element
// arr.shift() // remove first element
arr.splice(3, 1) // splice(indexNo, deleteCount)
console.log(arr)

// remove & replace elements
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr.splice(3, 1, 44) // splice(indexNo, deleteCount, replaceValue)
console.log(arr)