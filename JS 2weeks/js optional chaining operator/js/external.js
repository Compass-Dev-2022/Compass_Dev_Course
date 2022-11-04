const person = {
  username: {
    name: "John",
  },
};

console.log("User", person.username.name); //John
// console.log("User", person.username1.name); // Type Error
console.log("User", person?.username1?.name); // undefined
