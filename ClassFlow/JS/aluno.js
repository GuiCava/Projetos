const form = document.getElementById("justificativa");
let localhost = document.getElementById("idaluno")
let idaluno = document.getElementById("voltaridaluno")

let btn = document.getElementById("saida")
let Voltar = document.getElementById("Modal")

localhost.value = localStorage.getItem("id");
idaluno.value = localStorage.getItem("id")

let ultimoTotal = null;

form.addEventListener("submit", async (e) => {
  const form = document.getElementById('justificativa')
  const idaluno = form.idaluno.value;
  const local = form.opcao.value;

  try {
    const resposta = await fetch("http://10.106.208.30:3000/solicitacao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idaluno, local })
      
    });
    let success = document.getElementById("success")
    success.style.display = "grid";
    setInterval(() => { success.style.display="none";}, 2000);
  } catch (erro) {
    console.error(erro);
  }
});

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

      if (mov.id == input.value) {
        let Modal = document.getElementById("Modal");
        Modal.style.display = "grid";
        document.title = "(1) Aluno(a)"
      }
    });
  }
}

Voltar.addEventListener("submit", async (e) => {
  const idaluno = Voltar.idaluno.value;
  try {
    const resposta = await fetch("http://10.106.208.30:3000/voltei", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idaluno })
    });

    document.title = "Aluno(a)"


  } catch (erro) {
    console.error(erro);
  }
})
setInterval(carregarFora, 1000);

//IP PADRÃO: http://10.106.208.30:3000