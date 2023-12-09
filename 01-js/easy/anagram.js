/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length!== str2.length) {
    return false;
  }
  const str1Arr = str1.toLowerCase().split("");
  const str2Arr = str2.toLowerCase().split("");
  const str1Obj = {};
  const str2Obj = {};
  for (let i = 0; i < str1Arr.length; i++) {
    const char = str1Arr[i];
    if (str1Obj[char]) {
      str1Obj[char]++;
    } else {
      str1Obj[char] = 1;
    }
  }
  for (let i = 0; i < str2Arr.length; i++) {
    const char = str2Arr[i];
    if (str2Obj[char]) {
      str2Obj[char]++;
    } else {
      str2Obj[char] = 1;
    }
  }
  for (let key in str1Obj) {
    if (str1Obj[key]!== str2Obj[key]) {
      return false;
    }
  }
  return true;
}


module.exports = isAnagram;
