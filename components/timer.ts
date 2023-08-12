export function counterTime(
    min: number,
    sec: number,
    minute: HTMLElement | null,
    second: HTMLElement | null,
) {
    const startTimer = setInterval(() => {
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }

        if (minute && second) {
            second.innerText = sec < 10 ? "0" + sec.toString() : sec.toString();
            minute.innerText = min < 10 ? "0" + min.toString() : min.toString();
        }
    }, 1000);

    return startTimer;
}
