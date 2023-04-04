function removeFirstLast(str) {
    if (str.length <= 2) {
      return "";
    } else {
      return str.substring(1, str.length - 1);
    }
  }
let newStr = 'ahahkakalf'
console.log(removeFirstLast(newStr))