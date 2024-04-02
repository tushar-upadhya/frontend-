## Sum of an Array

To find the sum of all elements in an array, we can iterate through the array and add each element to a running sum.

### Implementation:

```javascript
let arrSum = [10, 2, 3, 4, 5, 6];
let sum = 0;

for (let i = 0; i < arrSum.length; i++) {
  sum = sum + arrSum[i];
}

console.log("Sum of array:", sum); // Output: 30 (10 + 2 + 3 + 4 + 5 + 6)
```
