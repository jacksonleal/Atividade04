let img = document.querySelector('#urso');


window.onload = function () { // quando o HTML carregar, faça
    //document.onmousemove = function () { // quando o mouse mover sobre o documento, faça

    setInterval(function () {
        img.src = "images/images/chara-1.png";

    }, 400);

    setInterval(function () {
        img.src = "images/images/chara-3.png";

    }, 200);

    setInterval(function () {
        img.src = "images/images/chara-2.png";

    }, 300);

    this.onload();
    //}; // fecha onmousemove
}; //fecha onload