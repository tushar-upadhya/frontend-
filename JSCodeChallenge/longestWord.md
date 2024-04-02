## Find Longest Word in a Sentence

### Input:

- Sentence: "Welcome to the jungle"

### Function (Using Sort Function):

```javascript
const string1 = "Welcome ";

function longestWord(str) {
  const string2 = str.split(" ");
  string2.sort((a, b) => {
    return b.length - a.length;
  });
  return string2[0];
}

console.log(longestWord(string1));

Splitting the Sentence:

The input sentence is split into an array of words using the split(" ") function.
Sorting by Length:

The array of words is sorted in descending order based on the length of each word using the sort() function.
The comparison function ((a, b) => { return b.length - a.length; }) sorts the words by their lengths in descending order.
Returning the Longest Word:

The first element of the sorted array (which is the longest word) is returned.
Output (Using Sort Function):
Longest word: "Welcome"
```

```javascript
function longestWordusingForLoop(str) {
  let string3 = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < string3.length; i++) {
    if (string3[i].length > longestWord.length) {
      longestWord = string3[i];
    }
  }
  return longestWord;
}

console.log(longestWordusingForLoop(string1));


Splitting the Sentence:

The input sentence is split into an array of words using the split(" ") function.
Iterating Through Words:

Using a for loop, each word in the array is iterated over.
Finding the Longest Word:

If the length of the current word is greater than the length of the longest word found so far (longestWord), it replaces longestWord with the current word.
Returning the Longest Word:

After the loop completes, the longest word found is returned.
Output (Using For Loop): Longest word: "Welcome"
arduino
```
