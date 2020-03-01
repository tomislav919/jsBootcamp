const notes = ['Note 1', 'Note 2', 'Note 3'];

// console log each item in array FOREACH loop
notes.forEach(function(item, index){
    console.log(index);
    console.log(item);
});

const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Excercise'];


todos.forEach(function(item, index){
    //console.log(index+1 + '. ' + item);
    const num = index + 1;
    console.log(`${num}. ${item}`);
});

// FOR loop
for (let count = 0; count <= 2; count++){ //Counting 0 1 2
    console.log(count);
}

for (let count = notes.length - 1; count >= 0; count--){ //Counting 2 1 0
    console.log(count);
}

const todos2 = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Excercise'];

for (let count = 0; count < todos2.length; count++){
    console.log(`${count + 1}. ${todos2[count]}`);
}