## Array Reversal Methods

### Using `Array.reverse()` Method:

```javascript
let arr = [1, 2, 3, 4];
let reversedArr = arr.reverse();
console.log("Reversed array:", reversedArr);
console.log("Original array (modified):", arr);

* This method reverses the elements of the original array in place.

* Both reversedArr and the original array arr are modified.
```

### Using Spread Operator and `Array.reverse()`:

```javascript
let arr11 = [10, 20, 30, 40];
const reversed = [...arr11].reverse();
console.log("Reversed array (without modifying original):", reversed);

* The spread operator (...) creates a copy of the original array.

* The reverse() method is then applied to the copied array, reversing its elements.

* The original array arr11 remains unchanged.
```

### Using Loop to Create Reversed Array::

```javascript
let arr22 = [11, 22, 33, 44];
let arr33 = new Array();
for (let i = arr22.length - 1; i >= 0; i--) {
  arr33.push(arr22[i]);
}
console.log("Reversed array using loop:", arr33);


* TThis method manually iterates through the original array in reverse order using a for loop.

* It creates a new array arr33 and pushes each element from arr22 into it in reverse order.
```

### Using Custom Function to Reverse Array::

```javascript
function reverseArray(arr) {
  let arr44 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arr44.push(arr[i]);
  }
  return arr44;
}

console.log("Reversed array using custom function:", reverseArray([1, 2, 3, 4, 5, 6, 7]));


* This function `reverseArray` takes an array as input and returns a new array with elements reversed
* It iterates through the input array in reverse order using a for loop and pushes each element into a new array.
```
