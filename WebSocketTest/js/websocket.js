var socket;

function escribir() {
    var texto = document.getElementById("txtMensaje").value;
    //con esto cogemos el texto
    socket.send(texto);
    //con esto lo enviamos al socket

}

function escribirLista(obj) {

    var li = document.createElement("li");
    var tx = document.createElement(obj.text);
    li.appendChild(tx);

    document.getElementById("mensajes").appendChild(li);

}

function mensaje(evt) {
    //el JSON con el que trbajamos con el servidor tiene la propiedad text y la propiedad id, a mí me interesa la propiedad text
    var datos = eval('(' + evt.data + ')');

    if (datos.length > 0) {
        for (var i = 0; i < datos.length; i++) {

            escribirLista(datos[i]);
        }    

    } else {
        escribirLista(datos);
    }


}