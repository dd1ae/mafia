// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Переменные
const joinBtn = document.getElementById('joinBtn');
const statusDiv = document.getElementById('status');
const playerList = document.getElementById('player-list');

const players = [];

joinBtn.addEventListener('click', () => {
    const user = tg.initDataUnsafe?.user;

    if (user && user.first_name) {
        const alreadyJoined = players.find(p => p.id === user.id);
        if (!alreadyJoined) {
            players.push({ id: user.id, name: user.first_name });
            updatePlayerList();
            statusDiv.innerText = `${user.first_name} присоединился к игре!`;
            statusDiv.style.color = "lime";
        } else {
            statusDiv.innerText = `${user.first_name}, вы уже в игре!`;
            statusDiv.style.color = "orange";
        }
    } else {
        if (!tg.initData || tg.initData.length === 0) {
            statusDiv.innerText = `❌ Ошибка: Telegram не передал данные пользователя.`;
        } else {
            statusDiv.innerText = `❌ Ошибка: пользователь не найден.`;
        }
        statusDiv.style.color = "red";
    }
});

function updatePlayerList() {
    playerList.innerHTML = ""; // очистим старый список
    players.forEach((player, index) => {
        const li = document.createElement("li");
        li.innerText = `${index + 1}. ${player.name}`;
        playerList.appendChild(li);
    });
}
