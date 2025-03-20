const title = document.getElementById("title");
 btn = document.getElementById("btn");

    let count = 0;
    btn.addEventListener("click", () => {
    count++;
    title.innerHTML = count;
});


const title2 = document.getElementById("title");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
 btn = document.getElementById("btn");
subBtn.addEventListener("click", () => {

    if (count > 0)
    {
        
      count--;
       
    }
   title.innerHTML = count;
});


minisubBtn.addEventListener("click", () => {
    if (count == 0) {
        document.write("0*0=0 IT IS NOT POSSIBLE SAME VALUE YOU WILL GET !");
    }
    else {
        count *= 2;
        title.innerHTML = count;
    }
});

minisubBtn2.addEventListener("click", () => {
   
   
    count /= 2;
    title.innerHTML = count;
});