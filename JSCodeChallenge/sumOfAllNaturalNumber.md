## Sum of All Natural Numbers from 1 to N

To find the sum of all natural numbers from 1 to N, we can use a simple loop to iterate from 1 to N and add each number to the sum.

### Implementation:

```javascript
function sumOfAllNaturalNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumOfAllNaturalNumber(10)); // Output: 55 (1 + 2 + 3 + ... + 10)
```
