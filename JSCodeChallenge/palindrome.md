## Palindrome Checker Function Explanation

### Palindrome Number

```javascript
function palindrome(num) {
  if (num.toString().split("").reverse().join("") == num) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome(121));

* This function palindrome checks if a given number is a palindrome.

* It converts the number to a string, splits it into an array of characters, reverses the array, and joins it back into a string.

* Finally, it compares the reversed string with the original number and returns true if they are equal, indicating that the number is a palindrome.

```
