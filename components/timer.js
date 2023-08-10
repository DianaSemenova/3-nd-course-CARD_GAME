export function counterTime(min, sec, stopTimer, minute, second) {
    let startTimer = setInterval(() => {
        if (stopTimer) {
            return;
        } else {
            sec++;
            if (sec === 60) {
                min++;
                sec = 0;
            }

            if (sec < 10) {
                second.innerText = "0" + sec;
            } else {
                second.innerText = sec;
            }

            if (min < 10) {
                minute.innerText = "0" + min;
            } else {
                minute.innerText = min;
            }
            console.log(`${min}:${sec}`);
        }
    }, 1000);

    if (stopTimer) {
        alert("test");
        clearInterval(startTimer);
    }
}
