const dataAtual = new Date();
const hora = dataAtual.getHours();
const minutos = dataAtual.getMinutes();
const idAluno = 0;
var btnAceitar = "0";
var btnRecusar = "0"

let ultimoTotal = null;

async function aceitar(form, id) {
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const str_hora = `${hora}:${minutos}`;
    const iddocente = form.querySelector(".iddocente").value;
    const idaluno = id;

    console.log("Aluno " + idaluno);
     
    form.remove()
    try {
        const resposta = await fetch('http://10.106.208.30:3000/aceitar', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ iddocente, str_hora, idaluno })
        });
    } catch (erro) {
        alert("Erro do servidor ao aceitar");
    }
}

async function recusar(form, id) {
    const idaluno = id;

    console.log("Aluno " + idaluno);
     
    try {
        const resposta = await fetch('http://10.106.208.30:3000/recusar', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idaluno })
        });
        
        form.remove()
    } catch (erro) {
        alert("Erro do servidor ao aceitar");
    }
}


async function carregarMovimentos() {
    const resposta = await fetch('http://10.106.208.30:3000/movimento');
    const movimentos = await resposta.json();

    if (movimentos.length > 0) {
        movimentos.forEach(mov => {
            const idDiv = `mov_${mov.id}`;
            
            if (document.getElementById(idDiv)) return;

            const container = document.getElementById("lista_solicitacoes");
            const form = document.createElement("form");
            form.className = "solicitacao";
            form.id = idDiv;

            const divNome = document.createElement("div");
            divNome.className = "nome";
            divNome.textContent = mov.nome;

            const divMotivo = document.createElement("div");
            divMotivo.className = "motivo";
            divMotivo.textContent = mov.local;

            btnAceitar = document.createElement("button");
            btnAceitar.textContent = "✓";
            btnAceitar.className = "aceitar";
            btnAceitar.value = mov.id;
            btnAceitar.type = "button";
            btnAceitar.onclick = () => aceitar(form, mov.id);

            btnRecusar = document.createElement("button");
            btnRecusar.textContent = "X";
            btnRecusar.className = "recusar";
            btnRecusar.value = mov.id
            btnRecusar.type = "button";
            btnRecusar.onclick = () => recusar(form, mov.id);

            const input = document.createElement("input");
            input.type = "hidden";
            input.name = "iddocente";
            input.className = "iddocente";
            input.value = localStorage.getItem("id");

            form.appendChild(divNome);
            form.appendChild(divMotivo);
            form.appendChild(btnAceitar);
            form.appendChild(btnRecusar);
            form.appendChild(input);
            container.appendChild(form);
        });
    }
}

async function carregarFora() {
    const resposta = await fetch('http://10.106.208.30:3000/listaFora');
    const movimentos = await resposta.json();

    const totalAtual = movimentos.length;

    if (ultimoTotal !== null && totalAtual !== ultimoTotal) {
        window.location.reload();
        return;
    }

    ultimoTotal = totalAtual;


    if (movimentos.length > 0) {
        movimentos.forEach(mov => {
            const idDiv = `mov_${mov.id}`;
            
            if (document.getElementById(idDiv)) return;

            const container = document.getElementById("lista_fora");
            const form = document.createElement("form");
            form.className = "fora";
            form.id = idDiv;

            const divNome = document.createElement("div");
            divNome.className = "nome";
            divNome.textContent = mov.nome;

            const divMotivo = document.createElement("div");
            divMotivo.className = "motivo";
            divMotivo.textContent = mov.local;

            const divHora = document.createElement("div");
            divHora.className = "hora"
            divHora.textContent = mov.horario

            const input = document.createElement("input");
            input.type = "hidden";
            input.name = "iddocente";
            input.className = "iddocente";
            input.value = localStorage.getItem("id");

            form.appendChild(divNome);
            form.appendChild(divMotivo);
            form.appendChild(divHora)
            form.appendChild(input);
            container.appendChild(form);
        });
    }
}


setInterval(carregarMovimentos, 1000);
setInterval(carregarFora, 1000);

//IP PADRÃO: http://10.106.208.30:3000