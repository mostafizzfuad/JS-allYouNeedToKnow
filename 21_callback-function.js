/************* example 1 : callback function ***************/

function sample(a, b, cb) {
    var c = a + b // 13
    var d = a - b // 3

    // callback() function er implement ta hocche, argument hisebe asha function er moddhe...
    var result = cb(c, d) // invoke & arguments pass
    return result
}

/********** sum **********/
function sum(a, b) {
    return a + b
}

var result = sample(8, 5, sum)
console.log(result) // 16



/********** sub **********/
var result2 = sample(8, 5, function(c, d) {
    return c - d
})
console.log(result2) // 10



/********** multiplication **********/
var result3 = sample(8, 5, function(c, d) {
    return c * d
})
console.log(result3) // 39




/******************************************************************
 * 
 * function ke variable er moddhe store korte pari
 * function ke array element hisebe arrayr moddhe store korte pari
 * function ke object er moddhe property value hisebe store korte pari
 * 
 * function er moddhe argument hisebe jemon object pass kora jai, thik temon e function er moddhe argument hisebe amra onno akta function pass korte pari & oi main function er moddhe theke argument hisebe pass kora function ke call korte pari aitai hocche callback function.
 * 
 * jei function er maddhome, argument hisebe asha function ke call/invoke kora hoi, aitai hocche callback function.
 * 
 * callback() function er implement ta hocche, argument hisebe asha function er moddhe...
 * 
 ******************************************************************/




/************* example 2 : callback function **************/
// we want after execution jobOne() function, then execute jobTwo() function but we see jobTwo() function age execute hocche... we solve this problem using callback function

function jobOne() {
    console.log('jobOne executed')
} 
function jobTwo() {
    console.log('jobTwo executed')
}
// setTimeout(jobOne, 2000)
// jobTwo()




// solve similler type problem
function addFunction(a, b, cb) {
    console.log(a + b)
    cb()
}

// function message() {
//     console.log('addition finished')
// }
// addFunction(5, 6, message)

// addFunction(5, 6, function() {
//     console.log('addition finished')
// })

// addFunction(5, 6, () => console.log('addition finished'))
addFunction(5, 6, _ => console.log('addition finished'))

// note : fat arrow notation ( => )