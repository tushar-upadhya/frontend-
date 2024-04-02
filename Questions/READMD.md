## Questions

1. [What is the data type returned by the typeof [] expression in JavaScript?](#what-is-the-data-type-returned-by-the-typeof-expression-in-javascript)
2. [What is typeof arguments](#What-is-typeof-arguments)
3. [Let's play a little mind game! What do you think the magical JavaScript crystal ball reveals when you ask it about the type of null using typeof null?](#lets-play-a-little-mind-game-what-do-you-think-the-magical-javascript-crystal-ball-reveals-when-you-ask-it-about-the-type-of-null-using-typeof-null)


---

### What is the data type returned by the typeof [] expression in JavaScript?

When you check the type of an empty array using `typeof []`, it returns `"object"` instead of `"array"`. This might seem puzzling at first, but it's because in JavaScript, arrays are actually a special type of object. So, `typeof []` gives us `"object"` because technically, arrays are objects with extra functionality for handling ordered collections of data. But fret not! We have a trick up our sleeve. To properly check if something is an array, we can use the `Array.isArray()` method. So, to check if `arr` is an array, we'd use `Array.isArray(arr)`, and that's how we roll in the JavaScript world! 🚀 Stay tuned for more challenges and insights on our JavaScript journey! 💡

```javascript
const arr = [];
console.log(typeof arr); // Outputs: "object"

// To properly check if it's an array
console.log(Array.isArray(arr)); // Outputs: true

```

### What is typeof arguments?

Ah, the mysterious arguments object! When you check the type of arguments using typeof, it returns "object". This might seem counterintuitive because arguments behaves like an array but isn't technically one. It's what we call an "array-like object". It does have a length property and you can access its elements using indexes, just like an array. However, it lacks all the fancy array methods like push, pop, map, and so on. It's like a VIP pass to the array club, but without all the perks. So, next time you encounter typeof arguments, remember, it's just another member of the "object" gang, trying to fit in with the arrays! 😄

```javascript
function exampleFunction() {
  console.log(typeof arguments); // Outputs: "object"
  console.log(arguments.length); // Outputs: Number of arguments passed
  console.log(arguments[0]); // Outputs: The first argument
}

exampleFunction('hello', 42, true);

```

### Let's play a little mind game! What do you think the magical JavaScript crystal ball reveals when you ask it about the type of null using typeof null?

Brace yourselves for a twist in the JavaScript saga! When you consult the mystical typeof operator about the nature of null, it whispers back, "object". Yes, you heard it right! It's a curious quirk in the land of JavaScript. Despite null being a primitive value that represents the absence of any object value, typeof null insists on labeling it as an "object". Strange, isn't it? 

```javascript
console.log(typeof null); // Outputs: "object"

```
