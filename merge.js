/**
 * Merges two sorted arrays into a single sorted array.
 *
 * This function compares elements from both input arrays and pushes them into the result array
 * in ascending order. It uses two pointers to keep track of the current position in each array.
 *
 * Time complexity: O(n + m), where n and m are the lengths of the input arrays.
 * Space complexity: O(n + m) for the resulting array.
 *
 * @param {number[]} arr1 The first sorted array to merge.
 * @param {number[]} arr2 The second sorted array to merge.
 * @returns {number[]} A new sorted array containing all elements from both input arrays.
 */
function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;

  // Merge smaller elements first
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // Append any remaining elements from arr1
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  // Append any remaining elements from arr2
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

/**
 * Sorts an array using the merge sort algorithm.
 *
 * This implementation uses recursion to divide the array into smaller subarrays until
 * each subarray contains only one element. Then, it merges these subarrays back together
 * in sorted order using the merge function.
 *
 * Time complexity: O(n log n), where n is the length of the input array.
 * Space complexity: O(n) due to the recursive call stack and temporary arrays.
 *
 * @param {number[]} arr The array to sort.
 * @returns {number[]} A new sorted array.
 */
function mergeSort(arr) {
  // Base case: Arrays of length 0 or 1 are already sorted
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

module.exports = { merge, mergeSort };