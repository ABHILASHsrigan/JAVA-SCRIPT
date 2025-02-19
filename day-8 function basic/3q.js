// 3Q

function factorial(n)
{
    let a = n;
    for(let b=(n-1); b>=1; b--)
    {
        n = n * (b);
    }

    document.write(n + " it is the factorial of " + a);
}

let b = prompt("Enter thye digit : ");
let n = parseInt(b);
factorial(n);
