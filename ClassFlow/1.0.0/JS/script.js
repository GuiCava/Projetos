localStorage.setItem("docente", "DSAdmin496");
localStorage.setItem("aluno", "AlunoDS4_496");

let docente = localStorage.getItem("docente");
let aluno = localStorage.getItem("aluno");

let textbox = document.getElementById("textbox");
let submit = document.getElementById("submit");

function Authenticator() {
    if (textbox.value === docente) {
        window.open("docente.html", "_self")
    } else if (textbox.value === aluno) {
        window.open("aluno.html", "_self")
    } else if (textbox.value === ""){
        alert("Preencha o campo!")
    } else {
        alert("ID não existente!")
    }

}