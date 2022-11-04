let result;

// -------- string conversion ----------
// let result;
// result = "3" + 2;
// console.log(result); //32

// result = "3" + true;
// console.log(result); //3true

// result = "3" + undefined;
// console.log(result); //3undefined

// result = "3" + null;
// console.log(result); //3null
// -------- Number conversion ----------
// result = "3" - "2";
// console.log(result); // 1

// result = "4" - 2;
// console.log(result); // 2

// result = "4" * 2;
// console.log(result); // 8

// result = "4" / 2;
// console.log(result); // 2

// result = "hello" - "world";
// console.log(result); //NaN

// result = "4" - "hello";
// console.log(result); //NaN

// result = "4" - true;
// console.log(result); //3

// result = 4 - true;
// console.log(result); //3

// result = 4 + true;
// console.log(result); //5

// result = 4 + false;
// console.log(result); //4

// result = 4 - false;
// console.log(result); //4

// result = 4 - null;
// console.log(result); //4

// result = 4 + null;
// console.log(result); //4

// result = 4 + undefined;
// console.log(result); // NaN

// result = 4 - undefined;
// console.log(result); // NaN

// result = true + undefined;
// console.log(result); // NaN

// result = null + undefined;
// console.log(result); // NaN

// let var1 = "123";
// console.log("var1", typeof var1); //String

// result = Number(var1);
// console.log("result", typeof result); //Number

// let var1 = "324e-1";
// console.log("var1", var1); //String 324e-1

// result = Number(var1);
// console.log("result", result); //Number 32.4

// let var1 = true;
// result = Number(var1);
// console.log("Result", result); // 1

// let var1 = false;
// result = Number(var1);
// console.log("Result", result); // 0

// let var1 = null;
// result = Number(var1);
// console.log("result", result);//0

// let var1 = "";
// result = Number(var1);
// console.log("Result", result); //0

// result = Number("hello");
// console.log(result); //NaN

// result = Number(undefined);
// console.log(result); //Nan

// result = Number(NaN);
// console.log(result); //NaN

// -------- String conversion ----------

// result = String(null);
// console.log(result); // null

// result = String(undefined);
// console.log(result); //undefined

// result = String(NaN);
// console.log(result); //NaN

// result = String(true);
// console.log(result); //true

// result = String(false);
// console.log(result); //false

// let var1 = 123;
// console.log("var1", typeof 123);

// result = String(var1);
// console.log(typeof result); // null

// -------- Boolean conversion ----------

// result = Boolean(324);
// console.log(result);//true

// result = Boolean("hello");
// console.log(result); //true

result = Boolean(" ");
console.log(result); //true
