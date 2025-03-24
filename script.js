const tg = window.Telegram.WebApp;
tg.expand();

const joinBtn = document.getElementById('joinBtn');
const statusDiv = document.getElementById('status');

joinBtn.addEventListener('click', () => {
    const user = tg.initDataUnsafe.user;
    if (user) {
        statusDiv.innerText = `${user.first_name} присоединился к игре!`;
    } else {
        statusDiv.innerText = `Ошибка: пользователь не найден.`;
    }
});
