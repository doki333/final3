
//username popup
const popup = document.querySelector("#nameForm");
const popupBg = document.querySelector("#popupBg");
const container = document.querySelector("#container");
const nameLabel = document.querySelector(".nameLabel")
const username = document.querySelector("#username")
const sendBtn = document.querySelector(".sendBtn")
const userInput = localStorage.username;
const userHello = document.getElementById("userHello");
const greets= ['Have a Good Day', 'Enjoy your Day', 'Good Day to you','Have a Great Day' ];
const mainGreet = greets[Math.floor(Math.random()*(greets.length))];


function removePopup() {
    popup.classList.add("hidden");
    popupBg.classList.add("hidden");
    nameLabel.classList.add("hidden");
    username.classList.add("hidden");
    sendBtn.classList.add("hidden");
    container.classList.remove("hidden");
    popup.style.background = "rgba(0,0,0,0)"
}

if (localStorage.username===undefined) {
    popup.classList.remove("hidden");
    popupBg.classList.remove("hidden");
    popup.addEventListener("submit", function(event) {
        event.preventDefault();
        localStorage.setItem('username', username.value);
        removePopup();
        userHello.innerText = `${mainGreet}, ${username.value}!`})}
        else{removePopup();
            userHello.innerText = `${mainGreet}, ${userInput}!`;};



// Clock & Date
const bigClock = document.querySelector("#bigClock");
const dateSet = document.querySelector("#dateSet");


function clockSet() {
    const present = new Date();
    const hours = String(present.getHours()).padStart(2, "0");
    const minutes = String(present.getMinutes()).padStart(2, "0");
    const seconds = String(present.getSeconds()).padStart(2, "0");
    bigClock.innerText = `${hours} : ${minutes} : ${seconds} `
}

clockSet();
setInterval(clockSet, 1000);

const today = new Date();
const weekDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const day = weekDay[today.getDay()];
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
const month = monthList[today.getMonth()];

dateSet.innerText = `${day}, ${month} ${today.getDate()}, ${today.getFullYear()}`





// Background Images
const backgroundImgs = ["https://images.unsplash.com/photo-1627558652682-295db40e697c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1580896909767-aa52a63598cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1537727365640-d9b9cbeeac34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
]
const bgSelector = backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)]
document.body.setAttribute('style', `background-image: url('${bgSelector}')`)


