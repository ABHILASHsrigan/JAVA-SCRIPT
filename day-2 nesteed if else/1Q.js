
let w = parseInt(prompt(" first DIGIT (w): "));
let x = parseInt(prompt(" second DIGIT (x): "));
let y = parseInt(prompt(" third DIGIT (y): "));
let z = parseInt(prompt(" fourth DIGIT (z): "));

let max;

if (w > x) {
    if (w > y) {
        if (w > z) {
            max = w;
        } 
        else {
            max = z;
        }
    } 
    else {
        if (y > z) {
            max = y;
        } 
        else {
            max = z;
        }
    }
} 
else {
    if (x > y) {
        if (x > z) {
            max = x;
        } 
        else {
            max = z;
        }
    } 
    else {
        if (y > z) {
            max = y;
        } 
        else {
            max = z;
        }
    }
}

document.write(" max digit is: " + max);
