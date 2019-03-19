/*
 * Submission date: March 18, 2019
 * Runtime: 72ms
 * Faster than: 89.55%
 * Memory Usage: 36.6 MB
 * Less than: Not sure
 */

// some test cases
// the asterick indicates what element findFirstNonIncreasingIdx would have found
// 2, 3, *1*, 1, 1 => false,
// 2, 3, *1*, 4, 4 => true, changed idx => 2
// 1, 3, *2*, 4, 4 => true, changed idx => 1
// 1, 4, *2*, 3, 3 => true, changed idx => 1
// 3, 4, *2*, 3, 3 => false
// 1, 4, *2*, 3, 3 => true, changed idx => 2

// finds the index of the first non decreasing element given an array
// returns -1 if not found
const findFirstNonIncreasingIdx = arr => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return i;
    }
  }

  return -1;
};

// check if an array is decreasing from a start index (inclusive)
const isIncreasing = (arr, start) => {
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < arr[i-1]) {
      return false;
    }
  }

  return true;
};

// goes through all the test cases
const checkPossibility = nums => {
  let firstNonIncreasingIdx = findFirstNonIncreasingIdx(nums);
  if (firstNonIncreasingIdx !== -1) {
    if (isIncreasing(nums, firstNonIncreasingIdx)) {
      if (firstNonIncreasingIdx <= 1 || firstNonIncreasingIdx === nums.length - 1) {
        return true;
      }
      // 1, 4, *2*, 3, 3 => true, changed idx => 1
      if (nums[firstNonIncreasingIdx] > nums[firstNonIncreasingIdx - 2]) {
        return true;
      }

      if (nums[firstNonIncreasingIdx + 1] > nums[firstNonIncreasingIdx - 1]) {
        return true;
      }
    }
  } else {
    return true;
  }

  return false;
};
