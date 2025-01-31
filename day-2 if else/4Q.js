//4Q. WAP TO PRINT GRADES OF STUDENT BASED ON THEIR PERCENTAGE ?

let percentage = parseFloat(prompt("Enter percent age :"));
let grades ;

if (percentage >= 95) 
{
    grades = "A1";
} 
else if (percentage >= 85) 
{
    grades = "A";
} 
else if (percentage >= 75) 
{
    grades = "B1";
} 
else if (percentage >= 65)
{
    grades = "B";
} 
else if (percentage >= 52) 
{
    grades = "C";
} 
else 
{
    grades = "D"; 
}
console.log("your grade is   : " + grades , "keep going "  );
alert("your grade is   : " + grades , "keep going " );