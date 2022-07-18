function encriptar() {
  var texto = document.getElementById("inputTexto").value.toLowerCase();
  //i es para que afecte tanto mayusculas y minusculas.
  //g es para toda la linea u oracion.
  //m es para que afecte a multiples lineas o parrafo.
  var txtCifrado = texto.replace(/e/gim, "enter");
  var txtCifrado = txtCifrado.replace(/o/gim, "ober");
  var txtCifrado = txtCifrado.replace(/i/gim, "imes");
  var txtCifrado = txtCifrado.replace(/a/gim, "ai");
  var txtCifrado = txtCifrado.replace(/u/gim, "ufat");

  document.getElementById("imagen-derecha").style.display = "none";
  document.getElementById("mensaje").style.display = "none";
  document.getElementById("texto").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}
function desencriptar() {
  var texto = document.getElementById("inputTexto").value.toLowerCase();
  //i es para que afecte tanto mayusculas y minusculas.
  //g es para toda la linea u oracion.
  //m es para que afecte a multiples lineas o parrafo.
  var txtCifrado = texto.replace(/enter/gim, "e");
  var txtCifrado = txtCifrado.replace(/ober/gim, "o");
  var txtCifrado = txtCifrado.replace(/imes/gim, "i");
  var txtCifrado = txtCifrado.replace(/ai/gim, "a");
  var txtCifrado = txtCifrado.replace(/ufat/gim, "u");

  document.getElementById("imagen-derecha").style.display = "none";
  document.getElementById("mensaje").style.display = "none";
  document.getElementById("texto").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
  var contenido = document.querySelector("#texto");
  contenido.select();
  document.execCommand("copy");
  alert("¡se copio!");
}
