## Convert to Camel Case Function Explanation

### Input:

- Input string: "cats AND\*Dogs-are Awesome"

### Function:

```javascript
function convertToCamelCase(input) {
  let regexPattern = /[^a-zA-Z0-9]/g;
  let words = input.split(regexPattern);

  for (let i = 0; i < words.length; i++) {
    if (i !== 0) {
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }

  return words.join("");
}

console.log(convertToCamelCase("cats AND*Dogs-are Awesome"));

Splitting the Input String:

The input string "cats AND*Dogs-are Awesome" is split into individual words using a regular expression pattern /[^a-zA-Z0-9]/g, which matches any character that is not a letter or a number.
Converting to Camel Case:

Each word is processed in the loop.
For words other than the first one (index i !== 0), the first character is capitalized using charAt(0).toUpperCase() and the rest of the characters are converted to lowercase using slice(1).toLowerCase().
This effectively converts each word to camel case.
Joining Words:

Finally, the modified words are joined together to form the camel case string using join("").

Output: Camel case string: "catsAndDogsAreAwesome"
```

### This function converts a given input string into camel case by capitalizing the first letter of each word (except the first word) and converting the rest of the letters to lowercase.
