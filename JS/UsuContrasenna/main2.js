function enviar() {
    var usuario = document.getElementsByName("usu");
    var contrasenna = document.getElementsByName("cont");

    if (!usuario) {
        alert("Ingresa las credenciales solicitadas.");
    } else {
        if (!contrasenna) {
            alert("Ingresa las credenciales solicitadas.");
        } else {
            alert("Has iniciado sesión correctamente");
        }
    }
}