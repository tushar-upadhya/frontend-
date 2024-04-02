## Swapping First and Last Characters in a String

To swap the first and last characters in a string, we can use various approaches:

1. **Using Array Manipulation**: Convert the string to an array, swap the first and last elements, and then join the array back to a string.

   ```javascript
   function swapFirstAndLast(str) {
     let arr = str.split("");
     let temp = arr[0];
     arr[0] = arr[arr.length - 1];
     arr[arr.length - 1] = temp;
     return arr.join("");
   }

   console.log(swapFirstAndLast("hello")); // Output: oellh
   ```

2. **Using String Manipulation**: Swap the first and last characters directly using string methods.

   ```javascript
   function swap(str) {
     if (str.length < 2) {
       return str;
     }
     return (
       str.charAt(str.length - 1) +
       str.substring(1, str.length - 1) +
       str.charAt(0)
     );
   }
   ```

console.log(swap("tushar")); // Output: rushat
console.log(swap("B")); // Output: B

```

```
