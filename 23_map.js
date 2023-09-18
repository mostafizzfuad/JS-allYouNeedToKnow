/************** map() **************
 * ai function er kaj hocche 1 ta array ke first to last traverse kora.
 * map() method main array ke unchange rekhe, main arrayr element ke niye new akta array generate kore (bivinno condition er upor base kore)
 ***************************************/  

var arr = [1, 2, 3, 4]

// example : square in every single element in an array
var sqrArr = arr.map(function(value, index, arr) {
    return value * value // result ta kei return kore dibe
})

console.log(arr)
console.log(sqrArr)

console.log()


/************ implementation map() *************/
function map(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        // var temp = arr[i] * arr[i]
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}
// console.log(map(arr))

// sqrt
var sqrtArr = map(arr, function(value) {
    return value * value
})

// qb
var qbArr = map(arr, function(value) {
    return value * value * value
})

// each element multiply by 10
var multiplyByTen = map(arr, function(value, i, arr) {
    return value * 10
})

console.log(arr)
console.log(sqrtArr)
console.log(qbArr)
console.log(multiplyByTen)