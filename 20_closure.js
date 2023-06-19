// first look at closure

// closure : jodi kono scope er vitore, bahirer kono scope theke data ashe setai closure

var b = 10

// run in browser console
function a() {
    // console.log(b)  // closure (global scope to function scope)
    var x = 5

    return function() { 
        console.log(x) // closure (function scope to function scope) 
    }
}

var abc = a()
console.dir(abc)

// arguments pass na kore,  bahirer scope theke vitorer scope e data ashe setai closure. 
// example : a() function scope theke x er value tar child function scope er moddhe gece.