// Estado inicial do nosso operador
let pontosRestantes = 0; // Começa em 0 porque vamos definir um total fixo
let saude = 3;
let velocidade = 3;
const TOTAL_PONTOS = 6;

function ajustarAtributo(atributo, mudanca) {
    // Lógica para Saúde
    if (atributo === 'saude') {
        if (saude + mudanca >= 1 && saude + mudanca <= 5) { // Limite de 1 a 5
            if ((saude + mudanca + velocidade) <= TOTAL_PONTOS) {
                saude += mudanca;
            } else {
                // Se aumentar saúde, tira de velocidade automaticamente
                saude += mudanca;
                velocidade -= mudanca;
            }
        }
    }
    
    // Lógica para Velocidade
    if (atributo === 'velocidade') {
        if (velocidade + mudanca >= 1 && velocidade + mudanca <= 5) {
            if ((velocidade + mudanca + saude) <= TOTAL_PONTOS) {
                velocidade += mudanca;
            } else {
                // Se aumentar velocidade, tira de saúde
                velocidade += mudanca;
                saude -= mudanca;
            }
        }
    }

    atualizarInterface();
}

function atualizarInterface() {
    document.getElementById("val-saude").innerText = saude;
    document.getElementById("val-vel").innerText = velocidade;

    // Lógica de Tamanho Baseada na Saúde (Simulando Hitbox do R6)
    let hitbox = "";
    if (saude >= 5) hitbox = "Extra-Largo (Fácil de atingir)";
    else if (saude >= 3) hitbox = "Médio";
    else hitbox = "Compacto (Difícil de atingir)";

    document.getElementById("val-tamanho").innerText = hitbox;
}