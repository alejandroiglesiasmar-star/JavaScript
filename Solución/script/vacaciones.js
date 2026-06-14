var contadorClicks = 0;
let seccionImagenes = null;

const imagenes = [
    ['../img/refrig1.jpg', '../img/refrig2.jpg', '../img/refrig3.jpg'],
    ['../img/micro1.jpg', '../img/micro2.jpg', '../img/micro3.jpg'],
    ['../img/graf1.jpg', '../img/graf2.jpg', '../img/graf3.jpg'],
    ['../img/placa1.jpg', '../img/placa2.jpg', '../img/placa3.jpg']
];

function cambiarEstiloEncabezado() {
    contadorClicks++;
    
    let encabezado = document.getElementsByTagName('h1')[0];

    if (contadorClicks === 4) {
        encabezado.setAttribute('class', 'textoVerde');
        encabezado.removeAttribute("onclick");
        return;
    }

    let estiloAplicado = encabezado.getAttribute('class');
    if (estiloAplicado == null || estiloAplicado == "textoAzul") {
        encabezado.setAttribute('class', 'textoRojo');
    } else {
        encabezado.setAttribute('class', 'textoAzul');
    }
}

function actualizarComponentes() {
    if (seccionImagenes === null) {
        seccionImagenes = document.createElement("div");
        let ultimaSeccion = document.getElementById("ultimaSeccion");
        ultimaSeccion.appendChild(seccionImagenes);
    }

    let opcionSeleccionada = document.getElementsByName("opcionesComp")[0].value;
    seccionImagenes.innerHTML = '';
    
    for (let index = 0; index < imagenes[opcionSeleccionada].length; index++) {
        const img = document.createElement('img');
        img.src = imagenes[opcionSeleccionada][index];
        seccionImagenes.appendChild(img);   
    }
}

function validarEmail() {
    let dirCorreoE = document.getElementById('email').value;
    
    alert('Su dirección de correo es : ' + dirCorreoE);
    return false;
}