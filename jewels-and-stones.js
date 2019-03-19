/*
 * Submission date: March 18, 2019
 * Runtime: 60ms
 * Faster than: 92.85%
 * Memory Usage: 33.8 MB
 * Less than: 80.36%
 */

// in this solution, i disregard memory optimization for runtime performance
// this method allows for fast constant look-up times

let jewelArr = new Array(123);
let numJewels = 0;

const numJewelsInStones = (jewels, stones) => {
  // initialize an array to represent what ASCII characters are jewels
  // the last letter of the alphabet has a char code of 122, hence only 123 elements are required
  
  for (let i = 0; i < jewels.length; i++) {
    jewelArr[jewels.charCodeAt(i)] = true;
  }
  
  numJewels = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewelArr[stones.charCodeAt(i)]) {
      numJewels++;
    }
  }

  // reset the array
  for (let i = 0; i < jewels.length; i++) {
    jewelArr[jewels.charCodeAt(i)] = undefined;
  }
  
  return numJewels;
};
