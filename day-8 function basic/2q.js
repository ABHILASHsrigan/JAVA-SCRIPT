    // 2Q

function prime(n)
{
    let a = 0;
    for(let A=1; A<=n; A++)
    {
        if(n%A==0)
        {
            a++;
        }
    }
    if(a==2)
    {
        document.write(n + " is a prime number");   
    }
    else
    {
        document.write(n + " is not a prime number");   
    }
}
let b = prompt("Enter any number : ");
let n = parseInt(b);
prime(n);