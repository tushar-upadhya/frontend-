## Find Maximum Number in an Array

### Input:

- Array: [1, 2, 4, 5, 6, 3]

### Function:

```javascript
let arr1 = [1, 2, 4, 5, 6, 3];
const maxNumber = Math.max(...arr1);
console.log("max number", maxNumber);

Finding Maximum Number:

The spread operator (...) is used to spread the elements of the array as individual arguments to the Math.max() function.
Math.max() returns the maximum number among the arguments passed to it.
Logging the Maximum Number:

The maximum number found is logged to the console.
Output:
Maximum number: 6
```
