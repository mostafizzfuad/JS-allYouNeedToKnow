// object : user defined datatype
var obj = {}
console.log(obj)
console.log(typeof obj)

obj.x = 10
console.log(obj)
console.log(obj.x)

// object literal
var point = {
    x: 10,
    y: 20
}
console.log(point)
point.x = 15 // muted or re-assigned
console.log(point)
point.z = 30 // add property with value
console.log(point)

console.log('\n')


// object constructor
var obj2 = Object()
obj2.a = 10
obj2.b = 20
console.log(obj2)

// object constructor (new keyword)
var obj3 = new Object()
obj3.m = 50
obj3.b = 60
console.log(obj3)
