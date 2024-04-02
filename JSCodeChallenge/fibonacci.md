## Fibonacci Function Explanation

### Input:

- Number: 10

### Function:

```javascript
function fibonacci(num) {
  let res = [0, 1];

  for (let i = 2; i <= num; i++) {
    let tempNum = res[i - 1] + res[i - 2];
    res.push(tempNum);
  }

  return res;
}

console.log(fibonacci(10));

Initialization:

An array res is initialized with the first two Fibonacci numbers [0, 1].
Calculating Fibonacci Sequence:

Using a for loop starting from i = 2 up to num, each Fibonacci number is calculated by adding the previous two numbers in the sequence (res[i - 1] + res[i - 2]).
The calculated Fibonacci number is then pushed into the res array.

Output: Fibonacci sequence up to the 10th number: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
