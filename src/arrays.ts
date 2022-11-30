let ar = [1,2,3]

ar.push(2)

ar = []
ar.push(3)
ar.push(55)

let arnumber:number[] = [33,56,234]


// best homogenous arrays
let ar1 = [1,"pepe"]

let res = ar1.map (_ => {
    if (typeof _ === 'number'){
        return _ *3
    }

    return _.toUpperCase()
})

console.log ("no homogeneous", ar1)
console.log ("no homogeneous map ", res)

// tuples
let tuple:[number] = [1]

tuple.push(3)
console.log ("tuple ", tuple)

// error
//tuple = [1,2,3]

let tupleOptional :[number , number?][] = 
[
    [3.45],
    [3.45, 34.54],
]

console.log ("tuple optional", tupleOptional)