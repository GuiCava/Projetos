let AddList = document.getElementById("AddList"); 
let section = document.getElementById("section"); 
let linha = document.getElementById("linha");

let afazeres = []; 

AddList.addEventListener("submit", (e) => { 
    e.preventDefault();
    let tarefa = document.getElementById("AddText").value; 
    
    if (!tarefa) return;
    
    afazeres.push(tarefa); 
    Listar(tarefa) ;
    localStorage.setItem("afazeres", JSON.stringify(afazeres));
}); 
    
    
function Listar(tarefa) { 
    let Lista = document.getElementById("Lista"); 

    const li = document.createElement("li"); 

    const form = document.createElement("form");

    const input = document.createElement("input"); 
    input.type = "submit"; 
    input.value = "X"; 
    
    const h3 = document.createElement("h3"); 
    h3.textContent = tarefa; 
    
    Lista.appendChild(li); 
    li.appendChild(form); 
    form.appendChild(input); 
    form.appendChild(h3); 
    
    listaComItens(); 
    
    
    form.addEventListener("submit", (e) => { 
        e.preventDefault(); 

        let mesmoItem = afazeres.indexOf(h3.textContent);

        if (mesmoItem !== -1) {
            afazeres.splice(mesmoItem, 1);
            localStorage.setItem("afazeres", JSON.stringify(afazeres))
        };

        li.remove(); 
        if (Lista.children.length == 0) { 
            listaVazia() 
        };
    });
} 

function listaComItens() { 
    section.style.display = "grid"; 
    linha.style.display = "grid"; 
} 

function listaVazia() { 
    section.style.display = "none"; 
    linha.style.display = "none"; 

}

function carregarLocal() {
    const dados = JSON.parse(localStorage.getItem("afazeres")) || [];
    afazeres = dados;
    afazeres.forEach(tarefa => Listar(tarefa));
}
carregarLocal()