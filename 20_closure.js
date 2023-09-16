// first look at closure

// closure : arguments pass na kore, bahirer scope theke vitorer scope e data ashe, setai closure. 

var b = 10

// run in browser console (ctrl shift i)
function a() {
    // console.log(b)  // closure (global scope to function scope)
    var x = 5

    return function() { 
        console.log(x) // closure (function scope to function scope) 
    }
}

var abc = a()
console.dir(abc)

// example : arguments pass na kore, a() function scope theke x er value, tar child function scope er moddhe gece as a closure hisebe.