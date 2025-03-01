// Array para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    // Obtener el valor del campo de texto
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (!nombre) {
        alert('Por favor, ingresa un nombre');
        return;
    }

    //Agregar el nombre al array y actualizar la lista
    amigos.push(nombre);
    actualizarLista();

    // Limpiar el campo de texto
    input.value = '';

}