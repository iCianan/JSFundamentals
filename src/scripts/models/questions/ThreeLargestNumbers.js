import { mergeSort } from "../sort";
export function ThreeLargestNumbers(array) {
  let sorted = mergeSort(array);
  let results = [];
  //let high = Number.MIN_VALUE;
  for (let i = sorted.length - 3; i < sorted.length; i++) {
    results.push(sorted[i]);
  }
  return results;
}
