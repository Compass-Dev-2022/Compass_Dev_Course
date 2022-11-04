// traditional usage
// let person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.id = 123;
// person.fullName = function () {
//   return this.firstName + this.lastName;
// };

// console.log(
//   "Person",
//   person.firstName,
//   person.lastName,
//   person.id,
//   person.fullName()
// );

// now usage

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 123,
//   fullName: function () {
//     return this.firstName + this.lastName;
//   },
// };

// console.log(
//   "Person",
//   person.firstName,
//   person.lastName,
//   person.id,
//   person.fullName()
// );

//Object.assign

// const obj1 = {
//   a: 1,
//   b: 2,
// };
// const obj2 = {
//   b: 3,
//   d: 4,
// };

// const result = Object.assign(obj1, obj2);
// console.log("Result", result);

// Object.entries

// const obj1 = {
//   a: 1,
//   b: 2,
// };

// const result = Object.entries(obj1);
// console.log("result", result);
// for (const [key, value] of result) {
//   console.log("value", value);
// }

// Object.fromEntries

// const entries = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);

// const result = Object.fromEntries(entries);
// console.log("Result", result);

// const obj = {
//   a: 1,
//   b: 2,
// };

// const result = Object.keys(obj);
// console.log("Result", result);

// const obj = {
//   a: 1,
//   b: 2,
// };

// const result = Object.values(obj);
// console.log("Result", result);
