setInterval(() => {
    date = new Date();
    time = date.getHours();
    sec = date.getSeconds();
    min = date.getMinutes();
    hrotation = 30*time + min/2;
    mrotation = 6*min;
    srotation= 6*sec;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
    
},1000);