let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;

let showCurrentTime = () => {
    let clock = document.getElementById('time');
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridian = "AM";

    if (hours > noon) {
        hours = hours - 12;
    }
    if (hours >= noon) {
        meridian = "PM";
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
       seconds = "0" + seconds;
    }
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
    clock.innerText = clockTime;
}

let updateClock = () => {
    let time = new Date().getHours();
    let lolCatImage = document.getElementById('lolcatImage');
    let timeDesc = document.getElementById('timeEvent');
    let messageText = "";
    let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    if (time == partytime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
    }
    else if (time == wakeuptime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
    }
    else if (time == lunchtime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
    }
    else if (time == naptime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
    }
    else if (time < noon) {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
    }
    else if (time >= evening) {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
    }
    else {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
    }

    console.log(messageText); 
    timeDesc.innerText = messageText;
    lolCatImage.src = image;
    
    showCurrentTime();
}
updateClock();

let x = 1000;
setInterval(updateClock, x);

let partyBtn = document.getElementById('btn');
let partyEvent = () => {
    if (partytime < 0) {
        partytime = new Date().getHours();
        partyBtn.innerText = "Party Over";
        partyBtn.style.backgroundColor = "#0A8DAB";
    } 
    else {
        partytime = -1;
        partyBtn.innerText = "Party Time!";
        partyBtn.style.backgroundColor = "#222";
    }
}

partyBtn.addEventListener("click", partyEvent);
partyEvent();

let wake = document.getElementById('wakeUp');
let wakeEvent = () => {
    wakeuptime = wake.value;
}
wake.addEventListener("change", wakeEvent);

let lunch = document.getElementById('lunch');
let lunchEvent = () => {
    lunchtime = lunch.value;
}
lunch.addEventListener("change", lunchEvent);

let nap = document.getElementById('nap');
let napEvent = () => {
    naptime = nap.value;
}
nap.addEventListener("change", napEvent);