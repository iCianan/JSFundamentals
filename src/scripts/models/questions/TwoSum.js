export function twoNumberSum(array, targetSum) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        if (array[i] < array[j]) {
          return [array[i], array[j]];
        } else if (array[i] > array[j]) {
          return [array[j], array[i]];
        }
      }
    }
  }
  return results;
}
