//3Q
let a = [];
for (let b = 1; b * b <= 50; b++) 
{
    let door = (b * b) - 1;
     a[door] = 1; 
}


let opend = [];
let closed = [];

for (let b = 0; b < a.length; b++) 
{
    if (a[b] == 1) 
    {
        opend.push(b); 
    } else 
    {
        closed.push(b);
    }
}

for (let b = 0; b < a.length; b++) 
{
    if (a[b] == 1) 
    {
        opend.push(b+1); 
    } else 
    {
        closed.push(b+1);
    }
}

// print
document.write("Open doors: " + opend + "<br> <br>");

document.write("Closed doors: " + closed + "<br><br>");

document.write("Total open doors: " + opend.length + "<br> <br>");

document.write("Total closed doors: " + closed.length);