function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function convertToQuiz(words) {
    var quizWords = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i].word;
      var definitions = [];
      var correctDefinitionIndex = Math.floor(Math.random() * 4);
      const size = Math.min(words.length, 4);
      console.log(size);
      for (var j = 0; j < size; j++) {
        if (j === correctDefinitionIndex) {
          definitions.push(words[i].definition);
        } else {
            var randomIndex = i;
          while (randomIndex === i) {
            randomIndex = Math.floor(Math.random() * words.length);
          }
          console.log(`Random=${randomIndex}-Correct${i}-Word=${words[randomIndex]}`);
          definitions.push(words[randomIndex].definition);
        }
      }
  
      quizWords.push({
        word: word,
        definitions: definitions,
        correctDefinitionIndex: correctDefinitionIndex
      });
    }
  
    return quizWords;
  }

  function convert(words) {
    let quizWords = [];
  
    words.forEach((word) => {
      let definitions = words.map((w) => w.definition);
      let shuffledDefinitions = shuffleArray(definitions);
      let correctDefinitionIndex = shuffledDefinitions.indexOf(word.definition);
  
      quizWords.push({
        word: word.word,
        definitions: shuffledDefinitions,
        correctDefinitionIndex: correctDefinitionIndex,
      });
    });
  
    return quizWords;
  }
  
  function shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
