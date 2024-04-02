## Find Missing Numbers in an Array

### Input:

- Array: [1, 2, 3, 6]

### Function:

```javascript
function missing(arr) {
  let missingArray = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      missingArray.push(i);
    }
  }
  return missingArray;
}

console.log(missing([1, 2, 3, 6]));
console.log(missing([-1, 2, 3, 6]));
console.log(missing([1, 2]));


Finding Minimum and Maximum:

Using Math.min() and Math.max(), the minimum and maximum values of the array are determined.
Iterating Through Range:

A for loop iterates through each integer from the minimum to the maximum value found.
Finding Missing Numbers:

Within the loop, each integer is checked if it exists in the array using includes().
If an integer is not found in the array, it is pushed into the missingArray.
Returning Missing Numbers:

After the loop completes, the missingArray containing the missing numbers is returned.
Output:
Missing numbers: [4, 5]
Missing numbers: [-1, 0, 1, 4, 5]
Missing numbers: []
```
