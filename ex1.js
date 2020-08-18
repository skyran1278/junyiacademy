/**
 * (A)請寫一個程式把裡面的字串反過來。
 * @param {string} str
 * @return {string}
 */
const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("junyiacademy") === "ymedacaiynuj");

/**
 * (B)請寫一個程式把裡面的字串,每個單字本身做反轉,但是單字的順序不變。
 * @param {string} str
 * @return {string}
 */
const reverseVocabulary = (str) => str.split(" ").map(reverseString).join(" ");

console.log(
  reverseVocabulary("flipped class room is important") ===
    "deppilf ssalc moor si tnatropmi"
);
