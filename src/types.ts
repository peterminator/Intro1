
// Boolean

let isSunday:boolean = false
let is20:boolean = true

console.log("isSunday and is20: ", isSunday && is20, "  must be false" )
console.log("isSunday or is20: ", isSunday || is20, "  must be true" )
console.log("not isSunday and is20: ", !isSunday || is20, "  must be true" )



// number

let bits255:number = 255
let bits2:number = 2
let bits0:number = 0
let bits4:number = 0

console.log ("bits255 and bits2", bits2 & bits255, " => is 2")
console.log ("bits4 or bits2", bits2 | bits4, " => is 6")

// error in assigned boolean to number
// bits0 = is20

console.log ("Bad assigment from number to boolean:" ,  bits0)

// any
let vAny:any = 3
console.log ("any 1 " , vAny)
console.log ("any with + " , vAny +5)

vAny = "patata"
console.log ("any string with +" , vAny + 4)

//console.log ("any string with +" , vAny.func())

// bigint
let f:bigint = 100n

let g:100n 

g= 100n

console.log("type 100n :", g)

// String


// type of 
console.log("vAny:", typeof vAny)
console.log("bits2:", typeof bits2)
console.log("isSunday:", typeof isSunday)


// object