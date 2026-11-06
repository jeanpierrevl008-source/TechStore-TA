
function enviarMensaje() {

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre == "" || correo == "" || mensaje == "") {

        document.getElementById("resultado").innerHTML =
        "Por favor completa todos los campos";

    } else {

        document.getElementById("resultado").innerHTML =
        "Gracias " + nombre + ", tu mensaje fue enviado";

    }

}
