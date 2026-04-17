function rolarDados() {
    // 1. Gerando os atributos (Lógica básica)
    let forca = Math.floor(Math.random() * 20) + 1;
    let agilidade = Math.floor(Math.random() * 20) + 1;
    let classe = "";

    // 2. Tomada de decisão (Aqui entra o ADS!)
    if (forca > agilidade && forca >= 15) {
        classe = "Guerreiro Pesado 🛡️";
    } else if (agilidade > forca && agilidade >= 15) {
        classe = "Ranger Veloz 🏹";
    } else if (forca < 5 && agilidade < 5) {
        classe = "Aldeão Comum 🥖";
    } else {
        classe = "Aventureiro Iniciante ⚔️";
    }

    // 3. Exibindo no HTML
    document.getElementById("forca").innerText = forca;
    document.getElementById("agilidade").innerText = agilidade;
    document.getElementById("classe").innerText = classe; // Vamos precisar criar esse ID no HTML
}