export function counterTime(hour, min, sec, stopTimer) {
    let startTimer = setInterval(() => {
        if (stopTimer) {
            return;
        } else {
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
        }
    }, 1000);

    if (stopTimer) {
        alert("test");
        clearInterval(startTimer);
    }
}
