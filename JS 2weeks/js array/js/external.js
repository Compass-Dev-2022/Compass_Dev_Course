// let traditionalArray = new Array("A", "B", "C");
// console.log("Result", traditionalArray);

// let nowArray = ["A", "B", "C", "D"];

// let arrayObject = [
//   {
//     a: "A",
//     b: "B",
//   },
// ];

let nowArray = ["A", "B", "C", "D"];
let nowArray2 = [1, 2, 3, 4];
let nowArray3 = [5, 6, 7, 8];

// console.log("Result", nowArray.length); //4
// console.log("Result", nowArray.indexOf("B")); //1
// nowArray.push("E"); //["A", "B", "C", "D","E"];
// nowArray.unshift("Alpha"); // ["Alpha", "A", "B", "C", "D"];
// nowArray.pop(); // ["A", "B", "C"];
// nowArray.shift(); // ["B","C","D"]
// nowArray.splice(1, 0, "F"); //["A","F","B","C","D"]
// nowArray.splice(3, 1, "E"); //["A","B","C","E"]

// console.log("Result", nowArray.slice(1, 3)); //["B","C"]

// console.log("Result", nowArray.includes("F"));//false
// console.log("Result", nowArray.includes("B"));//true

// console.log(
//   "Result",
//   nowArray.find((d) => d === "D")
// ); // D

// console.log(
//   "Result",
//   nowArray.findIndex((d) => d === "D")
// ); // D

// console.log(nowArray2.map((e) => e * 3)); //[3,6,9,12]

// console.log(nowArray2.filter((e) => e > 2)); //[3,4]

// console.log(nowArray2.reduce((a, b) => (c = a + b)));//10

// console.log(nowArray2.every((e) => e < 3)); //false
// console.log(nowArray2.every((e) => e < 5)); //true

// console.log(nowArray2.some((e) => e === 3)); //true
// console.log(nowArray2.some((e) => e === 5)); //false

// console.log(nowArray2.sort()); // [1,2,3,4]

// console.log(nowArray2.concat(nowArray3)); //[1,2,3,4,5,6,7,8]

// console.log(Array.of(1, 2, 3, 4, 5, 6));

let string1 = "abcdef";
console.log(Array.from(string1)); //["a","b","c","d","e","f"]
