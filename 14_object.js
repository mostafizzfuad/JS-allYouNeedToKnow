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

console.log('\n')

// dot notation & array notation
var point = {
    x: 10,
    y: 20,
    z: 30
}
// dot notation
console.log(point.x)
console.log(point.y)
console.log(point.z)
console.log(point.y + point.z) 
// array notation
console.log(point['x'])
console.log(point['y'])
var show = 'x'
console.log(point[show]) // 10



point.x = 15 // muted or re-assigned using dot notation
console.log(point)
point.p = 30 // create property with value
console.log(point)
console.log(point.d) // undefined because d doesn't exist into point object

point['y'] = 50 // muted or re-assigned using array notation
console.log(point)

// muted or re-assigned using variable
var prop = 'z' 
point[prop] = 100
console.log(point)


// remove object properties
point.p = undefined 
console.log(point)

delete point.p
console.log(point)


// compare object
var obj1 = {
    a: 10,
    b: 100
}
var obj2 = {
    a: 10,
    b: 100
}

if (obj1.a === obj2.a && obj1.b === obj2.b) {
    console.log(true)
} else {
    console.log(false)
}

// compare object using json (convert to string)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))


// iterate or traverse object properties
var obj = {
    x: 10,
    y: 100,
    z: 200
}
console.log('x' in obj) // x property ta ki obj object er moddhe ache ?
console.log('p' in obj)  

for (var prop in obj) {
    console.log(prop)
    console.log(prop + ': ' + obj[prop])    
}

console.log('\n')

// methods in object
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj)) // return 2d arrays 

// don't clone or copy (reference errors)
var obj2 = obj
obj2.x = 70
obj2.y = 80
console.log(obj)
console.log(obj2)


// object clone or copy
var obj2 = Object.assign({}, obj)
obj2.x = 50
obj2.y = 150
console.log(obj)
console.log(obj2)