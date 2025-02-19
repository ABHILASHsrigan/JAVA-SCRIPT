function armstrong(n)
{
    let num = n;
    let result = 0;
    let count = 0;

    while(num>0)
    {
        num = Math.floor(num/10);
        count++;
    }

    num = n;

for(let A=1; A<=count; A++)
{
        let last = num % 10;
        let mult = 1;
        for(let B=1; B<=count; B++)
        {
            mult = mult * last;
        }
        result = result + mult;
        num = Math.floor(num/10);
}
    if(n==result)
    {
        document.write("THIS IS A ARMSTRONG NUMBER > ");
    }
    else
    {
        document.write("THIS NOT AN ARMSTRONG NUMBER !!");
    }
}

let x = prompt("enter any number : ");
let n = parseInt(x);
armstrong(n)