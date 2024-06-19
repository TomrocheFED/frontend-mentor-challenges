function setUnreadMessages() {
    let unread = document.querySelectorAll(".unread");
    cNotifications.innerText = unread.length;
}

function readMessage() {
    this.classList.remove("unread");
    setUnreadMessages();
}

function readAllMessages(e) {
    let unread = document.querySelectorAll(".unread");
    unread.forEach(message => message.classList.remove("unread"));
}

const cNotifications = document.getElementById("notifications-amount");
const aUnread = document.querySelectorAll(".unread")
const eReadAll = document.getElementById("mark-all-as-read");

aUnread.forEach(message => message.addEventListener("click", readMessage));
eReadAll.addEventListener("click", readAllMessages)