let parrafoInformacion = "";

const datosLista1 = ["Caravana", "Mantenimiento mecánico", "ITV Pasada", 
        "Seguro", "Parking", "Revisiones del conjunto","Adaptar vehículo para remolcar"];
const datosLista2 = ["Autocaravana", "Filtros(Aire, aceite, otros)", "Mantenimiento mecánico", 
        "ITV Pasada", "Impuesto de circulación", "Seguro", "Vehículo o medio de transporte extra"];

function crearLista(){
    //Creamos el contenedor de la Lista y lo añadimos al documento
    let divContenedor = document.createElement("div");
    divContenedor.setAttribute("class", "fondoGris");
    document.body.appendChild(divContenedor);

    //Creamos la lista  y la añadimos al contenedor
    let listaPrincipal = document.createElement("ul");
    listaPrincipal.setAttribute("class", "estiloListaPrincipal");
    divContenedor.appendChild(listaPrincipal);

    //Creación de las listas anidadas
    let elemento1 = document.createElement("li");
    elemento1.setAttribute("class", "entradaListaPrincipal");
    elemento1.textContent = datosLista1[0];
    listaPrincipal.appendChild(elemento1);
    let listaAnidada1 = document.createElement("ul");
    listaPrincipal.appendChild(listaAnidada1);
    for (let i=1; i<=6; i++) {
        let entradaLista = document.createElement("li");
        entradaLista.setAttribute("class", "entradaListaAnidada");
        entradaLista.textContent = datosLista1[i];
        listaAnidada1.appendChild(entradaLista);
    }

    let elemento2 = document.createElement("li");
    elemento2.setAttribute("class", "entradaListaPrincipal");
    elemento2.textContent = datosLista2[0];
    listaPrincipal.appendChild(elemento2);
    let listaAnidada2 = document.createElement("ul");
    listaPrincipal.appendChild(listaAnidada2);
    for (let i=1; i<=6; i++) {
        let entradaLista = document.createElement("li");
        entradaLista.setAttribute("class", "entradaListaAnidada");
        entradaLista.textContent = datosLista1[i];
        listaAnidada2.appendChild(entradaLista);
    }
}

function validarOpciones() {
    let naturaleza = document.getElementById("naturaleza").checked;
    let ciudad = document.getElementById("ciudad").checked;
    let espacio = document.getElementById("espacio").checked;

    if (naturaleza && ciudad) {
        confirm("Aclárate!!!!");
    } else if (ciudad || (ciudad && espacio)){
        confirm("No es para ti");
    } else if(naturaleza || (naturaleza && espacio)) {
        confirm("Alquila una autocaravana");
    }

    mostrarMensajeAdicional(naturaleza, ciudad, espacio);
}

function mostrarMensajeAdicional(naturaleza, ciudad, espacio) {
    let divResultado = document.getElementById("resultado");

    if (naturaleza || ciudad || espacio) {
        if (parrafoInformacion == "") {
            parrafoInformacion = document.createElement("p");
            parrafoInformacion.setAttribute("class", "estiloInfoAdicional");
            parrafoInformacion.textContent = "Ponte en contacto con nsotros para mayor información. " + 
                                        "Estamos en C/Hierro nº4 Salamanca o en el teléfono 923654321";
        } 
        divResultado.appendChild(parrafoInformacion);
    } else {
        divResultado.innerHTML = "";
    }
}