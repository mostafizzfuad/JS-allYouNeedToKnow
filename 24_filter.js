/************** filter() **************
 * ai function er kaj hocche 1 ta array ke first to last traverse kora.
 * filter() method main array ke unchange rekhe, main arrayr element ke niye new akta array generate kore (bivinno condition er upor base kore)
 * filter() method true / false return kore... condition satisfied korle, method ta true return korbe & sei value/arrElement ta newArray te push kore dibe...
 * filter() method mainly condition niye kaj kore, condition satisfied korle true (so, value/arrElement ta newArray te push hoye jai), otherwise false (so, value/arrElement ta newArray te push hoina)... 
 * filter() method implementation e condition er moddhe callback() function invoke kora hoi & callback() function er implementation e condition ta likhe boolean (true/false) return korte hoi...
 ***************************************/  

var arr = [4, 8, 1, 3, 5, 6, 3, 2, 7]

// filtered all even number
var evenArr = arr.filter(function(value, index, arr) {
    return value % 2 == 0 // condition true hoile sei value/arrElement ta newArray te push kore dibe...
    // return value > 4
})
console.log(arr)
console.log(evenArr)



/************ implementation filter() *************/
function filter(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        // if (arr[i] % 2 == 0) { // sob same only if er condition ta different. thats why amra condition ta direct na likhe condition er poriborte callback function declare kore dibo...
        
        if (cb(arr[i], i, arr)) { // pass arguments in callback function
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