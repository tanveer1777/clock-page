setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hr = 30 * htime + mtime / 2
    mr = 6 * mtime
    sr = 6 * stime
    hours.style.transform = `rotate(${hr}deg)`;
    minutes.style.transform = `rotate(${mr}deg)`;
    seconds.style.transform = `rotate(${sr}deg)`;

}, 1000);
