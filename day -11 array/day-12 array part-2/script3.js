let z=[2,3,1,4,5,78,9,6];
let max=z[0];

for(let x=0; x<z.length; x++)
{
    if(max>z[x])
    {
        max=z[x];
    }
}
document.write(max + " it is minimum ");