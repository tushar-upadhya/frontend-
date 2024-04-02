## Transform Array Function Explanation

### Input:

- Array: [0, 1, 0, 3, 12]

### Function:

```javascript
function transformArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i] == 0) {
      result.push(arr[i]);
    }
  }

  let zeroLength = arr.length - result.length;
  for (let j = 0; j < zeroLength; j++) {
    result.push(0);
  }

  return result;
}

console.log(transformArray([0, 1, 0, 3, 12]));

Initializing Result Array:

An empty array result is initialized to store the transformed array.
Removing Zeros:

Using a for loop, each element of the input array arr is checked.
If the element is not equal to 0, it is pushed into the result array.
Adding Zeros:

The length of the original array (arr.length) minus the length of the result array gives the number of zeros to be added at the end.
Another for loop adds the required number of zeros to the result array.
Returning Transformed Array:

The transformed array result is returned.
Output: Transformed array: [1, 3, 12, 0, 0]

```
