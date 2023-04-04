function getMiddle(word) {
    let middleIndex = Math.floor(word.length / 2);
    if (word.length % 2 === 0) {
      return word.substring(middleIndex - 1, middleIndex + 1);
    } else {
      return word.charAt(middleIndex);
    }
  }
  console.log(getMiddle("raiting")); 
