function validar() {
    var nombre = document.getElementById("nom");
    var apellidos = document.getElementById("ape");
    var clave = document.getElementById("cla");
    var edad = document.getElementById("eda");
    var sexo = document.getElementsByName("sexo");

    if (nombre.value.length > 0) {
        if (apellidos.value.length > 0) {
            if (clave.value.length > 0) {
            if (clave.value.length > 3) {
            if (clave.value.length < 11) {
                if (edad.value.length > 0) {
                if (edad.value > 17) {
                    if (sexo[0/1].checked) {
                        alert("Los datos se han enviado correctamente.");
                    } else {
                        alert("Selecciona tu sexo.");
                    }
                } else {
                    alert("Eres demasiado joven para registrarte.")
                }
                } else {
                    alert("Ingresa tu edad.");
                }
            } else {
                alert("Tu clave debe contener desde 4 a 10 caracteres.");
            }
            } else {
                alert("Tu clave debe contener desde 4 a 10 caracteres.");
            }
            } else {
                alert("Ingresa tu clave.");
            }
        } else {
            alert("Ingresa tus apellidos.");
        }
    } else {
        alert("Ingresa tu nombre.");
    }
}