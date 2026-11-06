
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const resultado = document.getElementById("resultado");

    if (nombre === "" || correo === "" || asunto === "" || mensaje === ""){
        resultado.textContent = "Por favor, completa todos los campos.";
    } else{
        resultado.textContent = "Gracias " + nombre + ", tu mensaje fue enviado correctamente.";
        formulario.reset() 
    }
});