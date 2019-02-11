window.cipher = {

  //id Mensaje = mensaje.toUpperCase();
  encode: (edad, Mensaje) => {

    let resultado = " ";//se pone vacio ya que va guardando los resultados
     
    for (let i = 0; i < Mensaje.length; i++) {//recorre mensaje
      let ascii = Mensaje.charCodeAt(i);//aplica cod ascii

      if (ascii >= 65 && ascii <= 90) { //aqui va parametro de cod ascii 65 letra a,90 letra z
       let mensajeAcodificado = ascii - 65 + parseInt(edad) % 26 + 65;//formula michell
        resultado += String.fromCharCode(mensajeAcodificado);//me da la letra del cod ascii
      }
    } return resultado;
  },
  decode: (edad, Mensaje) => {

    let resultado = " ";//se pone vacio ya que va guardando los resultados
     
    for (let i = 0; i < Mensaje.length; i++) {//recorre mensaje
      let ascii = Mensaje.charCodeAt(i);//aplica cod ascii

      if (ascii >= 65 && ascii <= 90) { //aqui va parametro de cod ascii 65 letra a,90 letra z
       let mensajeAcodificado = ascii - 90 - parseInt(edad) % 26 + 90 ;//formula michell de atras hacia adelante
        resultado += String.fromCharCode(mensajeAcodificado);//me da la letra del cod ascii
      }
    } return resultado;
  },
    //decode: (mensajeParaOffsetedad, mensajeParaCifarMensaje) => { 
     //for(let i = 0;i<mensajeParaCifar.length; i++);
     //let mensaje_decodificado = mensajeParaCifar.fromCharCode(i);
     //resultado += String.charCodeAt(mensaje_decodificado); 
    //}
    //return resultado;
  
};
