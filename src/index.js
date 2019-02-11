/*const contenedor = documento.getElementById ("contenedor de datos");
const  button_enter  =  documento . getElementById ( ' btnIngresar ' );
button_enter . addEventListener ( ' click ' , ( evento ) => {
dejar nombre =  documento . getElementById ( ' nombre ' ). valor ;
documento . getElementById ( ' nombre ' ). valor  =  " " ;
const  container_datos  =  documento . createElement ( ' div ' );
container_datos . classList . añadir ( ' contenedor ' );
contenedor appendChild (container_datos);.*/
//esto es solo para cifar


document.getElementById('cifrar').addEventListener('click', () =>{
    let Mensaje = document.getElementById('mensaje').value;//toma de la pagina el texto ingresado por el usuario
    Mensaje = Mensaje.toUpperCase();//pasa el mensaje a mayuscula independiente de como lo escriba el usuario
    let edad = document.getElementById('edad').value;//value rescata los datos de mi imput de html
    let resultado = window.cipher.encode(edad, Mensaje);// este toma la funcion para codificar
    document.getElementById('cajaResultado').innerHTML = resultado;//muestra resultado en la cajaResultado

})
// aqui solo va a descifrar
document.getElementById('descifar').addEventListener('click', () =>{
    let mensajeParaCifar = document.getElementById('mensaje').value;
    let mensajeParaOffsetedad = document.getElementById('edad').value;//value rescata los datos de mi imput de html
    let resultado = window.cipher.decode(mensajeParaOffsetedad, mensajeParaCifar);// este toma la funcion para codificar
    document.getElementById('cajaResultado').innerHTML = resultado;//muestra resultado en la cajaResultado

})
