const datosColumnas = [
    ["Filtros (Aire, Aceite, otros)", "Mantenimiento mecánico*", "ITV(Inspección técnica de vehículos)",
        "Impuesto Circulación", "Seguro**", "·Vehículo o medio de transporte extra", "PArking***", 
        "Revisiones del conjunto", "Adaptar vehículo para remolcar"],
    ["NO", "NO/SÍ", "NO/SÍ", "NO", "SI", "NO", "SI", "SI", "SI"],
    ["SI", "SI", "SI", "SI", "SI", "SI", "NO/SÍ", "SI", "NO"]
];

function crearTabla(){
    //Creamos el contenedor de la tabla y lo añadimos al documento
    let divContenedor = document.createElement("div");
    divContenedor.setAttribute("class", "fondoAzul");
    document.body.appendChild(divContenedor);

    //Creamos la tabla y la añadimos al contenedor
    let tabla = document.createElement("table");
    divContenedor.appendChild(tabla);

    //Creación de las celdas que conforman la cabecera de la tabla
    let cabecera = document.createElement("tr");
    let col1 = document.createElement("th");
    cabecera.appendChild(col1);
    let col2 = document.createElement("th");
    col2.setAttribute("class", "estiloCeldaCabecera");
    col2.textContent = "Caravana";
    cabecera.appendChild(col2);
    let col3 = document.createElement("th");
    col3.setAttribute("class", "estiloCeldaCabecera");
    col3.textContent = "Autocaravana";
    cabecera.appendChild(col3);
    tabla.appendChild(cabecera);

    //Creación del resto de filas y celdas de la tabla
    for (let i=0; i<9; i++) {
        let fila = document.createElement("tr");
        tabla.appendChild(fila);
        for (let j = 0; j<3; j++) {
            let celda = document.createElement("td");
            celda.setAttribute("class","estiloCelda");
            celda.textContent = datosColumnas[j][i];
            fila.appendChild(celda);
        }

    }

}

function validarOpciones() {
    let naturaleza = document.getElementById("naturaleza").checked;
    let ciudad = document.getElementById("ciudad").checked;
    let espacio = document.getElementById("espacio").checked;

    if (naturaleza && ciudad) {
        alert("Aclárate!!!!");
    } else if (ciudad || (ciudad && espacio)){
        alert("No es para ti");
    } else if(naturaleza || (naturaleza && espacio)) {
        alert("Alquila una autocaravana");
    }
}

function actualizarEstilos(elementoh1) {
    let panel1 = document.getElementById("info1");
    let panel2 = document.getElementById("info2");

    panel1.setAttribute("class", "newInfo1");
    panel2.setAttribute("class", "newInfo2");

    elementoh1.removeAttribute("onclick");
}