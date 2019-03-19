/*
 * Submission date: March 18, 2019
 * Runtime: 60ms
 * Faster than: 93.88%
 * Memory Usage: 34.9 MB
 * Less than: Not sure
 */

// this solution is a bit tricky to explain
// essentially i gave all morse letters a binary representation
// where a dot is 0 and a dash is 1
// internally, it is stored as an integer
// leading 0's in the morse binary representation are taken care of by
// specifying the morse binary length
// when composing a morse word
// each letter is inserted through bitwise operations
// the existing word is shifted over and the new letter is put in using a bitwise OR operator
// then to further speed up the solution, the unique words are stored sorted
// a quick binary search is used to see if a word already exists

const morse = [
  1, 2, // a
  8, 4, // b
  10, 4, // c
  4, 3, // d
  0, 1, // e
  2, 4, // f
  6, 3, // g
  0, 4, // h
  0, 2, // i
  7, 4, // j
  5, 3, // k
  4, 4, // l
  3, 2, // m
  2, 2, // n
  7, 3, // o
  6, 4, // p
  13, 4, // q
  2, 3, // r
  0, 3, // s
  1, 1, // t
  1, 3, // u
  1, 4, // v
  3, 3, // w
  9, 4, // x
  11, 4, // y
  12, 4 // z
];

let lowerKeyCode = 'a'.charCodeAt(0);

const uniqueMorseRepresentations = words => {
  let morseWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = 0;
    for (let j = 0; j < words[i].length; j++) {
      let morseLetterIdx = (words[i].charCodeAt(j) - lowerKeyCode) * 2;
      // shift the word the proper amount then apply the letter as a bitmask 
      word = (word << morse[morseLetterIdx + 1]) | morse[morseLetterIdx];
    }

    // insert word if it doesn't already exist using binary search
    let left = 0;
    let right = morseWords.length - 1;
    let exists = false;
    
    while (left < right) {
      let middle = Math.floor((right + left) / 2);
      if (word > morseWords[middle]) {
        left = middle + 1;
      } else if (word < morseWords[middle]) {
        right = middle - 1;
      } else {
        exists = true;
        break;
      }
    }
    
    if (!exists) {
      if (morseWords.length > 0) {
        let val = morseWords[left];
        if (word > val) {
          morseWords.splice(left + 1, 0, word);
        } else if (word < val){
          morseWords.splice(left, 0, word);
        }
      } else {
        morseWords.push(word);
      }
    }
  }

  return morseWords.length;
};
