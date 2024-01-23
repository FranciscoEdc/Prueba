function iniciar() {
    var usuario = document.getElementById("usuario");
    var clave = document.getElementById("clave");

    if (usuario.value=="jose" && clave.value==1234) {
        document.getElementById("sesion").innerHTML = "usuario correcto";
        document.getElementById("sesion").style.color = "green";
    } else {
        document.getElementById("sesion").innerHTML = "usuario erroneo";
        document.getElementById("sesion").style.color = "red";
    }
}
function continuar() {
    document.getElementById("adicional").classList.remove("oculto");
    document.getElementById("adicional").classList.add("visible");
}

function clonar() {
    var texto = document.getElementById("texto").innerHTML;
    document.getElementById("clon").innerHTML = texto;
}

//NO FECHO EN EL EXAMEN
function clonar2() {
    var texto = document.getElementById("texto");
    texto.innerHTML=texto.innerHTML+"<br>"+texto.innerHTML;
    
}
//NO FECHO EN EL EXAMEN

function nota() {
    var nota = document.getElementById("numero");

    if (nota.value < 3) {
        document.getElementById("nota").innerHTML = "Muy deficiente.";
    } else {
        if (nota.value < 5) {
            document.getElementById("nota").innerHTML = "Deficiente.";
        } else {
            if (nota.value < 7) {
                document.getElementById("nota").innerHTML = "Bien";
            } else {
                if (nota.value < 9) {
                    document.getElementById("nota").innerHTML = "Notable";
                } else {
                    document.getElementById("nota").innerHTML = "Sobresaliente";
                }
            }
        }
    }
}

//Lo siguiente nun lo fice nel examen. Ye'l ejerciciu 4.

function generar(){
    var aux=""; //Establez una variable que contendrá tolos números.
    for(var i=0;i<=50;i++){ //Un bucle.
        aux=aux+i; //Agrega'l siguiente número a la serie.
        if(i%2==0) //Comprueba si'l número ye múltiplo de 2. *BUSCAR QUÉ FAE'L PORCIENTU*
            aux=aux+" es número par.<br>"; //Indica que'l número ye par.
            else if(i%5==0) //Comprueba si'l número ye múltiplo de 5.
                aux=aux+"<br>"+"................................."+"<br>"; //Coloca una raya de puntos bajo el número.
            else aux=aux+"<br>"; //Si 'l número nun ye múltiplo de 2 ni de 5, solo agrega un saltu de página.
    }
}

//Ye lo mismo que lo anterior, pero usando while.
function generarwhile(){
    var salida = document.getElementById("salida");
    var aux="";
    var i=0;
    while(i<50){
        i++;
        aux=aux+i;
        if(i%2==0) aux=aux+" es múltiplo de 2.<br>";
        else if(i%5==0) aux=aux+"<br>"+"................................"+"<br>";
        else aux=aux+"<br>";
    }
    salida.innerHTML=aux;
}