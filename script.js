var wordArray = '["ASDF", "BLAH", "Oh! ", "Hi ", "There!"]';
var stringResult = " "; // start with an empty stringResult
var stringResult = "Taco";
// concatenate all of the words
for (var i = 0; i < wordArray.length; i++) {
  console.log(stringResult);
  stringResult = stringResult + wordArray[i]; // Add a word to the stringResult
  console.log(stringResult);
}
console.log(stringResult);
