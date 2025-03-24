let tg = window.Telegram.WebApp;
tg.expand();  // раскрывает WebApp на весь экран

let user = tg.initDataUnsafe.user;
document.getElementById("username").textContent = user.first_name;
document.getElementById("userphoto").src = user.photo_url;

document.getElementById("join").addEventListener("click", () => {
    tg.sendData(JSON.stringify({ action: "join" }));
    alert("Вы присоединились к игре!");
});