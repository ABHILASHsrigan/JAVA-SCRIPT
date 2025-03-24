
   const btn = document.getElementById('btn');
   const colorCodeDiv = document.getElementById('colorCode');


   btn.addEventListener('click', () => {
       changeBackground();
   });

   const body = document.querySelector("body");


   function changeBackground() {
       const letters = '0123456789ABCDEF';
       let color = '#';
       for (let i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
       }
       body.style.backgroundColor = color;  
       colorCodeDiv.innerHTML = `Current Background Color: ${color}`; 
       console.log(`Current Background Color: ${color}`);
   }






















