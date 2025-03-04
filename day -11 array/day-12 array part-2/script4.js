let word="abhilash";
let count=1;
for(let a=0;  a<word.length;  a++)
{
    count=1;
    for(let b=a+1; b<word.length;  b++)
    {
        if(word[a]==word[b])
        {
            count++;
        }
    }
    document.write(word[a] +"-"+ count + "<br>" );

}