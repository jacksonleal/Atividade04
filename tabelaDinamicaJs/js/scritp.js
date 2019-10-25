//Variáveis Globais
//let btn_acicionar = document.getElementById('add_linhas');
let btn_acicionar = document.querySelector("#add_linhas");
let campo_linhas = document.querySelector("input[name='qtd_linhas']");

//Objetos
function adicionaLinhaNaTable(time, jogos, pontos, remover) {
    this.time = time;
    this.jogos = jogos;
    this.pontos = pontos;
    this.remover = remover;

    this.mostrar_dados = function () {
        console.log("time " + this.time +
            "jogos " + this.jogos +
            "pontos " + this.pontos +
            "remover " + this.remover
        )
    };
};

//Funções
function add_dados(event) {

    event.preventDefault();
    let campo_digitado = campo_linhas.value;

    if (campo_digitado > 0) {
        nova_linha = new adicionaLinhaNaTable("Fiel ", "11 ", "22 ", "x ");
        nova_linha.mostrar_dados();

        document.querySelector(".alerta").textContent = "";
    } else {

        document.querySelector(".alerta").textContent = "Valor Invalido!";

    }

};

//Rotina Principal
btn_acicionar.addEventListener('click', add_dados);