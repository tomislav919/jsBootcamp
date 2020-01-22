let name = '   Tomislav Lukanic';

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
let password = 'abc123password098';
console.log(password.includes('password'));
console.log(password.includes('abc123'));
console.log(password.includes('tomislav'));

// Trim (removes all white spaces on both ends)
console.log(name);
console.log(name.trim());


// Challange area
let isValidPassword = function(password){
    let pas = password.includes('password');
    let length = password.length;
    if (pas == false && length >= 8) {
        return true;
    } else {
        return false;
    }
};



console.log(isValidPassword('asf5p45'));
console.log(isValidPassword('abc123_!$#SDS'));
console.log(isValidPassword('asdfgfpassword123'));