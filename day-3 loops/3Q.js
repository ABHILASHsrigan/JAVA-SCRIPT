// wap to print only odd numbers using for/while/do..while loop

let n = prompt("Enter  number n: "); 
for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) 
    {
       document.write(i+ " ");
    }
}

// while loop 
let s = prompt("Enter  number s: "); 
let p = 1;
while (p <= s) {
    if (p % 2 !== 0) 
    {
        document.write(p+" ");
    }
    p++;
}

// do while lloopp
let a = prompt("Enter  a: "); 
let b = 1;
do 
{
 if (b % 2 !== 0) 
    {
        document.write(b+" " );
    }
    b++;
} while (b <= a);