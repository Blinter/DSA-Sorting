/**
 * Gets the digit at a specific position in a number.
 *
 * @param {number} num The input number.
 * @param {number} i The position of the digit to extract (0-indexed).
 * @returns {number} The extracted digit.
 */
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * Counts the number of digits in a given number.
 *
 * @param {number} num The input number.
 * @returns {number} The count of digits in the number.
 */
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Finds the maximum number of digits among all numbers in an array.
 *
 * @param {number[]} nums An array of numbers.
 * @returns {number} The maximum number of digits found.
 */
function mostDigits(nums) {
  let maxDigits = 0;
  for (const num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

/**
 * Performs Radix Sort on an array of integers.
 *
 * This implementation uses Least Significant Digit (LSD) Radix Sort.
 *
 * Time Complexity: O(nk), where n is the number of elements and k is the number of digits in the largest number.
 * Space Complexity: O(n + k), where n is the number of elements and k is the number of digits in the largest number.
 *
 * @param {number[]} nums The input array of integers to sort.
 * @returns {number[]} The sorted array of integers.
 */
function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (const num of nums) {
      const digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }

    nums = [].concat(...digitBuckets);
  }

  return nums;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };