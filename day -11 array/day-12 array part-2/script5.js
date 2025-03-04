// 1q. TO GET LENGTH OF ARRAY  
// let arr = [ "cow", "elephant" , "tiger" ,"lion" , "dog" , "kashii"] 
// document.write(arr.length); print 

// 2Q . ARR.PUSH
// let arr = [ "cow", "elephant" , "tiger" ,"lion" , "dog" , "kashii"] 
// arr.push("egale") new step added
// document.write(arr) 
 
// 3Q convert array in a string (doubt)
// let arr = ["cow", "elephant", "tiger", "lion", "dog", "kashii"];
// let string = arr.toString(); 
// document.write(string); 

//4q convert array into string using seprator
// let arr = ["cow", "elephant", "tiger", "lion", "dog", "kashii"];
// let string = arr.join(" / "); // main line added
// document.write(string);

//5q To get element t specific index
// let arr = ["cow", "elephant", "tiger", "lion", "dog", "kashii"];
// let val = arr .at(4); // particular number indicates particular word
// document.write(val);

// 6q To remove the last elment of the array 
// let arr = ["cow", "elephant", "tiger", "lion", "dog", "kashii"];
// let val = arr.pop(); //remove the last word  ex :- kashiii
// document.write(arr);
// document.write("<br>");
// document.write(val); // except kashi all words are up and ksahii comes down 


// 7q To remove the first letter of array reverse of 6 question
// let arr = ["cow", "elephant", "tiger", "lion", "dog", "kashii"];
// let val = arr.shift();
// document.write(arr);
// document.write("<br>");
// document.write(val); //except  all words are up and cow comes down 

// 8q To inset new element at the start of array and return length
// let arr = ["cow", "elephant", "tiger", "lion", "dog", "kashii"];
// let length = arr.unshift(" buffalo"); // add the new word before the cow and count total elements
// document.write(arr);
// document.write("<br>");
// document.write(length); 

// 9q To arrange in ascending order 
let arr = ["cow", "elephant", "tiger", "lion", "dog", "kashii"];
let newarr = arr.sort ();
document.write(newarr);

