// sort() method original array ke change kore dibe

var arr = [2, 4, -3, 12, 5, 6, -8, -1]

var persons = [
    { name: 'A', age: 24 }, // a
    { name: 'B', age: 19 }, // b
    { name: 'C', age: 26 },
    { name: 'D', age: 21 }
]


// arr.sort() // don't use
// persons.sort() // don't use


// small to large : ascending order
// large to small : descending order


// sort by ascending order
arr.sort(function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})
console.log(arr)


// sort by descending order
arr.sort(function (a, b) {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})
console.log(arr)



// sort object by it's age property (ascending order)
persons.sort(function(a, b) { // a = akta array element
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})

console.log(persons)