var palabraSecreta;
let errores = 0;
let aciertos = 0;
let palabras = [
    'LEON',     /* 0 */
    'CAMALEON',     /* 1 */
    'COMADREJA',    /* 2 */
    'ELEFANTE',       /* 3 */
    'JIRAFA',     /* 4 */
    'CEBRA',      /* 5 */
    'HIENA',       /* 6 */
    'RINOCERONTE',   /* 7 */
    'TIGRE' ,    /* 8 */
    'GORILA' ,  /* 9 */
    'COCODRILO' /*10*/
];


   
    

function agregarPalabra(){
   
   function  Animales(nombre){
   this.nombre = nombre;

 
   }
   var nombre_agregarPalabra = document.getElementById("nombre").value;
   

    nuevaPalabra = new Animales (nombre_agregarPalabra);
   console.log(nuevaPalabra);
   agregar();
  }

 
  function agregar(){
   palabras.push( nuevaPalabra);
    console.log(palabras);
    alert('La palabra se agrego correctamente');
    nombre.value = '';
}
 
var boton = id('partida_juego');
var foto = id ('imagen');
console.log(boton);

function iniciar(event){
    id('resultado').innerHTML = '';
    imagen.src = `imagenes/img0.png`;
    boton.disabled = true; //boton de iniciar juego nuevo queda desabilitado.
    errores = 0;
    aciertos = 0;
    var parrafo = id ("palabra_a_adivinar");
    parrafo.innerHTML = ''; // queda vacio el contenedor.
    var cantidad_palabras = palabras.length;
    var valor_azar = aleatorio(0,cantidad_palabras );
     console.log(valor_azar); 
 //reemplaza el numero aleatorio por la palabra de la lista 
 palabraSecreta = palabras [valor_azar];

   var cantidad_letras = palabraSecreta.length;
console.log(palabraSecreta);

//dibuja el renglon para la letra
var cantidad_letras;
         for (let i = 0; i < cantidad_letras; i++ ){
         var renglon = document.createElement('span');
         parrafo.appendChild(renglon);
         }
}


function clickLetras (){
    console.log(palabraSecreta);

}

var boton_letras = document.querySelectorAll('#letras button');

for (let i = 0; i < boton_letras.length ; i++ ){
    boton_letras [i].addEventListener( 'click', click_letras);
}


function click_letras(event){
    var espacio = document.querySelectorAll('#palabra_a_adivinar span');
 var button = event.target;
   button.disabled = true;
   var letra = button.innerHTML
      var palabra = palabraSecreta;
      var acerto = false;
      for(let i = 0 ; i < palabra.length ; i++ ){
      if ( letra == palabra [i]){
      espacio[i].innerHTML = letra;
      aciertos++;
          acerto = true;
             
          }
      }
if (acerto == false){
      errores++;
      var lista_foto = `imagenes/img${errores}.png`;
      imagen.src = lista_foto;

}
if (aciertos == palabra.length){
   
    id('resultado').innerHTML = "Felicitaciones, ganaste!!!";
    game_over();
   
}

else if (errores == 7){
    id('resultado').innerHTML ="Perdiste, la palabra secreta era " + palabra;
    game_over();
}


}     
    console.log(aciertos); 

function game_over(){
    for(let i = 0 ; i < boton_letras.length ; i++ ){
    boton_letras[i].disabled = true;   
}
boton.disabled = false;
}

// numeros aleatorios
function aleatorio(min,max){
    var cantidad = max - min;
    var  valor_azar = Math.floor( Math.random()* cantidad);
    return valor_azar;
}

function id(str){
    return document.getElementById(str);{
    }

}

