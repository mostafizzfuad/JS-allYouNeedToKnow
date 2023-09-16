/************** filter() **************
 * ai function er kaj hocche 1 ta array ke first to last traverse kora.
 * filter() method main array ke unchange rekhe, main arrayr element ke niye new akta array generate kore (bivinno condition er upor base kore)
 * filter() method true / false return kore... condition satisfied korle, method ta true return korbe & sei value/arrElement ta newArray te push kore dibe...
 ***************************************/  

var arr = [4, 8, 1, 3, 5, 6, 3, 2, 7]

// filtered all even number
var evenArr = arr.filter(function(value) {
    return value % 2 == 0
})
console.log(arr)
console.log(evenArr)



/************ implementation filter() *************/
function filter(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        // if (arr[i] % 2 == 0) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// console.log(filter(arr))

// filtered all even number
var filteredArr = filter(arr, function(value) {
    return value % 2 == 0
})

// filtered all number which is greater than 4
var largeArr = filter(arr, function(value) {
    return value > 4
})

console.log(arr)
console.log(filteredArr)
console.log(largeArr)