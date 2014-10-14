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
    //el JSON con el que trabajamos con el servidor tiene la propiedad text y la propiedad id, a mí me interesa la propiedad text
    var datos = eval('(' + evt.data + ')');
    //le pido que me mida los datos, los evalúe, me mida si la longitud es mayor de cero, es decir si es un array, y si no lo es que me lo escriba, sino que me haga una lista
    if (datos.length) {
        //le pregunto si existe la propiedad lenght, para ver si es un array de objetos o un json
        for (var i = 0; i < datos.length; i++) {

            escribirLista(datos[i]);
        }    

    } else {
        escribirLista(datos);
    }
    
}

(function () {
    socket = new WebSocket("ws://localhost:54611/socket.ashx");
    socket.onopen = function() {
        alert("Abierto");
    };
    socket.onmessage = mensaje;
    socket.onerror = function(err) {

        alert("Cerrado");

    };

})();