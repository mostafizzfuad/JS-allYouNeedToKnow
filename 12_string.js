
/************ String Literal *************/
var str = 'Mostafizur'
var str2 = "Mostafizur"


/************ String Constructor *************/
var str3 = String('Mostafizur')



/************ number to string convert *************/
var n = 10

var str = 10 + ''
var str = n.toString()
var str = String(n)


/************ Escape Notation *************/

var myName = 'Mostafizur Rahman \'Fuad\''
console.log(myName)

var myName = 'Mostafizur Rahman \"Fuad\"'
console.log(myName)

var myName = 'Mostafizur Rahman \nFuad'
console.log(myName)

var myName = 'Mostafizur Rahman \tFuad'
console.log(myName)

var myName = 'Mostafizur Rahman \\Fuad'
console.log(myName)



/************ String Comparison *************/
// Javascript uses Laxigraphic system to compare to string 
// Laxical order : z, y, x ... a, Z, Y, X, ... B, A

console.log('z' > 'a')
console.log('B' > 'b')

console.log('aaaaZ' > 'aaaaz')
console.log('aaZaz' > 'aaXaz')

console.log('001' == 1) 



/************ String Method *************/
// string concatenation
var a = 'I am '
var b = 'MR Fuad'

// string concatenation
var c = a.concat(b)
console.log(c) // c = I am MR Fuad

// sub string 
var d = c.substring(5)
console.log(d)

// sub string 
var d = c.substring(5,7) // 7-5 = 2 
console.log(d) 

// charAt() - returns the character at a specified index (position) in a string. 
console.log(c.charAt(5))
console.log(c.charAt(8))

// startsWith() , endsWith() 
console.log(c.startsWith('I am'))
console.log(c.endsWith('Fuad'))

// toUpperCase() , toLowerCase()
console.log(c.toUpperCase())
console.log(c.toLowerCase())

// trim() - remove spaces from the string
console.log('    Mostafizur   ')
console.log('    Mostafizur   '.trim())


// split() - splits a string into an array of substrings. 
console.log(c.split(' '))






/************ String Length *************/
// calculate the length of a string
var str = 'Mostafizur'
var strLength = 0

while (true) {
    if (str.charAt(strLength) == '') {
        break
    } else {
        strLength++
    }
}
console.log(strLength)

// calculate the length using builtin methods
console.log(str.length)