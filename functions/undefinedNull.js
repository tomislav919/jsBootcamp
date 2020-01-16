//undefined for variable
let name

name = 'Jen'

if(name === undefined){
    console.log('It is undefined!')
} else {
    console.log(name)
}

// Undefined for function arguments
let square = function(num)
{
    console.log(num)
}

let result = square()
console.log(result)

let age = 27

age = undefined

console.log(age)