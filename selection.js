/**
 * Performs a selection sort algorithm on an array.
 *
 * Selection sort works by repeatedly finding the minimum element from unsorted part
 * and putting it at the beginning. The algorithm maintains two subarrays in a given array:
 * 1) The subarray which is already sorted.
 * 2) Remaining subarray which is unsorted.
 *
 * In every iteration of selection sort, the minimum element from the unsorted subarray
 * is picked and moved to the sorted subarray.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @param {Array} arr - The input array to be sorted.
 * @returns {Array} The sorted array.
 */
function selectionSort(arr) {
  /**
   * Swaps two elements in the array.
   *
   * This function uses destructuring assignment to swap values efficiently.
   *
   * @param {Array} arr - The array containing the elements to swap.
   * @param {number} idx1 - Index of the first element to swap.
   * @param {number} idx2 - Index of the second element to swap.
   */
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Initialize the index of the smallest element
    let lowest = i;

    // Find the smallest element in the unsorted portion of the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    // If the smallest element isn't already in its correct position, swap it
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }

  // Return the sorted array
  return arr;
}

// Export the selectionSort function as a module
module.exports = selectionSort;