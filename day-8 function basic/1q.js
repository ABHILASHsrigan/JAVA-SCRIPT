// 1Q

function add(num1,num2)
{
    document.write(num1 + " + " + num2 + " = " + (num1+num2));
    document.write("<br>");
}
function sub(num1,num2)
{
    document.write(num1 + " - " + num2 + " = " + (num1-num2));
    document.write("<br>");
}
function mul(num1,num2)
{
    document.write(num1 + " x " + num2 + " = " + (num1*num2));
    document.write("<br>");
}
function div(num1,num2)
{
    document.write(num1 + " / " + num2 + " = " + (num1/num2));
    document.write("<br>");
}

    let a = prompt("Enter the first number  : ");
    let b = prompt("Enter the second number: ");
    let choice = prompt("Enter the sign + , - , * , / : ");


    let num1 = parseInt(a);
    let num2 = parseInt(b);

    switch(choice)
    {
        case "+" : add(num1,num2);
        break;

        case "-" : sub(num1,num2);
        break;

        case "/" : div(num1,num2);
        break;

        case "*" : mul(num1,num2);
        break;

        default : document.write("Enter valid choice form + , - , / , *");
    }