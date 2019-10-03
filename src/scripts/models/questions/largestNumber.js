export function largestNumber(nums) {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = largestNumber(nums.slice(0, mid));
  let right = largestNumber(nums.slice(mid));
  return merge(left, right);
}

export function merge(left, right) {
  let results = "";
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (right[j] > left[i]) {
      results += right[j++];
    } else {
      results += right[j++];
    }
  }
  while (i < left.length) {
    results += left[i++];
  }
  while (j < right.length) {
    results += right[j++];
  }
  return results;
}
