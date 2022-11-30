let aa :object = {
    b:'x'
}

console.log ("object type", aa)
// error accesing oibject 
//console.log(aa.b)

let bb={
    b:"string value"
}

console.log ("object", bb.b)

let bb1 :{b:number} = {
    b:12
}

console.log ("object with number", bb1.b)

let bb3 = {
    firstName:"John",
    lastName:"barrowman"
}

class Person {
    constructor (
        public firstName: string,
        public lastName:string   )
        {}    
}

bb3 = new Person("Pedro", "Familiar")

console.log ("Object asign to constructor", bb3)

/*
Error

let a : {b:number}

a = {} // error!

a = {b:1, c:3} // error


*/

// optional propertys and index signatures
console.log("objects::optional properties")
console.log("--------------------------------------------------")

let bb4 :{
    b:number,
    c?: string,
    [key:number]: boolean
}

bb4 = {b:1}
console.log("only b defined", bb4)

if (bb4.c === undefined) {
    console.log ("c is undefined without defined it")
}


bb4 = {b:1, c:undefined}
console.log("only c undefined", bb4)
bb4 = {b:1, c:"valuec"}
console.log("only c with value", bb4)
bb4 = {b:1, c:"valuec"}
console.log("only c with value", bb4)
bb4 = {b:1, 10:false, 30:true}
console.log("only c with value", bb4)



let bb5 :{    
    [key:string]: string
}

bb5 = {}
bb5  ["paste"] = "mal"
bb5  ["calste"] = "bien"

console.log("keys with string", bb5)

// read only
let bb6 :{
    readonly firstName:string
} = {
    firstName : "peter"


}

// type aliases
type Age = number

type Person1 = {
    name:string,
    age:Age
}

let iam :Person1 = {
    name:"peter",
    age:33
}

type Returns = string | null
function trueOrNull (isTrue:boolean):Returns {
    if (isTrue) {
        return "true"
    }

    return null    
}
