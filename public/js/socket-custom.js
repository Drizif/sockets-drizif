var socket = io();

// Escuchar
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Conexion con el servidor perdida');
});

// Enviar información
socket.emit('enviarMsj', {
    usuario: 'Jose',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('Servidor:', resp);
});

// Escuchar informacion
socket.on('enviarMsj', function (mensaje) {
    console.log('Servidor:', mensaje);
});
