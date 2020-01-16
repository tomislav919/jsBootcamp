//Function - input (argument), code, output (return value)

let greetUser = function()
{
    console.log('Welcome user')
}

greetUser()


let square = function(num)
{
    let result = num * num
    console.log(result)
}

square(3)
square(10)

//challange

let converter = function (cel)
{
    let result = (cel * ( 9 / 5)) + 32
    return result
}

let temp = converter(10)
console.log(temp)