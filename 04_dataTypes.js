
/************ data types **********
 * 
 * primitive : primitive types are defined by javascript ( number , string , boolean , null , undefined )
 * object : object types are User defined data types  ( array , object , function )
 *
 *********************************/



/************ number **********/
var id = 247
var age = 25.5
var numOne = Number(56)
var numTwo = Number('32') // convert string to number

console.log(id)
console.log(age)
console.log(numOne)
console.log(numTwo)

console.log(Number.parseInt(age)) // convert float to integer
console.log(Number.parseFloat(id)) // convert integer to float

console.log(1/0) // infinity
console.log('abc' * 10) // NaN -> Not a number


// convert octal to decimal
var hex = 0xff
console.log(hex) // 255


// convert hexadecimal to decimal
var oct = 0756
console.log(oct) // 494





/************ string **********/
var str = 'Mostafizur'
var str2 = "Mostafizur"
var str3 = `Mostafizur`

var str4 = String('Mostafizur')
var str5 = String(123) // convert number to string
var str6 = String(3.1416) // convert number to string

console.log(str3 , str5 , str6)





/************ boolean **********/
var b1 = true
var b2 = false

var b3 = Boolean(true)
var b4 = Boolean(false)

console.log(b1 , b4)







/************ null , undefined **********/

// undefined : A variable without value always store undefined.
// null : A variable with known value can store null. (Null is a special type used as a absence of an object)

var abc
var xyz = null;

console.log(abc , xyz)