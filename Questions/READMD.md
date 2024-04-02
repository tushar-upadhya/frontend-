### Question 1: What is the data type returned by the typeof [] expression in JavaScript?

### Answer: When you check the type of an empty array using typeof [], it returns "object" instead of "array". This might seem puzzling at first, but it's because in JavaScript, arrays are actually a special type of object. So, typeof [] gives us "object" because technically, arrays are objects with extra functionality for handling ordered collections of data. But fret not! We have a trick up our sleeve. To properly check if something is an array, we can use the Array.isArray() method. So, to check if arr is an array, we'd use Array.isArray(arr), and that's how we roll in the JavaScript world! 🚀 Stay tuned for more challenges and insights on our JavaScript journey! 💡

```
const arr = [];
console.log(typeof arr); // Outputs: "object"

// To properly check if it's an array
console.log(Array.isArray(arr)); // Outputs: true
```
