function cambiarImagen(carruId) {
    var radios = document.getElementsByName('imagenSelector' + carruId.slice(-1));
    var carru = document.getElementById(carruId);
    var index;

    // Encontrar el botón de radio seleccionado
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            index = i;
            break;
        }
    }

    // Calcular el nuevo margen izquierdo
    var marginLeft = index * -100 + '%';

    // Aplicar la animación
    carru.querySelector('ul').style.marginLeft = marginLeft;
}