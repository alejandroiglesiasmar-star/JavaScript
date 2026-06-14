// VARIABLE GLOBAL (Mantiene su estado entre funciones)
// Se inicializa vacía. Servirá como un control para saber si el párrafo de contacto ya existe.
let parrafoInformacion = "";

// Arrays de datos que alimentarán las listas
const datosLista1 = ["Caravana", "Mantenimiento mecánico", "ITV Pasada", 
        "Seguro", "Parking", "Revisiones del conjunto","Adaptar vehículo para remolcar"];
const datosLista2 = ["Autocaravana", "Filtros(Aire, aceite, otros)", "Mantenimiento mecánico", 
        "ITV Pasada", "Impuesto de circulación", "Seguro", "Vehículo o medio de transporte extra"];

// 1. FUNCIÓN: Genera de forma dinámica una lista de viñetas con sublistas (anidadas)
function crearLista(){
    // Creamos un <div> contenedor gris y lo añadimos al final del body
    let divContenedor = document.createElement("div");
    divContenedor.setAttribute("class", "fondoGris");
    document.body.appendChild(divContenedor);

    // Creamos la lista principal desordenada <ul> (Lista madre)
    let listaPrincipal = document.createElement("ul");
    listaPrincipal.setAttribute("class", "estiloListaPrincipal");
    divContenedor.appendChild(listaPrincipal);

    // --- PRIMER BLOQUE: CARAVANA ---
    // Creamos la primera categoría principal <li> y le asignamos el texto "Caravana" (índice 0)
    let elemento1 = document.createElement("li");
    elemento1.setAttribute("class", "entradaListaPrincipal");
    elemento1.textContent = datosLista1[0];
    listaPrincipal.appendChild(elemento1); // Se cuelga de la lista madre
    
    // Creamos una nueva lista <ul> (sublista o lista anidada) justo debajo del título anterior
    let listaAnidada1 = document.createElement("ul");
    listaPrincipal.appendChild(listaAnidada1);
    
    // Bucle para meter las características de la Caravana (índices 1 al 6 del array)
    for (let i = 1; i <= 6; i++) {
        let entradaLista = document.createElement("li");
        entradaLista.setAttribute("class", "entradaListaAnidada");
        entradaLista.textContent = datosLista1[i]; // Extrae el texto del array 1
        listaAnidada1.appendChild(entradaLista);    // ¡OJO!: Se cuelga de la lista anidada, no de la madre
    }

    // --- SEGUNDO BLOQUE: AUTOCARAVANA ---
    // Creamos la segunda categoría principal <li> con "Autocaravana" (índice 0)
    let elemento2 = document.createElement("li");
    elemento2.setAttribute("class", "entradaListaPrincipal");
    elemento2.textContent = datosLista2[0];
    listaPrincipal.appendChild(elemento2);
    
    // Creamos su correspondiente sublista <ul>
    let listaAnidada2 = document.createElement("ul");
    listaPrincipal.appendChild(listaAnidada2);
    
    // ¡¡ALERTA DE EXAMEN / ERROR EN EL CÓDIGO ORIGINAL!! 
    // Fíjate en 'datosLista1[i]'. El bucle recorre y pinta los datos de la lista de Caravana
    // en lugar de usar 'datosLista2[i]' (Autocaravana). Tu profesor comprobará si ves este fallo.
    for (let i = 1; i <= 6; i++) {
        let entradaLista = document.createElement("li");
        entradaLista.setAttribute("class", "entradaListaAnidada");
        entradaLista.textContent = datosLista1[i]; // <-- Debería ser datosLista2[i]
        listaAnidada2.appendChild(entradaLista);
    }
}

// 2. FUNCIÓN: Comprueba el estado de los checkboxes mediante ventanas de confirmación (Aceptar/Cancelar)
function validarOpciones() {
    // Comprobamos con .checked si los inputs están marcados (true / false)
    let naturaleza = document.getElementById("naturaleza").checked;
    let ciudad = document.getElementById("ciudad").checked;
    let espacio = document.getElementById("espacio").checked;

    // Condicionales con ventanas emergentes confirm()
    if (naturaleza && ciudad) {
        confirm("Aclárate!!!!");
    } else if (ciudad || (ciudad && espacio)){
        confirm("No es para ti");
    } else if(naturaleza || (naturaleza && espacio)) {
        confirm("Alquila una autocaravana");
    }

    // Llama inmediatamente a la siguiente función pasándole las tres respuestas por parámetro
    mostrarMensajeAdicional(naturaleza, ciudad, espacio);
}

// 3. FUNCIÓN: Muestra u oculta un texto de contacto abajo en base a los datos seleccionados
function mostrarMensajeAdicional(naturaleza, ciudad, espacio) {
    // Apuntamos al contenedor final de la web donde se pintará el mensaje
    let divResultado = document.getElementById("resultado");

    // Si el usuario ha marcado CUALQUIERA de las tres casillas (operador ||)
    if (naturaleza || ciudad || espacio) {
        
        // CONTROL DE DUPLICADOS: Si la variable global sigue vacía, significa que el párrafo NO se ha creado aún
        if (parrafoInformacion == "") {
            // Fabricamos el párrafo de información desde cero y le damos texto
            parrafoInformacion = document.createElement("p");
            parrafoInformacion.setAttribute("class", "estiloInfoAdicional");
            parrafoInformacion.textContent = "Ponte en contacto con nosotros para mayor información. " + 
                                            "Estamos en C/Hierro nº4 Salamanca o en el teléfono 923654321";
        } 
        // Si ya estaba creado de antes, se salta el 'if' y directamente lo volvemos a añadir.
        // Como la variable ya hace referencia a un nodo existente, .appendChild no lo duplica, solo asegura que esté ahí puesto.
        divResultado.appendChild(parrafoInformacion);
        
    } else {
        // Si el usuario desmarca todas las casillas, vaciamos el contenedor borrando el texto de contacto
        divResultado.innerHTML = "";
    }
}