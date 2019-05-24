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
}

//input test
//output tset
