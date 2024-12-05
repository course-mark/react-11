import * as yup from "yup";

// const lenientNumberValidator = yup.number()
const strictNumberValidator = yup.number().strict()
// 1. "0"
let a = "0000";

try {
    strictNumberValidator.validateSync(a); // no error
    
} catch (error) {
    console.log(error.message, ":1");
    
}
try {
  a = "a";
  strictNumberValidator.validateSync(a); // error
} catch (error) {
  console.log(error.message, ":2");
}

a = 0;
try {
    strictNumberValidator.validateSync(a); // no error
} catch (error) {
    console.log(error.message, ":2.1");
    
}

try {
    a = true;
    strictNumberValidator.validateSync(a); // error
} catch (error) {
    console.log(error.message, ":3");
}

try {
    a = +true;
    // no error. because +true means 1
    strictNumberValidator.validateSync(a);
} catch (error) {
    console.log(error.message, ":4");
}

try {
    a = +!true;
    // no error because +!true means +false. +false means 0
    strictNumberValidator.validateSync(a);
} catch (error) {
    console.log(error.message, ":5");
}

try {
    // no error because +!true means +false. +false means 0
    a = ("Hello World".length) > 5 // true
    strictNumberValidator.validateSync(a);
} catch (error) {
    console.log(error.message, ":6");
}

try {
    // no error because +!true means +false. +false means 0
    a = ("Hello World".length) > 5 // true
    strictNumberValidator.validateSync(a);
} catch (error) {
    console.log(error.message, ":7");
}
try {
    // no error because +!true means +false. +false means 0
    a = (typeof !!1000).length
    strictNumberValidator.validateSync(a);
} catch (error) {
    console.log(error.message, ":8");
}



console.log("end");