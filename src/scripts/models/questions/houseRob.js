export function Rob(nums) {
	let i = 0;
	let j = nums.length;
	let k = 1;
	let l = 0;
	let m = 1;
	let results = 0;
	let results2 = 0;
	let results3 = 0;
	let results4 = 0;

	while (i < j) {
		results += nums[i];
		i = i + 2;
	}
	while (k < j) {
		results2 += nums[k];
		k = k + 2;
	}
	while (l < j) {
		results3 += nums[l];
		l = l + 3;
	}
	while (m < j) {
		results4 += nums[m];
		m = m + 3;
	}
	return Math.max(results, results2, results3, results4);
}
