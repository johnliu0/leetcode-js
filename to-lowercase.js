/*
 * Submission date: March 18, 2019
 * Runtime: 56ms
 * Faster than: 81.67%
 * Memory Usage: 33.8 MB
 * Less than: 20.00%
 */

// couldn't think of a much faster way to do this
const toLowerCase = str => {
  let lower = new Array(str.length);
  
  for (let i = 0; i < str.length; i++) {
    let keyCode = str.charCodeAt(i);
    if (keyCode >= 65 && keyCode <= 90) {
      lower[i] = String.fromCharCode(keyCode + 32);
    } else {
      lower[i] = str[i];
    }
  }

  return lower.join('');
};
