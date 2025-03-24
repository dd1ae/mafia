// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.ready(); // Сообщаем Telegram, что WebApp готов
tg.expand(); // Разворачиваем на весь экран (по желанию)

console.log("🛠 initData:", tg.initData);
console.log("🛠 initDataUnsafe:", tg.initDataUnsafe);

const joinBtn = document.getElementById('joinBtn');
const statusDiv = document.getElementById('status');

joinBtn.addEventListener('click', () => {
    const user = tg.initDataUnsafe.user;

    // Если пользователь есть — выводим имя
    if (user && user.first_name) {
        statusDiv.innerText = `${user.first_name} присоединился к игре!`;
        statusDiv.style.color = "lime";

    // Если нет user, но есть query_id — WebApp запущен, но без имени
    } else if (tg.initDataUnsafe && tg.initDataUnsafe.query_id) {
        statusDiv.innerText = `⚠️ WebApp работает, но имя пользователя не передано.`;
        statusDiv.style.color = "orange";

    // Ничего не пришло — WebApp сломан или открыт напрямую
    } else {
        statusDiv.innerText = `❌ Ошибка: Telegram не передал данные пользователя.`;
        statusDiv.style.color = "red";
    }

    // Для отладки в консоли
    console.log("🧾 Пользователь:", user);
});
