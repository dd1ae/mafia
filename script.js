// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Отладка — выведем initData в консоль
console.log("✅ initData:", tg.initData);
console.log("✅ initDataUnsafe:", tg.initDataUnsafe);

const joinBtn = document.getElementById('joinBtn');
const statusDiv = document.getElementById('status');

joinBtn.addEventListener('click', () => {
    const user = tg.initDataUnsafe?.user;

    if (user && user.first_name) {
        statusDiv.innerText = `${user.first_name} присоединился к игре!`;
        statusDiv.style.color = "lime";
    } else {
        // Если пользователь не найден
        if (!tg.initData || tg.initData.length === 0) {
            statusDiv.innerText = `❌ Ошибка: Telegram не передал данные пользователя.`;
        } else {
            statusDiv.innerText = `❌ Ошибка: пользователь не найден.`;
        }
        statusDiv.style.color = "red";
    }
});
