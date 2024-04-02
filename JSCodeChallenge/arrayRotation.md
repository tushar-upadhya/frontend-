## Array Rotation Function Explanation

### Input:

- Array: [1, 2, 3, 4, 5]
- Number of rotations: 3

### Function:

```javascript
function arrayRotation(arr, numberOfRotation) {
  for (let i = 0; i < numberOfRotation; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

console.log(arrayRotation([1, 2, 3, 4, 5], 3));

Step 1:

Array before rotation: [1, 2, 3, 4, 5]
After one rotation, arr.pop() removes the last element (5) and returns it, and then arr.unshift() adds it to the beginning.
Array after 1st rotation: [5, 1, 2, 3, 4]

Step 2:

Array before rotation: [5, 1, 2, 3, 4]
After the second rotation, the same process is repeated.
Array after 2nd rotation: [4, 5, 1, 2, 3]
Step 3:

Array before rotation: [4, 5, 1, 2, 3]
After the third rotation, the same process is repeated.
Array after 3rd rotation: [3, 4, 5, 1, 2]


Final rotated array: [3, 4, 5, 1, 2]
```

### This function rotates the elements of the array to the left by a specified number of rotations. Each rotation involves removing the last element and adding it to the beginning of the array.
