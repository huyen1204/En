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

function convert(words) {
    let quizWords = [];
    let definitions = words.filter((w) => w).map((m) => m.definition);
    words.forEach((word) => {
      if (word) {
        let okDefinitions = definitions.filter(d => d !== word.definition);
        let shuffledDefinitions = shuffleArray(okDefinitions);
        var correctDefinitionIndex = Math.floor(Math.random() * 4);
        shuffledDefinitions[correctDefinitionIndex] = word.definition;
        let wordStr = "";
        if (word.type) {
          wordStr += `(${word.type}) `;
        }
        wordStr += `${word.word}`
        if (word.pronunciation) {
          wordStr += `\n${word.pronunciation}`;
        }
        quizWords.push({
          word: wordStr,
          definitions: shuffledDefinitions,
          correctDefinitionIndex: correctDefinitionIndex,
        });
      }
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
