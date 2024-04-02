## Sum of Digits of a Number

To find the sum of digits of a number, we can repeatedly extract the last digit of the number and add it to the sum until the number becomes zero.

### Implementation:

```javascript
function sumOfDigitsOfNumber(n) {
  let sum = 0;
  let reminder;

  // Repeat until n becomes zero
  while (n > 0) {
    // Extract the last digit of n
    reminder = n % 10;

    // Add the last digit to the sum
    sum = sum + reminder;

    // Remove the last digit from n
    n = Math.floor(n / 10);
  }

  return sum;
}

console.log(sumOfDigitsOfNumber(1234)); // Output: 10 (1 + 2 + 3 + 4)
```
