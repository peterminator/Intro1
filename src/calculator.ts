import { argv } from "process";

export type Operation = 'multiply'| 'add' | 'divide'
//type Result = number | string
type Result = number 

const calculator = (a:number, b:number, op:Operation):Result => {    
    if (op === 'multiply') return a*b;
    if (op === 'add') return a+b;
    if (op === 'divide') return a/b;

    throw new Error ("Operation is not valid")

}

try {
    console.log (calculator (1,3, "add"))
    console.log (calculator (4,3, "multiply"))
    console.log (calculator (4,0, "divide"))

    console.log (argv)
    console.log ("el 0 " , argv[0])

    console.log ("multiply", calculator (Number(argv[2]),Number(argv[3]), "multiply"))

}
catch (e) {
    console.log("Something went wrong", e)
}


