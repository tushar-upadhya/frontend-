## Remove Duplicates from Array

### Input:

- Array: [1, 2, 3, 4, 4, 2, 5, 6]

### Using For Loop:

```javascript
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (!newArr.includes(arr[i])) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

This approach iterates through the array using a for loop and checks if each element is already present in the newArr.
If an element is not present in newArr, it is added to newArr.

```

### Using Set::

```javascript
let arrRemove = [1, 2, 3, 4, 4, 2, 5, 6];
let newArrRemove = [...new Set(arrRemove)];
console.log(newArrRemove);

* This approach leverages the Set data structure in JavaScript, which automatically removes duplicate elements.
* By spreading the Set object into an array, we obtain an array with duplicates removed.

```

### Using forEach::

```javascript

let myArr = [1, 2, 3, 3, 2, 5, 6, 10];

let result = [];

myArr.forEach((item) => {
  if (result.indexOf(item) === -1) {
    result.push(item);
  }
});
console.log(result);


* TThis approach uses the forEach method to iterate through each element of the array.
* For each element, it checks if the element is already present in the result array using indexOf.
* If the element is not present (indexOf returns -1), it is added to the result array.

```
