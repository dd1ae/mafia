document.getElementById("addBtn").onclick = async () => {
  const player = {
    id: Date.now(),
    name: "Игрок " + Math.floor(Math.random() * 1000)
  };

  try {
    const res = await fetch("/add-player", { // 👈 работает всегда
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(player)
    });

    const data = await res.json();
    document.getElementById("response").innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById("response").innerText = "Ошибка: " + err.message;
  }
};
