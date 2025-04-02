$(function() {
    function Clock() {

        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
       
        $('#currentdate').text(time);
        $('#digitalClock').text(date);
      
        
    }
    
    setInterval(Clock, 1000);
    Clock();
});