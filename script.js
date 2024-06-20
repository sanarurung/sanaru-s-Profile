function updateTimer() {
    const dday = Date.parse("2025/06/14 00:00:00");
    const now = new Date();
    const diff = dday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);


    const d = days;
    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = secs - mins * 60;


    document.getElementById("timer").innerHTML = '<a style="display: block; text-align: center;">' + d + ':' + h + ':' + m + ':' + s + '</a>';
}

setInterval(updateTimer, 1000);