/**
 * Swaps two elements in an array.
 *
 * @param {Array} arr The input array.
 * @param {number} idx1 Index of the first element to swap.
 * @param {number} idx2 Index of the second element to swap.
 */
function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

/**
* Partitions the array around a pivot element.
*
* This function assumes the pivot is always the first element of the subarray.
* It rearranges the array such that all elements less than the pivot come before it,
* and all elements greater than the pivot come after it.
*
* @param {Array} arr The input array to partition.
* @param {number} [start=0] Starting index of the subarray to partition.
* @param {number} [end=arr.length - 1] Ending index of the subarray to partition.
* @returns {number} The final index of the pivot element.
*/
function pivot(arr, start = 0, end = arr.length - 1) {
  // We are assuming the pivot is always the first element
  const pivotElement = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
      if (pivotElement > arr[i]) {
          swapIdx++;
          swap(arr, swapIdx, i);
      }
  }

  // Swap the pivot from the start to the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

/**
* Recursively sorts an array using the quicksort algorithm.
*
* This implementation uses the Lomuto partition scheme, which is slightly faster
* than the standard Hoare partition scheme in practice.
*
* @param {Array} arr The input array to sort.
* @param {number} [left=0] Starting index of the subarray to sort.
* @param {number} [right=arr.length - 1] Ending index of the subarray to sort.
* @returns {Array} The sorted array.
*/
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

/**
* Exports the main functions of the module.
*
* @type {Object}
* @property {Function} pivot - Partitions the array around a pivot element.
* @property {Function} quickSort - Recursively sorts an array using the quicksort algorithm.
*/
module.exports = { pivot, quickSort };