const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = form.nome.value;
    localStorage.setItem("id", document.getElementById("textbox").value)

    try {
        const aluno = await fetch(`http://localhost:3000/alunos?nome=${encodeURIComponent(nome)}`);
        const dados_alunos = await aluno.json();
        const docente = await fetch(`http://localhost:3000/docentes?nome=${encodeURIComponent(nome)}`);
        const dados_docente = await docente.json();

        if (dados_alunos.length > 0) {
            window.open("aluno.html", "_self");
        } else if(dados_docente.length > 0) {
            window.open("docente.html", "_self")
        } else {
            alert("Id inválido");
        }
    } catch (erro) {
        console.error(erro);
        alert("Erro no servidor");
    }
})

//IP PADRÃO:http://localhost:3000