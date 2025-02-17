function tabal(n)
{

    document.write("<br>");
    for(let i=1; i<=10; i++)
    {
        document.write("<br>");
        for(let j=1; j<=n;  j++){
               document.write(j+"x"+i+ "= " + i*j + " " + " " + " "+" &nbsp;")
            }
            document.write("<br>");
    }
}
tabal(10);