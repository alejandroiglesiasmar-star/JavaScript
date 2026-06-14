// VARIABLES GLOBALES (Se declaran fuera para que mantengan su valor entre llamadas de funciones)
var contadorClicks = 0;       // Cuenta cuántas veces se ha pulsado el título
let seccionImagenes = null;   // Guardará el contenedor de imágenes para no duplicarlo

// Matriz de imágenes (Array bidimensional) ordenada por categorías de componentes (filas)
const imagenes = [
    ['../img/refrig1.jpg', '../img/refrig2.jpg', '../img/refrig3.jpg'], // Fila 0: Refrigeración
    ['../img/micro1.jpg', '../img/micro2.jpg', '../img/micro3.jpg'],       // Fila 1: Microprocesadores
    ['../img/graf1.jpg', '../img/graf2.jpg', '../img/graf3.jpg'],       // Fila 2: Tarjetas Gráficas
    ['../img/placa1.jpg', '../img/placa2.jpg', '../img/placa3.jpg']     // Fila 3: Placas Base
];

// 1. FUNCIÓN: Cambia el color del título de forma alterna y se bloquea al 4º clic
function cambiarEstiloEncabezado() {
    contadorClicks++; // Sumamos 1 al contador en cada clic
    
    // Captura el primer elemento <h1> de la página (índice [0])
    let encabezado = document.getElementsByTagName('h1')[0];

    // CONTROL DE TOPE: Si el usuario ya ha hecho 4 clics
    if (contadorClicks === 4) {
        encabezado.setAttribute('class', 'textoVerde'); // Se queda fijo en color verde
        encabezado.removeAttribute("onclick");          // Destruye el evento para que no responda más
        return;                                         // Sale de la función inmediatamente (código muerto posterior)
    }

    // INTERRUPTOR DE COLOR (Alterna entre Rojo y Azul)
    let estiloAplicado = encabezado.getAttribute('class'); // Lee la clase CSS actual
    
    // Si no tiene clase asignada (null) o si actualmente es azul
    if (estiloAplicado == null || estiloAplicado == "textoAzul") {
        encabezado.setAttribute('class', 'textoRojo');  // Lo cambia a rojo
    } else {
        encabezado.setAttribute('class', 'textoAzul');  // Si era rojo, lo cambia a azul
    }
}

// 2. FUNCIÓN: Muestra imágenes dinámicamente según lo elegido en un menú desplegable o input
function actualizarComponentes() {
    // SINGLETON (Evita duplicados): Si el contenedor 'div' de imágenes aún no existe en la web
    if (seccionImagenes === null) {
        seccionImagenes = document.createElement("div"); // Lo fabricamos en memoria
        let ultimaSeccion = document.getElementById("ultimaSeccion"); // Buscamos dónde engancharlo
        ultimaSeccion.appendChild(seccionImagenes); // Lo metemos al final de esa sección
    }

    // CAPTURA DE SELECCIÓN: Lee el valor (value) del primer elemento que tenga name="opcionesComp"
    // El 'value' nos devolverá un número en texto (ej: "0", "1", "2") que coincide con la fila de la matriz
    let opcionSeleccionada = document.getElementsByName("opcionesComp")[0].value;
    
    // LIMPIEZA CRUCIAL: Borra todo el contenido anterior del div para que no se acumulen las fotos viejas
    seccionImagenes.innerHTML = '';
    
    // BUCLE DE RENDERIZADO: Recorre la fila del array correspondiente a la opción seleccionada
    for (let index = 0; index < imagenes[opcionSeleccionada].length; index++) {
        const img = document.createElement('img'); // Crea la etiqueta <img> en memoria
        
        // Asigna la ruta de la imagen accediendo a la matriz: [fila seleccionada][columna actual]
        img.src = imagenes[opcionSeleccionada][index]; 
        
        seccionImagenes.appendChild(img); // Mete la imagen dentro de nuestro contenedor limpio
    }
}

// 3. FUNCIÓN: Captura el texto de un input de email y frena el envío del formulario
function validarEmail() {
    // .value extrae el texto exacto que el usuario ha escrito dentro del cuadro de texto <input id="email">
    let dirCorreoE = document.getElementById('email').value;
    
    // Muestra una ventana flotante informando al usuario
    alert('Su dirección de correo es : ' + dirCorreoE);
    
    // TRUCO DE FORMULARIOS: Devolver 'false' en un evento de formulario evita que la página se recargue,
    // permitiendo procesar los datos con JavaScript sin perder la vista actual.
    return false;
}