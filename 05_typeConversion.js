
/************ string to number **********/
var str = '120'
var num = 80

console.log(str + num) // string concatenated

console.log(Number(str)) // convert string to number
console.log(Number.parseInt(str)) // convert string to number
console.log(Number.parseFloat(str)) // convert string to number

str = Number(str) // convert string to number
console.log(typeof(str))
console.log(str + num) // sum to number




/************ number to string **********/
var num = 250
num = num.toString() // convert number to string
console.log(typeof(num)) 


console.log(Number(Infinity))
console.log(String(Infinity))

console.log(Boolean(Infinity))
console.log(Boolean(-Infinity))


/************ falsy values **********
 
 * ''
 * 0
 * null
 * undefined
 * NaN
 
 *********************************/

console.log(Boolean('')) // false
console.log(Boolean(0)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false

console.log(Boolean(247)) // true