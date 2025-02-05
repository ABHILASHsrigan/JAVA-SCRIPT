//       // wap to print fibbonachie series. : 0 1 1 2 3 5 8 13....

let i = 1;
let first =0;
let second = 1;
document.write(first+" "+second);
while(i<=15){
    let third = first + second ;
    document.write(" "+third);
    first=second
    second=third
    i++;

}