function enviar() {
    var usuario = document.getElementsByName("usu");
    var contrasenna = document.getElementsByName("cont");

    if (usuario.checked) {
        if (contrasenna.checked) {
            alert("Has iniciado sesión")
        } else {
            alert("No has ingresado las credenciales de tu cuenta")
        }
    } else {
        alert("No has ingresado las credenciales de tu cuenta")
    }
}