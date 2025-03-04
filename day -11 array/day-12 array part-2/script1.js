parent = prompt

let word="anna";
let rev="";

for(let a= word.length-1; a>=0; a--)
{
    rev+=word[a];
}

if(word==rev)
{
    document.write(" This name is palindrom.");
}
else
{
    document.write( " This name is not palindrom.");   
}