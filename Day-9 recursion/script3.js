// n to 1 print,
let n = parseInt(prompt("enter the digit n :"));
function print(n)
{
    if(n<1)
    {
             return;
    }

     document.write(n + " ");
     print(n-1);
}
print(n);