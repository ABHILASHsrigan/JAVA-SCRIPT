
let n =  parseInt(prompt("ENTER THE NUMBER:"));
function printNumber(n,a=1)
{
       if(a>n)
       {
        return;
       }
       document.write(a + " ");
       printNumber(n,a+1);
}
printNumber(n);