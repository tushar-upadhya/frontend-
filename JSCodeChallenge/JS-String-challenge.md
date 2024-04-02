## JavaScript Functions Explanation

### 1. Reverse String Each Word:

```javascript
function reverseStr(str) {
  let newstr = [];
  let str1 = str.split(" ");
  for (let i = 0; i < str1.length; i++) {
    newstr.push(str1[i].split("").reverse().join(""));
  }
  return newstr.join(" ");
}

const str = "this is javascript codee";
reverseStr(str);


Input: The function takes a string str as input.
Splitting: The input string is split into an array of words using the split(" ") method.
Processing Each Word:

Using a loop, each word in the array is processed.
Each word is split into an array of characters using split("").
The characters in each word are reversed using reverse().
The reversed characters are joined back together to form the reversed word using join("").

The reversed word is pushed into the newstr array.
Joining Reversed Words: The reversed words in the newstr array are joined back together to form the final reversed string with words reversed.
```
