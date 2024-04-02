## Searching Array in JavaScript

### Filter Method:

- It returns all elements that match the specified condition.
- The original array remains unchanged.

```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredArray = arr.filter((data) => {
  return data > 5;
});
console.log(filteredArray); // [ 6, 7, 8, 9, 10 ]
console.log(arr);
```
