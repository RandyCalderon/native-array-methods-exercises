function onlyEven (array) {
  // your code here
  return array.filter(even => {
    return even % 2 === 0
  })
};

function onlyOneWord (array) {
  // your code here
  return array.filter(word => {
    return word.split(' ').length <= 1;
  })
};

function positiveRowsOnly (array) {
  // your code here
};

function allSameVowels (array) {
  // your code here
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};