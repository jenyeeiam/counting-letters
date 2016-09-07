
var characters = {};

function countLetters(input) {
  var splitWords = input.split(" ");
  var joinedWord = splitWords.join("").toLowerCase();
  var splitLetters = joinedWord.split("");



  for (var i = 0; i < splitLetters.length; i++){
    if (characters.hasOwnProperty(splitLetters[i]) === false){
      characters[splitLetters[i]] = 1;
    } else {
      characters[splitLetters[i]] += 1;
    }
  }
}

countLetters("this is a long sentence");
console.log(characters);