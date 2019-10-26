//Variáveis Globais
//let btn_acicionar = document.getElementById('add_linhas');
let btn_acicionar = document.querySelector("#add_linhas");
let campo_linhas = document.querySelector("input[name='qtd_linhas']");
let corpo_tabela = document.querySelector("tbody");

let cont = 0;

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

    this.criar_linha_tabela = function () {
        //criar elementos
        let i = 0;
        for (i = 0; i < campo_linhas.value; i++) {

            cont++;

            let DOM_img = document.createElement("img");
            DOM_img.src = "img/times-circle-regular.svg";

            let linha = document.createElement("tr");
            let campo_time = document.createElement("td");
            let compo_jogos = document.createElement("td");
            let compo_pontos = document.createElement("td");
            let compo_remover = document.createElement("td");
            //aplicar estilo se necessario
            //criar nos
            let texto_time = document.createTextNode(cont + " - " + "SCCP");
            let texto_jogos = document.createTextNode("11" + cont);
            let texto_pontos = document.createTextNode("77" + cont);
            //vincular os nos aos elementos
            campo_time.appendChild(texto_time);
            compo_jogos.appendChild(texto_jogos);
            compo_pontos.appendChild(texto_pontos);
            compo_remover.appendChild(DOM_img);
            linha.appendChild(campo_time);
            linha.appendChild(compo_jogos);
            linha.appendChild(compo_pontos);
            linha.appendChild(compo_remover);
            //vincular os elementos ao documento
            corpo_tabela.appendChild(linha);
        }

    }

};

//Funções
function add_dados(event) {

    event.preventDefault();
    let campo_digitado = campo_linhas.value;

    if (campo_digitado > 0) {
        nova_linha = new adicionaLinhaNaTable("Fiel ", "11 ", "22 ", "x ");
        nova_linha.criar_linha_tabela();

        document.querySelector(".alerta").textContent = "";
        document.querySelector(".alerta").style.background = "rgb(0, 255, 21)";
    } else {

        document.querySelector(".alerta").textContent = "Valor Invalido!";
        document.querySelector(".alerta").style.background = "rgb(255, 20, 20)";
    }

};

function SomeDeleteRowFunction() {
    // event.target will be the input element.
    let td = event.target.parentNode;
    let tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

//Rotina Principal
btn_acicionar.addEventListener('click', add_dados);
corpo_tabela.addEventListener('click', SomeDeleteRowFunction);