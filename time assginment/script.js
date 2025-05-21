let date = new Date();

let hrs = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

function updateTime()
{
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    $("#timetext").text(hrs + " : " + min + " : " + sec);
}

setInterval(updateTime, 1000);
updateTime();
today();