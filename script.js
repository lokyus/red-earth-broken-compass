let saude = 3;
let velocidade = 3;
let tamanho = 3;

const TOTAL_LIMITE = 9;

function ajustar(attr, mudanca) {
    let soma = saude + velocidade + tamanho;

    if (attr === 'saude') {
        if (mudanca > 0 && soma < TOTAL_LIMITE && saude < 5) saude++;
        else if (mudanca < 0 && saude > 1) saude--;
    }

    if (attr === 'velocidade') {
        if (mudanca > 0 && soma < TOTAL_LIMITE && velocidade < 5) velocidade++;
        else if (mudanca < 0 && velocidade > 1) velocidade--;
    }

    if (attr === 'tamanho') {
        if (mudanca > 0 && soma < TOTAL_LIMITE && tamanho < 5) tamanho++;
        else if (mudanca < 0 && tamanho > 1) tamanho--;
    }

    atualizarInterface();
}

function atualizarInterface() {
    document.getElementById("val-saude").innerText = saude;
    document.getElementById("val-vel").innerText = velocidade;
    document.getElementById("val-tam").innerText = tamanho;
    document.getElementById("pontos-restantes").innerText = TOTAL_LIMITE - (saude + velocidade + tamanho);

    let desc = "";
    // Lógica Inversa: Tamanho alto (compactação) é furtivo
    if (tamanho >= 4) desc = "OPERADOR FURTIVO (DIFÍCIL DE DETECTAR)";
    else if (tamanho <= 2) desc = "OPERADOR PESADO (ALVO EXPOSTO)";
    else desc = "PERFIL PADRÃO DE INFANTARIA";

    document.getElementById("val-tam-desc").innerText = desc;
}

// Inicializa a tela
atualizarInterface();