
function resultado(){

    var puntuacion = 0;
var p1 = document.getElementsByName('a');
var p2 = document.getElementsByName('b');
var p3 = document.getElementsByName('c');
var p4 = document.getElementsByName('d');
var p5 = document.getElementsByName('e');

    if (p1[1].checked) {
        puntuacion++;
    }
    alert("Tu puntuación es " + puntuacion + "/5.");
 /*   if (p2[2].checked("true")) {
        (parseInt("puntuacion"))+1;
    }
    if (p3[0].checked("true")) {
        (parseInt("puntuacion"))+1;
    }
    if (p4[3].checked("true")) {
        (parseInt("puntuacion"))+1;
    }
    if (p5[3].checked("true")) {
        (parseInt("puntuacion"))+1;
    }

    window.alert(puntuacion);
   */ 
}