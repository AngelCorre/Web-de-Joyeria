function generarCotizacion() {

    var carru1Value = obtenerValorSeleccionado('imagenSelector1', 'carru1')
    var carru2Value = obtenerValorSeleccionado('imagenSelector2', 'carru2')
    var carru3Value = obtenerValorSeleccionado('imagenSelector3', 'carru3')
    var carru4Value = obtenerValorSeleccionado('imagenSelector4', 'carru4')

    if (!carru1Value || !carru2Value || !carru3Value || !carru4Value) {
        alert('Por favor, selecciona al menos un producto de cada categoría.')
        return
    }

    // Calcular precio //
    var precioCarru1 = calcularPrecio(carru1Value)
    var precioCarru2 = calcularPrecio(carru2Value)
    var precioCarru3 = calcularPrecio(carru3Value)
    var precioCarru4 = calcularPrecio(carru4Value)

    // subtotal, iva y total //
    var subtotal = precioCarru1 + precioCarru2 + precioCarru3 + precioCarru4
    var iva = subtotal * 0.16
    var total = subtotal + iva

    // Mostrar recibo //
    document.getElementById('productos-cotizados').innerHTML = `
        <p>Broquel: ${obtenerLabelSeleccionado('imagenSelector1')} - Precio: $${precioCarru1}</p>
        <p>Telefono: ${obtenerLabelSeleccionado('imagenSelector2')} - Precio: $${precioCarru2}</p>
        <p>Arracadas: ${obtenerLabelSeleccionado('imagenSelector3')} - Precio: $${precioCarru3}</p>
        <p>Anillos: ${obtenerLabelSeleccionado('imagenSelector4')} - Precio: $${precioCarru4}</p>
    `
    document.getElementById('subtotal').innerHTML = `<p>Subtotal: $${subtotal.toFixed(2)}</p>`
    document.getElementById('iva').innerHTML = `<p>IVA (16%): $${iva.toFixed(2)}</p>`
    document.getElementById('total').innerHTML = `<p>Total: $${total.toFixed(2)}</p>`

    // Mostrar el recibo estilo //
    document.getElementById('recibo').style.display = 'block'
}

function obtenerLabelSeleccionado(name) {
    var radioSeleccionado = document.querySelector(`input[name="${name}"]:checked`)
    if (radioSeleccionado) {
        return radioSeleccionado.parentElement.innerText.trim()
    }
    return ''
}

function obtenerValorSeleccionado(name, carruId) {
    var radios = document.getElementsByName(name)
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value
        }
    }
    return ''
}

function calcularPrecio(valor) {

    switch (valor) {
        case '0':
            return 65
        case '1':
            return 65
        case '2':
            return 65
        case '3':
            return 65
        case '4':
            return 85
        case '5':
            return 85
        case '6':
            return 85
        case '7':
            return 85
        case '8':
            return 75
        case '9':
            return 85
        case '10':
            return 120
        case '11':
            return 150
        case '12':
            return 155
        case '13':
            return 155
        case '14':
            return 155
        case '15':
            return 155
        default:
            return 0
    }
}

function resetearCotizacion() {
    var radios = document.querySelectorAll('input[type="radio"]')
    radios.forEach(function (radio) {
        radio.checked = false
    })


    // Ocultar recibo //
    document.getElementById('recibo').style.display = 'none'

    // Limpiar recibo //
    document.getElementById('productos-cotizados').innerHTML = ''
    document.getElementById('subtotal').innerHTML = ''
    document.getElementById('iva').innerHTML = ''
    document.getElementById('total').innerHTML = ''
}

document.querySelector('.reini').addEventListener('click', resetearCotizacion)
