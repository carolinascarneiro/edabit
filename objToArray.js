// Converting Objects to Arrays

// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

// Could have done it with loop and etc, but wanted to be sure I also learn object methods.
// So I went to the documentation on Mozilla and found an interesting function to solve this:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

const toArray = obj => {
    let array = [];
    for (const [key, value] of Object.entries(obj)) {
        array.push([key, value]);
      }
    return array;
}

console.log(toArray({ a: 1, b: 2 }));

