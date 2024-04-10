let z = [1, 2, 3];
let a = { name: "tushar" };

console.log(...z); // Outputs: 1 2 3
console.log(...a); // Throws an error: TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))

/*
In JavaScript, the spread syntax (...) is a powerful feature that allows us to expand elements of an iterable (like an array) or object properties into places where multiple elements or properties are expected.

In your case, z is an array [1, 2, 3], and when you use the spread syntax with ...z, it expands the elements of the array z. So, console.log(...z) essentially spreads out the elements of z, resulting in 1 2 3 being printed to the console.

However, when you try to spread an object like a using the spread syntax, you'll encounter an error because objects are not iterable by default.

📝 So, spreading an array using ... works perfectly fine and expands its elements, but spreading an object like a would result in a TypeError because objects are not iterable.

*/
