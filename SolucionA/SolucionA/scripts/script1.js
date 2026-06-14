function crearTabla(){
    // 1. Creamos un <div> que servirá de caja/contenedor
    let divContenedor = document.createElement("div");
    // Le ponemos la clase de CSS "fondoAzul" para que tenga estilo
    divContenedor.setAttribute("class", "fondoAzul");
    // Lo "enganchamos" dentro del <body> de la web para que se pueda ver
    document.body.appendChild(divContenedor);

    // 2. Creamos la etiqueta <table> y la metemos dentro del <div> anterior
    let tabla = document.createElement("table");
    divContenedor.appendChild(tabla);

    // 3. CREACIÓN DE LA CABECERA (La fila de títulos de arriba)
    let cabecera = document.createElement("tr"); // Creamos la fila (tr)
    
    let col1 = document.createElement("th"); // Celda de cabecera vacía (esquina superior izquierda)
    cabecera.appendChild(col1);
    
    let col2 = document.createElement("th"); // Celda para "Caravana"
    col2.setAttribute("class", "estiloCeldaCabecera");
    col2.textContent = "Caravana"; // Le metemos el texto dentro
    cabecera.appendChild(col2);
    
    let col3 = document.createElement("th"); // Celda para "Autocaravana"
    col3.setAttribute("class", "estiloCeldaCabecera");
    col3.textContent = "Autocaravana";
    cabecera.appendChild(col3);
    
    // Metemos toda la fila de cabecera dentro de la tabla
    tabla.appendChild(cabecera);

    // 4. BUCLE PARA RELLENAR LAS 9 FILAS RESTANTES
    // El bucle exterior (i) va del 0 al 8 para crear las 9 filas de datos
    for (let i = 0; i < 9; i++) {
        let fila = document.createElement("tr"); // Crea una fila nueva
        tabla.appendChild(fila); // La mete en la tabla
        
        // El bucle interior (j) va del 0 al 2 para crear las 3 columnas de esa fila
        for (let j = 0; j < 3; j++) {
            let celda = document.createElement("td"); // Crea una celda normal (td)
            celda.setAttribute("class", "estiloCelda");
            
            // ¡OJO AQUÍ!: Lee el array bidimensional 'datosColumnas'. 
            // Usa [j][i] en vez de [i][j] porque el array está ordenado por COLUMNAS y no por filas.
            celda.textContent = datosColumnas[j][i]; 
            
            fila.appendChild(celda); // Mete la celda dentro de la fila actual
        }
    }
}