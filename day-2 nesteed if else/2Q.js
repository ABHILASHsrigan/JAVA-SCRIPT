// Taking four numbers as input from the user
let e = parseInt(prompt("Enter first digit :-"));
let f = parseInt(prompt("Enter second digit :-"));
let g = parseInt(prompt("Enter third digit :-"));
let h = parseInt(prompt("Enter fourth digit :-"));

let min;

if (e < f) {
    if (e < g) {
        if (e < h) {
            min = e;
        } 
else {
            min = h;
        }
    } 
else {
        if (g < h) {
            min = g;
        } 
else {
            min = h;
        }
    }
} 
else {
    if (f < g) {
        if (f < h) {
            min = f;
        } 
else {
        min = h;
        }
    } 
else {
        if (c < h) {
            min = g;
        } 
else {
            min = h;
        }
    }
}   document.write(" min numer is : " + min);
