
// 1Q.WAP TO CHECK THE VOTING ELIGIBILITY OF USER ?

let age = parseInt(prompt("Enter your age:"));


if (age >= 18) 
{
    console.log("AAP VOTE DAL SAKTE HO. ");
    alert("AAP VOTE DAL SAKTE HO.");
} 
else if (age<=0)
{
    console.log("NUMBER SAHI SE DALO ");
    alert("NUMBER SAHI SE DALO")
}

else if (age>=100)
{
        console.log("APNE NUMBER KUCH JADA DAL DIYA ");
        alert("APNE NUMBER KUCH JADA DAL DIYA ");
        
}

else 
{
    console.log("AAP VOTE NHI DAAL SAKTE HOO ! ");
    alert("AAP VOTE NHI DAAL SAKTE HOO !");
}