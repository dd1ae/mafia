// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.ready(); // Говорим Telegram, что всё готово
tg.expand(); // Разворачиваем окно (опционально)

const joinBtn = document.getElementById('joinBtn');
const statusDiv = document.getElementById('status');

joinBtn.addEventListener('click', () => {
    // Получаем пользователя из Telegram WebApp
    const user = tg.initDataUnsafe.user;

    if (user && user.first_name) {
        statusDiv.innerText = `${user.first_name} присоединился к игре!`;
        statusDiv.style.color = "lime";

        // Здесь можно позже отправить user.id на сервер через fetch
        // fetch("/api/register", { ... })

    } else {
        statusDiv.innerText = `Ошибка: пользователь не найден.`;
        statusDiv.style.color = "red";
    }
});
