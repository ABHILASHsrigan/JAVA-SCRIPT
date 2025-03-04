let z=[2,3,1,4,5,78,9,6,];
for(let a=0; a<z.length; a++)
{
    for(b=a+1; b<z.length; b++)
    {
        if(z[a]>z[b])
        {
            let temp=z[a];
            z[a]=z[b];
            z[b]=temp;
        }
    }
}
document.write(z);