/**
 * 請寫一個程式, Input 是一個數字,
 * Output 是從 1 到這個數字,
 * 扣除掉所有 3 的倍數以及 5 的倍數,
 * 但是需要保留同時是 3 和 5 的倍數的總數字數。
 * @param {number} num
 * @return {number}
 */
const count = (num) =>
  Array(num)
    .fill(0)
    .map((_, index) => index + 1)
    .filter((v) => v % 15 === 0 || (v % 3 !== 0 && v % 5 !== 0)).length;

console.log(count(15) === 9);
