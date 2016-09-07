//want to return object with letters as the key, and the index numbers and the values


var characters = {};

function countLetters(input) {
  var splitWords = input.split(" ");
  var joinedWord = splitWords.join("").toLowerCase();
  var splitLetters = joinedWord.split("");

  for (var i = 0; i < splitLetters.length; i++){
    if (characters.hasOwnProperty(splitLetters[i])){
      characters[splitLetters[i]].push(i);
    } else {
      characters[splitLetters[i]] = [i];
    }
  }
  return characters;
}

console.log(countLetters("this is a long sentence"));
