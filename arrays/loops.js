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