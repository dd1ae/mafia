const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const joinBtn = document.getElementById("joinBtn");
const statusDiv = document.getElementById("status");
const playerList = document.getElementById("player-list");

const API_URL = window.location.origin;

function updateList(players) {
  playerList.innerHTML = "";
  players.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerText = `${i + 1}. ${p.name}`;
    playerList.appendChild(li);
  });
}

async function loadPlayers() {
  try {
    const res = await fetch(`${API_URL}/players`);
    const data = await res.json();
    if (data.players) updateList(data.players);
  } catch (e) {
    statusDiv.innerText = "❌ Ошибка загрузки игроков";
    statusDiv.style.color = "red";
  }
}

joinBtn.addEventListener("click", async () => {
  const user = tg.initDataUnsafe?.user;
  if (!user) {
    statusDiv.innerText = "❌ Telegram не передал данные";
    statusDiv.style.color = "red";
    return;
  }

  const newPlayer = { id: user.id, name: user.first_name };

  try {
    const res = await fetch(`${API_URL}/add-player`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlayer)
    });

    const result = await res.json();
    if (result.success) {
      statusDiv.innerText = `✅ ${newPlayer.name} в игре`;
      statusDiv.style.color = "lime";
      loadPlayers();
    } else {
      throw new Error("Не удалось сохранить");
    }
  } catch (err) {
    statusDiv.innerText = "❌ Ошибка добавления";
    statusDiv.style.color = "red";
  }
});

loadPlayers();
