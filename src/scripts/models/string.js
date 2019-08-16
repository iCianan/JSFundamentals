export class String {
  reverseString(data) {
    let newString = "";
    for (let index = data.length - 1; index > -1; index--) {
      newString += data[index];
    }
    return newString;
  }
  reverse(data) {
    debugger;
    let length = data.length;
    for (let index = data.length - 1; index > -1; index--) {
      data.push(data[index]);
    }
    data = data.slice(length);
  }
  reverseOne(data) {
    return data.reverse();
  }

  twoNumberSum(array, targetSum) {
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
}

//input test
//output tset
