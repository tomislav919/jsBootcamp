let myBook =
{
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook =
{
    title: 'A Peoples History',
    author: 'Howard Zin',
    pageCount: 723
}

/*
let getSummary = function(book)
{
    console.log(`${book.title} by ${book.author}`)
}

getSummary(myBook)
getSummary(otherBook)
 */

let getSummary = function(book)
{
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary);
console.log(otherBookSummary);

//Challange Area

let getTemp = function(fahrenheit) {
    let fh = fahrenheit;
    let cs = (fahrenheit - 32) * (5 / 9);
    let kv = ((fahrenheit - 32) * 5) / 9 + 273.15

    return {
        fahrenheit: fh,
        celsius: cs,
        kelvin: kv
    }
}

let tmp = getTemp(80);
console.log(tmp);