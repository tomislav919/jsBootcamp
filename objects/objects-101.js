let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

//console.log(myBook.pageCount)
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//Challange area

//name, age, location

let person = {
    name: 'Tomislav',
    age: 31,
    location: 'Rijeka'
}

console.log(`Hello, my name is ${person.name}. I am ${person.age} and I live in ${person.location}`)


person.age = person.age + 1

console.log(`Hello, my name is ${person.name}. I am ${person.age} and I live in ${person.location}`)