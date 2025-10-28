function aceitar() {

}

function recusar() {

}

function emsala() {
    
}

function adicionarSolicitacao(nome) {
    const container = document.getElementById("lista_solicitacoes");

    const divSolicitacao = document.createElement("div");

    const divNome = document.createElement("div");
    divNome.textContent = nome;

    const btnAceitar = document.createElement("button");
    btnAceitar.textContent = "Aceitar";
    btnAceitar.id = "aceitar";
    btnAceitar.onclick = () => aceitar(nome);

    const btnRecusar = document.createElement("button");
    btnRecusar.textContent = "Recusar";
    btnRecusar.id = "recusar";
    btnRecusar.onclick = () => recusar(nome);

    divSolicitacao.appendChild(divNome);
    divSolicitacao.appendChild(btnAceitar);
    divSolicitacao.appendChild(btnRecusar);

    container.appendChild(divSolicitacao);
}

// Função a executar quando um aluno fizer uma solicitação: 
// adicionarSolicitacao("Sofia Andrade Félix");