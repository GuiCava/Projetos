let piada = document.getElementById("piada");
let resposta = document.getElementById("resposta");
let B1 = document.getElementById("mostrarResposta");
let B2 = document.getElementById("proxima");

let points = 0;

B2.disabled = true;

B1.addEventListener("click", function() {
    if (piadaAtual) {
        resposta.innerText = piadaAtual.resposta;
        B2.disabled = false; 
    }
});

fetch('Doc/piadas.json')
    .then(response => response.json())
    .then(info => {
        todasPiadas = info;
        proxima();
    })

let todasPiadas = [];
let piadaAtual = null;

function proxima() {
    B2.disabled = true
    let total = todasPiadas.length;
    let Aleatorio = Math.floor(Math.random() * total);
    piadaAtual = todasPiadas[Aleatorio];
    localStorage.setItem("points", points++)
    console.log(localStorage.getItem("points"))

    piada.innerText = piadaAtual.pergunta;
    resposta.innerText = "";
}

function mostrarResposta() {
    if (piadaAtual) {
        resposta.innerText = piadaAtual.resposta;
    }
}
