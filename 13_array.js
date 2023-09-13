// array : array is a data structure where we can organize multiple data under a single variable

var arr = [1, 5, 8, 7, 3] // array literal
console.log(arr)
console.log(arr[0])
console.log(arr[3])
console.log(arr.length) // length of array
console.log(arr[arr.length - 1]) // last element of array

arr[2] = 80 // re-assign
arr[5] = 9 // assign new element
console.log(arr)

console.log(arr[6]) // undefined -> because index 6 doesn't exist

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

// sum of all odd number from array elements
var sum = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
        sum += arr[i]
    } 
}
console.log(sum)



// insert elements
var  arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.push(9) // last e insert hbe
// arr.unshift(9) // first e insert hbe
// arr.splice(3, 0, 9) // arr.splice(indexNo, deleteCount, insertElement...)
arr.splice(3, 0, 9, 10) 
console.log(arr)




// remove elements
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.pop() // remove last element
// arr.shift() // remove first element

arr.splice(3, 1) // splice(indexNo, deleteCount)
console.log(arr)

arr.splice(3, 1, 44) // splice(indexNo, deleteCount, insertElement...)
console.log(arr)




// search data
var arr = [4, 7, 2, 6, 8, 4, 55, 9, 89, 27];
var find = 6
var isFound = false
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == find) {
        console.log('data found at index ' + i)
        isFound = true
        break
    }
}

if (!isFound) {
    console.log('data not found')
}



// multi dimensional array
var arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(arr[0][0])
console.log(arr[2][1])

// traverse multi-dimensional array
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j])
    }
}


// reverse an array using logic
var arr = [5, 6, 7, 8, 9]

for (var i = 0; i < (arr.length / 2); i++) {
    var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
}
console.log(arr)

// built-in functions reverse an array : arr.reverse()
var arr3 = [1, 2, 3, 4, 5, 6]
console.log(arr3.reverse())

console.log()

// built-in method 
var arr = [4, 5, 6, 7, 8]

console.log(arr)
console.log(arr.join(' ')) // join method
console.log(arr.join(', ')) // join method
console.log(arr.join(' | ')) // join method

console.log(arr.fill(0)) // fill method
// console.log(arr.fill(true)) // fill method


var arr = [4, 5, 6, 7, 8]
var arr2 = [1, 2, 3, 9]

var arr3 = arr.concat(arr2)
console.log(arr3) // concat method

// Array.isArray() : returns true if the array is an array, otherwise false
console.log(Array.isArray(arr)) // true


// clone the array problem if a assign to b
var a = [1, 2, 3]
var b = a 

b[2] = 5 // if b[index] change, also change a[index].. because array is an immutable object.. ai jonno knoo object ke jodi amra reference hisebe rakhi, sekhane jodi change kori tahole sob jaigai change hoye jabe.. aro clear kore bolte gele, amra jodi akta array ke onno akta arrayr moddhe initialize kore diy, tahole array tar kono duplicate copy jai na.. oi array tar akta reference chole jai.. ai jonno kono jaigai change korle sob jaiga tei change hoye jai..
console.log(a)

// clone the Array.form()
var arr = [1, 2, 3]
var brr = Array.from(arr)

brr[0] = 4
console.log(arr)
console.log(brr)