export function counterTime(min, sec, minute, second,time) {
    let startTimer = setInterval(() => {
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }

        second.innerText = sec < 10 ? "0" + sec : sec;
        minute.innerText = min < 10 ? "0" + min : min;
        return time = `${min}:${sec}`;
        //console.log(`${min}:${sec}`);
    }, 1000);

    return startTimer;
}
