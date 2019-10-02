export class Recursion {
  arraySum(integers) {
    let length = integers.length;
    if (length <= 0) return 0;
    let lastNumber = integers[length - 1];
    let allButLast = this.arraySumIterative(integers.slice(0, length - 1));
    return lastNumber + allButLast;
  }
  getNthFib(number) {
    if (number < 2) return number;
    return this.getNthFib(number - 1) + this.getNthFib(number - 2);
  }
}
