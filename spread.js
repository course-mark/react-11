// console.log("Hello world");
// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];

// const array3 = [...array1, ...array2];

// console.log(array3);

const basicDetails = {
  name: "Manjot",
  gender: "Male",
  age: "26",
};

const address = {
  address1: "#1, vpo tangra",
};

const obj = {
  ...basicDetails,
  ...address,
};

console.log(obj);
