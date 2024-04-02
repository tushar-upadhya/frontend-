## Spread Operator and Rest Parameters in JavaScript

### Spread Operator (`...`)

The spread operator is used to expand elements of an array or object.

Example:

```javascript
const numbers = [3, 5, 6, 10, 23];
console.log(Math.max(...numbers)); // Output: 23

let person = { name: "tushar", age: 30 };
let p1 = { ...person };
console.log(p1.name); // Output: tushar
```

### Rest parameters (`...`)

Rest parameters allow us to represent an indefinite number of arguments as an array in function parameters.

Example:

```javascript
function avgCalculate(...nums) {
  let total = 0;
  let count = 0;
  for (let num of nums) {
    if (Array.isArray(num)) {
      for (let n of num) {
        total = total + n;
        count++;
      }
    } else {
      total = total + num;
      count++;
    }
  }
  return total / count;
}

console.log("Average:", avgCalculate(1, 2, [3, 4], 5)); // Output: 3
```
