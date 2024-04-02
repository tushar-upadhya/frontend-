## Finding the Second Largest Number in an Array

To find the second largest number in an array, we can follow these steps:

1. Sort the array in descending order.
2. Remove duplicate elements from the sorted array to ensure uniqueness.
3. Return the second element from the sorted and unique array.

### Implementation:

```javascript
function secondLargestNumber(arr) {
  // Sort the array in descending order
  let sortedArray = arr.sort((a, b) => {
    return b - a;
  });

  // Remove duplicate elements
  let uniqueElements = [...new Set(sortedArray)];

  // Return the second element (index 1) from the sorted and unique array
  return uniqueElements[1];
}

console.log(secondLargestNumber([10, 5, 2, 13])); // Output: 10
```