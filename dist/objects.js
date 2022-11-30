"use strict";
let aa = {
    b: 'x'
};
// error accesing oibject 
//console.log(aa.b)
let bb = {
    b: "string value"
};
console.log("object", bb.b);
let bb1 = {
    b: 12
};
console.log("object with number", bb1.b);
let bb3 = {
    firstName: "John",
    lastName: "barrowman"
};
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
bb3 = new Person("Pedro", "Familiar");
console.log("Object asign to constructor", bb3);
//# sourceMappingURL=objects.js.map