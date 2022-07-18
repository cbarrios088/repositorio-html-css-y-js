/* boton formulario*/
function obtener_datos () {
var nombre = document.getElementById('nombre').value;
var email = document.getElementById('email').value;
var asunto = document.getElementById('asunto').value;
var asunto = document.getElementById('mensagem').value;
alert ("Los datos se enviaron correctamente.");

document.forms.nombre.value = nombre;
document.forms.email.value = email;
document.forms.asunto.value = asunto;



    
}



