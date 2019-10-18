// 88. Merge Sorted Array
// Easy
// Given two sorted integer arrays nums1 and nums2,
// merge nums2 into nums1 as one sorted array.

export const merge = (nums1, nums2) => {
	const results = [];
	let i = 0;
	let j = 0;

	while (j < nums2.length && i < nums1.length) {
		if (nums2[j] > nums1[i]) results.push(nums1[i++]);
		else results.push(nums2[j++]);
	}
	while (i < nums1.length) results.push(nums1[i++]);
	while (j < nums2.length) results.push(nums2[j++]);
	return results;
};
