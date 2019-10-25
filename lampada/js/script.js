
let lampadaAcesa = 0;
function colocarImg() {

    lampadaAcesa++;
    document.getElementById('lampada').src = "images/images/lampada-on.jpg";

    if (lampadaAcesa % 2 == 0)
        document.getElementById('lampada').src = "images/images/lampada.jpg";

}