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

// Función para actualizar la lista de amigos
function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.querySelector('#listaAmigos');
    // Limpiar la lista
    lista.innerHTML = '';

    // Recorrer el array de amigos y agregar un elemento de lista por cada amigo
    for(let i = 0; i < amigos.length; i++) {
        let listaItem = document.createElement('li');
        listaItem.textContent = amigos[i];
        lista.appendChild(listaItem);
    }
}