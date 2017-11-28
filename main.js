var flag = 0;

function startTime() {
    var today = new Date();
    var hrs = today.getHours();
    var hr = -1.57 + Math.PI * hrs / 6 + Math.PI * parseInt(today.getMinutes()) / 360;
    var mins = today.getMinutes();
    var min = -1.57 + Math.PI * mins / 30;
    var secs = today.getSeconds();
    var sec = -1.57 + Math.PI * secs / 30;
    var H = '....';
    var H = H.split('');
    var M = '.....';
    var M = M.split('');
    var S = '......';
    var S = S.split('');
    var Ypos = 0;
    var Xpos = 0;
    var Ybase = 8;
    var Xbase = 8;
    var dots = 12;
    mins = checkTime(mins);
    secs = checkTime(secs);

    if (hrs == 0) {
        document.getElementById('time').innerHTML = "12" + ":" + mins + ":" + secs + " MN";
    } else if (hrs < 12) {
        document.getElementById('time').innerHTML = hrs + ":" + mins + ":" + secs + " AM";
    } else if (hrs == 12) {
        document.getElementById('time').innerHTML = "12" + ":" + mins + ":" + secs + " NN";
    } else {
        document.getElementById('time').innerHTML = hrs % 12 + ":" + mins + ":" + secs + " PM";
    }

    //document.getElementById('time').innerHTML = hrs + ":" + mins + ":" + secs + " " + ampm;
    for (i = 0; i < dots; i++) {
        document.getElementById("dig" + (i + 1)).style.top = 0 - 15 + 40 * Math.sin(-0.49 + dots + i / 1.9).toString() + "px";
        document.getElementById("dig" + (i + 1)).style.left = 0 - 14 + 40 * Math.cos(-0.49 + dots + i / 1.9).toString() + "px";
    }
    for (i = 0; i < S.length; i++) {
        document.getElementById("sec" + (i + 1)).style.top = Ypos + i * Ybase * Math.sin(sec).toString() + "px";
        document.getElementById("sec" + (i + 1)).style.left = Xpos + i * Xbase * Math.cos(sec).toString() + "px";
    }
    for (i = 0; i < M.length; i++) {
        document.getElementById("min" + (i + 1)).style.top = Ypos + i * Ybase * Math.sin(min).toString() + "px";
        document.getElementById("min" + (i + 1)).style.left = Xpos + i * Xbase * Math.cos(min).toString() + "px";
    }
    for (i = 0; i < H.length; i++) {
        document.getElementById("hour" + (i + 1)).style.top = Ypos + i * Ybase * Math.sin(hr).toString() + "px";
        document.getElementById("hour" + (i + 1)).style.left = Xpos + i * Xbase * Math.cos(hr).toString() + "px";
    }

    //var countDownDate = new Date("Sep 22, 2017 00:00:00").getTime() + 86400000(1day) + 25200000(9hr);

    var countDownDate = new Date(today.toDateString()).getTime();
    var todayToTime = today.getTime();
    var diff;

    if (hrs < 12) {
        diff = (countDownDate + 25200000) - todayToTime;
    } else {
        diff = (countDownDate + 25200000) - todayToTime + 86400000;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = "Your Shift will END in " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (hrs > 12) {
        document.getElementById("marquee").innerHTML = "Reminder : Your First 15mins Break will Start in " + (23 - hrs) + "h " + minutes + "m " + seconds + "s ";
    } else if (hrs > 0 && hrs < 3) {
        document.getElementById("marquee").innerHTML = "Reminder : Your One Hour Break will Start in " + (1 - hrs) + "h " + minutes + "m " + seconds + "s ";
    } else if (hrs => 3) {
        document.getElementById("marquee").innerHTML = "Reminder : Your Last 15mins Break will Start in " + (4 - hrs) + "h " + minutes + "m " + seconds + "s ";
    } else {
        document.getElementById("marquee").innerHTML = "Reminder : No more breaks available for today...";
    }

    // If the count down is finished, write some text
    if (diff < 0) {
        clearInterval(startTime);
        flag += 1;
        document.getElementById("countdown").innerHTML = "Congratulations! You are FREE now!";
    }

    if (flag == 1) {
        fireworksDisplay();
    }

    var time = setTimeout(startTime, 50);
}

function fireworksDisplay() {
    $('.demo').fireworks({
        sound: true,
        opacity: 0.7,
        width: '100%',
        height: '100%'
    });
    $.snowfall.stop();
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}
//$('.demo').fireworks({ sound: true, opacity: 0.7, width: '100%', height: '100%' });
//$.snowfall.stop();
function snowFall() {
    $.snowfall.start({
        size: {
            min: 10,
            max: 20
        },
        color: '#fff',
        content: '&#10052;',
        //content: '<i class="fa fa-snowflake-o"></i>',
        interval: 500,
        disappear: 'linear'
    });
}

snowFall();

function chargebattery() {
    var a;
    a = document.getElementById("batt");
    a.innerHTML = "&#xf244;";
    setTimeout(function() {
        a.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function() {
        a.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function() {
        a.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function() {
        a.innerHTML = "&#xf240;";
    }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = canvas.width; // Number of stars

// Push stars to array

for (var i = 0; i < x; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random(),
        vx: Math.floor(Math.random() * 10) - 5,
        vy: Math.floor(Math.random() * 10) - 5
    });
}

// Draw the scene

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "lighter";

    for (var i = 0, x = stars.length; i < x; i++) {
        var s = stars[i];

        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Update star locations

function update() {
    for (var i = 0, x = stars.length; i < x; i++) {
        var s = stars[i];

        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.x = -s.x;
        if (s.y < 0 || s.y > canvas.height) s.y = -s.y;
    }
}

// Update and draw

function tick() {
    draw();
    //update();
    //requestAnimationFrame(tick);
}

tick();