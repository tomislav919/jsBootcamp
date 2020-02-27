// Challange

let todos = ['Run', 'Jump', 'Talk', 'Stay', 'Lay'];

console.log(`You have ${todos.length} todos`);


console.log(`Todo: ${todos[0]}!`);
console.log(`Todo: ${todos[todos.length - 1]}!`);
console.log(`Todo: ${todos[todos.length - 2]}!`);

const todos2 = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Excercise'];

//Delete the 3rd item
//Add a new item to the end
// Remove the first item from the list

console.log(todos2);
todos2.splice(2,1); //delete 3rd
todos2.shift(); //removes the first item
todos2.push('Jump right in'); //adds new item

console.log(todos2);


