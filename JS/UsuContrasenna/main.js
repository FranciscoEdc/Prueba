function enviar() {
    var nombre = document.getElementById("nom");
    var apellidos = document.getElementById("ape");
    var clave = document.getElementById("cla");
    var edad = document.getElementById("eda");
    var sexo = document.getElementById("sex");

    if (nombre.value.length > 0) {
        if (apellidos.value.length > 0) {
            if (clave.value.length > 0) {
                if (edad.value.length > 0) {
                    if (sexo.value.length > 0) {
                        alert("Los datos se han enviado correctamente.");
                    } else {
                        alert("Selecciona tu sexo.");
                    }
                } else {
                    alert("Ingresa tu edad.");
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