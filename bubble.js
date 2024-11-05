/**
 * Performs a bubble sort algorithm on the input array.
 *
 * Bubble sort is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements, and swaps them if they are in the wrong order.
 * The pass through the list is repeated until the list is sorted.
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 *
 * @param {Array<number>} arr - The input array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function bubbleSort(arr) {
  /**
   * Swaps two elements in the array.
   *
   * @param {Array<number>} arr - The array containing the elements to swap.
   * @param {number} idx1 - The index of the first element to swap.
   * @param {number} idx2 - The index of the second element to swap.
   */
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  /**
   * The outer loop iterates over the array from the end towards the beginning.
   * Each iteration represents a pass through the array.
   */
  for (let i = arr.length - 1; i > 0; i--) {
    /**
     * The inner loop compares adjacent elements and swaps them if necessary.
     * It stops one element before the end of the unsorted portion of the array.
     */
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;