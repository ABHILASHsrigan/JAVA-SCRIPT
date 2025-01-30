// 1. without using third variable ?
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);

//2. with using third variable ?

let c = 5;
let d = 10;
let temp; 

console.log("Before swapping:");
console.log("c =", c);
console.log("d =", d);



temp = c; 
c = d;    
d = temp; 

console.log("After swapping:");
console.log("c =", c);
console.log("d =", d);

//

function swapUsingXOR(a, b) {
    a = a ^ b; 
    b = a ^ b;  
    a = a ^ b;  
    
    console.log("After swapping: a = " + a + ", b = " + b);
}


let x = 5, y = 10;
swapUsingXOR(x, y);