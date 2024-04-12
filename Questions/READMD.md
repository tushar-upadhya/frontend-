## Questions

1. [What is the data type returned by the typeof [] expression in JavaScript?](#what-is-the-data-type-returned-by-the-typeof--expression-in-javascript)
2. [What is typeof arguments?](#what-is-typeof-arguments)
3. [What is the value of typeof null?](#what-is-the-value-of-typeof-null)
4. [What is console.log(true+false)?](#what-is-consolelogtruefalse)
5. [What is the result of `2 + true` in JavaScript?](#what-is-the-result-of-2--true-in-javascript)
6. [What is the value of `-'34'+10`?](#what-is-the-value-of--34--10)
7. [What is the value of `+'dude'` in JavaScript?](#what-is-the-value-of-dude-in-javascript)
8. [If you have `var y = 1, x = y = typeof x`, What is the value of x?](#if-you-have-var-y--1-x--y--typeof-x--what-is-the-value-of-x)
9. [For `var a = (2, 3, 5);`, what is the value of `a`?](#for-var-a--2-3-5-what-is-the-value-of-a)
10. [For `var a = (1, 5 - 1) * 2`, what is the value of `a`?](#for-var-a--1-5--1--2-what-is-the-value-of-a)
11. [What is the value of !'Hello'?](#What-is-the-value-of-!'Hello'?)
12. [What is the value of Math.max([2,3,4,5])?](<#What-is-the-value-of-Math.max([2,3,4,5])?>)
13. [typeof(NaN)](<#typeof(NaN)>)
14. [null == undefined. What curious revelation emerges from their encounter?](#null-==-undefined-What-curious-revelation-emerges-from-their-encounter?)
15. [What is -5 % 2?](#Wha-i--5-%-2?)

---

### What is the data type returned by the typeof [] expression in JavaScript?

Answer🟢 : When you check the type of an empty array using `typeof []`, it returns `"object"` instead of `"array"`. This might seem puzzling at first, but it's because in JavaScript, arrays are actually a special type of object. So, `typeof []` gives us `"object"` because technically, arrays are objects with extra functionality for handling ordered collections of data. But fret not! We have a trick up our sleeve. To properly check if something is an array, we can use the `Array.isArray()` method. So, to check if `arr` is an array, we'd use `Array.isArray(arr)`, and that's how we roll in the JavaScript world! 🚀 Stay tuned for more challenges and insights on our JavaScript journey! 💡

```javascript
const arr = [];
console.log(typeof arr); // Outputs: "object"

// To properly check if it's an array
console.log(Array.isArray(arr)); // Outputs: true
```

### What is typeof arguments?

Answer🟢 : the mysterious arguments object! When you check the type of arguments using typeof, it returns `"object"`. This might seem counterintuitive because arguments behaves like an array but isn't technically one. It's what we call an `"array-like object"`. It does have a length property and you can access its elements using indexes, just like an array. However, it lacks all the fancy array methods like push, pop, map, and so on. It's like a VIP pass to the array club, but without all the perks. So, next time you encounter typeof arguments, remember, it's just another member of the `"object"` gang, trying to fit in with the arrays! 😄

```javascript
function exampleFunction() {
  console.log(typeof arguments); // Outputs: "object"
  console.log(arguments.length); // Outputs: Number of arguments passed
  console.log(arguments[0]); // Outputs: The first argument
}

exampleFunction("hello", 42, true);
```

### What is the value of typeof null

Answer🟢 : Brace yourselves for a twist in the JavaScript saga! When you consult the mystical typeof operator about the nature of null, it whispers back, `"object"`. Yes, you heard it right! It's a curious quirk in the land of JavaScript. Despite null being a primitive value that represents the absence of any object value, typeof null insists on labeling it as an `"object"`. Strange, isn't it?

```javascript
console.log(typeof null); // Outputs: "object"
```

### What is console.log(true+false)

Answer🟢 : When you pit the forces of true against false in a mathematical showdown, the JavaScript wizards perform their ancient sorcery, transforming true into 1 and false into 0. And lo and behold! The mighty addition unfolds, yielding a result that echoes the whispers of ancient scripts: 1.

encounter with true and false be a reminder of the enchanting peculiarities that lie within the depths of JavaScript's magic. ✨

```javascript
console.log(true + false); // Outputs: 1
```

### What is the result of 2 + true in JavaScript?

AhAnswer🟢 : the mystical world of type coercion strikes again! When you add a number and a boolean in JavaScript, JavaScript tries its best to make sense of the situation. In this case, it coerces the boolean value true into its numerical equivalent, which happens to be 1. Why? Because in JavaScript, true is essentially treated as the number 1, and false as 0. So, when we perform `2 + true`, it's essentially `2 + 1`, which gives us the grand total of... drumroll, please... `3`! So there you have it, folks! `2 + true equals 3`, because in the magical world of JavaScript, anything is possible!

```javascript
console.log(2 + true); // Outputs: 3
```

### What is the value of -'34'+10?

Answer🟢 : Let's break it down, shall we? When JavaScript encounters the unary operator `- (minus)` before a string, it tries to coerce that string into a number. So - `'34'` becomes `-34`. Then, we add `10 to -34`, resulting in `-24`.

`Why -34?` Well, JavaScript does its best to convert the string `'34'` to a number, and when you apply the unary minus operator, it flips the sign to negative. Finally, `10` is just a simple number, and when added to `-34`, we get `-24`.

So, the magic equation - `'34' + 10` equals `-24`! Isn't JavaScript just full of surprises?

```javascript
console.log(-"34" + 10); // Outputs: -24
```

### What is the value of +'dude' in JavaScript?

Answer🟢 : Ah, the quirky world of JavaScript strikes again! When you put a plus sign (+) in front of a string, it attempts to coerce that string into a number. However, if the string isn't a valid number, JavaScript throws its hands up in despair and gives us NaN—which stands for "Not a Number."

📝 So, when you try to convert the string 'dude' into a number with +, JavaScript shrugs and says, "Sorry, I can't do that!" and hands you back NaN, which stands for "Not a Number." It's like asking your cat to do your taxes—it's just not going to happen!

```javascript
console.log(+"dude"); // Outputs: NaN
```

### For `var a = (2, 3, 5);`, what is the value of `a`?

Answer🟢 : Hold onto your hats for this JavaScript rollercoaster ride! The comma operator, often the unsung hero of JavaScript's quirky features, evaluates each of its operands from left to right, and returns the value of the last operand. So, in our case, (2, 3, 5) evaluates 2, then 3, and finally, 5. And guess what? The value of a gleefully adopts the last value in line, which is 5!

📝 So, if you ever wondered what the result of an adventure with commas could be, it's simply the last number in the sequence. JavaScript, always keeping you on your toes!

```javascript
var a = (2, 3, 5);
console.log(a); // Output: 5
```

### For `var a = (1, 5 - 1) * 2`, what is the value of `a`?

Answer🟢 : Brace yourselves for a whirlwind adventure with parentheses and commas! In this wild ride, the comma operator again showcases its prowess. It evaluates its operands from left to right and returns the value of the last one. So, (1, 5 - 1) yields 4, as it evaluates 1 (and swiftly moves on) and then computes 5 - 1. The resulting 4 then takes center stage.

But wait, there's more! Multiplication (\*), the eager beaver it is, promptly jumps into action and doubles the value of 4, giving us the grand total of 8 for our hero, a!

📝 So, if you ever needed a reminder of how parentheses and commas can spice up a JavaScript party, here it is!

```javascript
var a = (1, 5 - 1) * 2;
console.log(a); // Output: 8
```

### What is the value of !'Hello'?

Answer🟢 : Hold onto your hats, because we're diving into the realm of logical operators! The exclamation mark! in JavaScript is the logical NOT operator, affectionately known as the "bang." Its mission? To flip the truthiness of its operand.
📝 'bang'—a string with a peculiar charm. When coerced into a boolean context, any non-empty string is considered truthy. But once the "bang" comes into play, everything changes! It flips the truthiness of 'bang' to its opposite, transforming it into the essence of falseness: false.

```javascript
var result = !"bang";
console.log(result); // Output: false
```

### What is the value of Math.max([2,3,4,5])?

Answer🟢 : Brace yourselves, because we're about to uncover a quirk in the mathematical realm of JavaScript! Math.max() is a venerable function tasked with determining the maximum value from a set of numbers. However, when confronted with an array as its argument, it doesn't quite behave as expected.

Math.max() expects a list of arguments, not an array. When handed an array like [2, 3, 4, 5], it struggles to find the maximum amidst the square brackets and commas, resulting in a befuddling outcome: NaN, shorthand for "Not a Number."

📝 So, remember: when unleashing Math.max() upon an array, be sure to spread its elements as individual arguments, allowing this mathematical maestro to showcase its true prowess!

```javascript
var result = Math.max(...2, 3, 4, 5);
console.log(result); // Output:5
```

### typeof(NaN)

### null == undefined. What curious revelation emerges from their encounter?

Answer🟢 :Surprisingly, when we compare null with undefined using the loose equality operator (==), the answer is... true!

It might seem counterintuitive at first glance. After all, null represents the absence of a value, while undefined typically signifies the absence of an assigned value. However, in the realm of JavaScript-type coercion, they are deemed equivalent under the loose equality operator.

📝 This peculiar equality arises from JavaScript's type coercion rules. When comparing null and undefined with loose equality, JavaScript coerces both values to true, thus resulting in equality.

### What is -5 % 2?

Answer🟢 :Brace yourself for a journey through the fascinating realm of remainders! When you combine the negative number -5 with the modulo operator % and the positive number 2, the result might seem puzzling at first glance. But fear not, intrepid explorer!

let's unravel this mystery! When -5 is divided by 2, the quotient is -2 with a remainder of 1. Ah-ha! And since the remainder inherits the sign of the dividend, -5 % 2 yields -1, leaving us with a triumphant solution

📝 So, there you have it! -5 % 2 boldly reveals its true identity: -1!

```javascript
console.log(-5 % 2); // Output: -1
```
