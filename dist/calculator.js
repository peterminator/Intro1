"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const calculator = (a, b, op) => {
    if (op === 'multiply')
        return a * b;
    if (op === 'add')
        return a + b;
    if (op === 'divide')
        return a / b;
    throw new Error("Operation is not valid");
};
try {
    console.log(calculator(1, 3, "add"));
    console.log(calculator(4, 3, "multiply"));
    console.log(calculator(4, 0, "divide"));
    console.log(process_1.argv);
    console.log("el 0 ", process_1.argv[0]);
    console.log("multiply", calculator(Number(process_1.argv[2]), Number(process_1.argv[3]), "multiply"));
}
catch (e) {
    console.log("Something went wrong", e);
}
//# sourceMappingURL=calculator.js.map