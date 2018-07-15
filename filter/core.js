function onlyEven (array) {
  // your code here
  return array.filter(even => {
    return even % 2 === 0
  })
};

function onlyOneWord (array) {
  // your code here
  return array(word => {
    return word.length
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