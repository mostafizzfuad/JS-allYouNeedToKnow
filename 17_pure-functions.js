/**** What is pure functions ? ******************
 * 
 * it returns the same result if given the same arguments
 * it doesn't cause any observable side effects
 * 
 * **********************************************/

// pure function
function sqr(n) {
    return n * n
}
console.log(sqr(2))
console.log(sqr(2))
console.log(sqr(2))




// doesn't pure function
var n = 10
function change() {
    n = 100
}
change()
console.log(n) 
// this function has side effects. because, it chnage the value of n. so it's not a pure function



// doesn't pure function
var point = {
    x: 45,
    y: 30
}
function printPoint(point) {
    point.x = 100
    point.y = 200
    console.log(point)
}
printPoint(point)
console.log(point) 
// this function has side effects. because, it chnage the value of point object property x & y. so it's not a pure function
