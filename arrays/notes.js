const notes = ['Note 1', 'Note 2', 'Note 3'];

console.log(notes.length);

console.log(notes[0]); // Note 1
console.log(notes[15]); // Undefined
console.log(notes[notes.length - 1]); // Last item in array
console.log(notes[notes.length - 2]); // Second to last item in array

notes.push('My new note');
console.log(notes);

notes.pop(); //removes last note
console.log(notes);

let lastItem = notes.pop(); //removes last items and returns that item
console.log(lastItem);
console.log(notes);


console.log(notes.shift()); // removes the first item in array and returns its value
console.log(notes.unshift('lala land')); // add the first item in array
console.log(notes);


const notes2 = ['Note 1', 'Note 2', 'Note 3'];

notes2.splice(1,1); // starts at item 1 and deletes 1 item
notes2.splice(1,0, 'This is the new item'); // starts at item 1 and adds 1 item after it
console.log(notes2);

notes2[2] = 'note 3 is renamed';
console.log(notes2);