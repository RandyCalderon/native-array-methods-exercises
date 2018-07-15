function multiplyBy10 (array) {
 // your code here
 return array.map(elements => {
   return elements * 10
 })
};

function shiftRight (array) {
 // your code here
 return array.map((elements,index,arrays) => {
    return arrays[index - 1] || arrays[arrays.length -1]
 });
};

function onlyVowels (array) {
 // your code here
 return array.map((elements,array,index) => {
   return elements.replace(/[^aeiou]/ig,'')
 })
};

function doubleMatrix (array) {
 // your code here
 return array.map(value => {
   return value.map(num => {
      return num * 2
   })
 })
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};