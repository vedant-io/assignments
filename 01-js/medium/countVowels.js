/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let newstr = str.toLowerCase();
    arrystr = newstr.split('');
    let vowels = 'aeiou'
    let counterofvowels = 0;
    for(let i = 0;i<arrystr.length;i++){
      if(vowels.includes(arrystr[i])){
         counterofvowels += 1;
      }
   
    }
    return counterofvowels;

}



module.exports = countVowels;