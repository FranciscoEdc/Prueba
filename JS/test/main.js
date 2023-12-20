
function resultado(){

    var puntuacion = 0;
    var p1 = document.getElementsByName('a');
    var p2 = document.getElementsByName('b');
    var p3 = document.getElementsByName('c');
    var p4 = document.getElementsByName('d');
    var p5 = document.getElementsByName('e');
    var p6 = document.getElementById('f');
    var p7 = document.getElementsByName('g');

    if (p1[1].checked) {
        puntuacion++;
    }
    if (p2[2].checked) {
        puntuacion++;
    }
    if (p3[0].checked) {
        puntuacion++;
    }
    if (p4[3].checked) {
        puntuacion++;
    }
    if (p5[3].checked) {
        puntuacion++;
    }
    if (p6.value=="GNU's Not Unix") {
        puntuacion++;
    }
    if (p7[0].checked && p7[2].checked && p7[4].checked && p7[5].checked ) {
        puntuacion++;
    }
    alert("Tu puntuación es " + puntuacion + "/7.");
}