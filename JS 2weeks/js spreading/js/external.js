// const colors1 = ["white", "black", "yellow", "orange"];
// const colors2 = ["red", "blue", "green", "purple"];

// const mainColor = [...colors1, ...colors2];
// console.log("Result", mainColor);

const spreadObject1 = {
  firstName: "John",
};
const spreadObject2 = {
  lastName: "Doe",
};
const mainspreadObject = {
  ...spreadObject1,
  ...spreadObject2,
};

console.log("mainspreadObject", mainspreadObject);
