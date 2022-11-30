let aa :object = {
    b:'x'
}

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