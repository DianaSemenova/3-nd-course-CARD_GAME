export let counterTime = function timer(hour, min, sec) {  
    //clearTimeout(startTimer);
    setTimeout(() => {
      setInterval(() => {
        sec++;
        if (sec === 60) {
          min++;
          sec = 0;
        }
        if (min === 60) {
          hour++;
          min = 0;
        }
     console.log(`${hour}:${min}:${sec}`);
      }, 1000);
 }, 5000);   
}
