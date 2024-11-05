/**
 * Performs an insertion sort on the input array.
 *
 * Insertion sort works by iterating through the array one element at a time,
 * inserting each element into its proper position within the previously sorted portion of the array.
 *
 * Time complexity: O(n^2) in worst case, O(n) in best case when the array is already sorted.
 * Space complexity: O(1) as it only uses a constant amount of additional space.
 *
 * @param {Array<number>} arr - The input array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function insertionSort(arr) {
  // Iterate through each element in the array
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    
    // Find the position to insert the current element
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      // Shift larger elements to the right
      arr[j + 1] = arr[j];
      j--;
    }
    
    // Insert the current element at its proper position
    arr[j + 1] = currentValue;
  }
  
  return arr;
}

// Export the function as a module
module.exports = insertionSort;