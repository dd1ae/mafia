document.getElementById("addBtn").onclick = async () => {
  const player = {
    id: Date.now(),
    name: "Игрок " + Math.floor(Math.random() * 1000)
  };

  try {
    const res = await fetch("https://1fed1331-e18b-4717-9002-397cd513ad10-00-2plu6732ele89.kirk.repl.co/add-player", {
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
