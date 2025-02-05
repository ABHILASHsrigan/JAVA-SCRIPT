// 1Q.  wap to print 1 to n using for/while/do..while loop.
// for loop

let n = prompt("Enter a digit  n: "); 


for (let i = 1; i <= n; i++) {
    document.write(i+" "); 
    
}



// #while loop 

 let x = prompt("Enter  number x: "); 
 let i = 1;


 while (i <= x) {
     document.write(i+" ");
     i++;
 }

//  # do while
let y = prompt("Enter a number y: "); // Taking input from user
let z = 1;

// Using a do..while loop to print numbers from 1 to n
do {
    document.write(z+" ");
    z++;
} while (z <= y );
// 2. Print numbers from n to 1 using for, while, and do..while loops:
// Using a for loop:
// javascript
// Copy
// Edit
// let n = prompt("Enter a number n: "); // Taking input from user

// // Using a for loop to print numbers from n to 1
// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }
// Using a while loop:
// javascript
// Copy
// Edit
// let n = prompt("Enter a number n: "); // Taking input from user
// let i = n;

// // Using a while loop to print numbers from n to 1
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// Using a do..while loop:
// javascript
// Copy
// Edit

// 3. Print only odd numbers from 1 to n using for, while, and do..while loops:
// Using a for loop:
// javascript
// Copy
// Edit
// let n = prompt("Enter a number n: "); // Taking input from user

// // Using a for loop to print odd numbers from 1 to n
// for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }
// Using a while loop:
// javascript
// Copy
// Edit
// let n = prompt("Enter a number n: "); // Taking input from user
// let i = 1;

// // Using a while loop to print odd numbers from 1 to n
// while (i <= n) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }
// Using a do..while loop:
// javascript
// Copy
// Edit
// let n = prompt("Enter a number n: "); // Taking input from user
// let i = 1;

// // Using a do..while loop to print odd numbers from 1 to n
// do {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// } while (i <= n);
