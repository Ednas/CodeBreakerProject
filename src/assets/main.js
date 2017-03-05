let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here

function setHiddenFields() {
	let attempt = '0';
	let number = Math.floor(Math.random()*10000);
	console.log(number);
}
setHiddenFields();



// Hint: In order to add a zero to the front of an answer, it must be a string, not a number. You can convert numbers to strings with .toString(). We can create a while loop that runs while answer.length is less than 4 that puts a 0 before answer's current value.

// Set the hidden input attempt's value to zero
// In our setHiddenFields function we should also set the hidden input attempt to 0.

// Only set the answer and attempt hidden inputs when they aren't already set
// Call the setHiddenFields function in the body of the guess function, but also write some logic so that it's only called when answer and attempt haven't already been set.

// Hint: we can use an if condition to only run our code when answer or attempt is empty ('').