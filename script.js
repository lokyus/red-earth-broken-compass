// --- LÓGICA DO DOSSIÊ TÁTICO: RED EARTH ---

function abrirDossie(nome, biografia) {
    // Localiza os elementos que criamos no HTML
    const modal = document.getElementById("modal-dossie");
    const titulo = document.getElementById("modal-titulo");
    const texto = document.getElementById("modal-texto");

    // Insere os dados táticos do operador clicado
    titulo.innerText = "ARQUIVO CONFIDENCIAL: " + nome;
    texto.innerText = biografia;

    // Faz a janela aparecer alterando o CSS de 'none' para 'block'
    modal.style.display = "block";
    
    console.log("Acesso autorizado aos dados de " + nome);
}

function fecharDossie() {
    // Esconde a janela novamente
    document.getElementById("modal-dossie").style.display = "none";
}

// Fecha o dossiê se o usuário clicar fora da caixa (na parte escura)
window.onclick = function(event) {
    const modal = document.getElementById("modal-dossie");
    if (event.target == modal) {
        fecharDossie();
    }
}