// Lexical Scope (Static Scope) --> JS
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

let varOne = 'varOne'

if (true) {
    console.log(varOne) // izbaci 'varOne'
    let varTwo = 'varTwo'
    console.log(varTwo) //izbaci 'varTwo'
    varOne = 'varOne remake'

    if (true) {
        let varFour = 'varFour'
    }
    console.log(varOne) // 'varOne remake'
}

console.log(varOne) // 'varOne remake' also

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo) //izbaci undefined :D