
// - DOM -

// 30 -Selecionar elemento e modificar conteúdo

document.getElementById("titulo").innerText = "Ola Mundo!!!";

// 31 - Selecionar e alterar o css

const paragrafos = document.querySelectorAll(".paragrafo")
for(const paragrafo of paragrafos){
    paragrafo.style.color = "green"
    paragrafo.style.background = "yellow"
}

// 32 - Alternar classe de elemento

function alternarAtivo(){
    const quadrado = document.querySelector(".quadrado");
    quadrado.classList.toggle("ativo")
}
const btn = document.querySelector("#botao-alternar")
btn.addEventListener("click", () => {
    alternarAtivo()
});

// 33 - Adicionando elementos pelo DOM

function adicionarItem(){
    const novoItem = document.createElement("li")
    novoItem.textContent = "Novo Item criado"
    document.querySelector(".lista").appendChild(novoItem)
}

const botaoAdicionar = document.querySelector("#adicionarItem")
botaoAdicionar.addEventListener("click", adicionarItem)

// 34 - Remover elemento por DOM

function removerItem(event) {

    const itemClicado = event.target

    itemClicado.remove()
}

const itens = document.querySelectorAll(".item")

for(const item of itens){
    item.addEventListener("click", removerItem)
}

// 35 - Filtrar itens

function filtrarLista(){

    const filtro = document.querySelector("#filtro").value.toUpperCase()

    const lista = document.querySelector("#listaDeItens")

    const itens = document.getElementsByTagName("li")

    for(let i = 0; i < itens.length; i++){
        const item = itens [i]

        const texto = item.textContent || item.innerText

        item.style.display = texto.toUpperCase().includes(filtro) ? "" : "none";

    }
}

const inputFiltro = document.querySelector("#filtro");
inputFiltro.addEventListener("keyup", filtrarLista)