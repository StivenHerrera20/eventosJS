const mitabla = document.createElement("table");
const cuerpo = document.createElement("tbody");
//Creacion de la fila o row
//Fila 0
cuerpo.insertRow(0);
//Celda 0
cuerpo.rows[0].insertCell(0);
cuerpo.rows[0].cells[0].appendChild(document.createTextNode("FILA 0- CELDA 0"));
//celda 1
cuerpo.rows[0].insertCell(1);
cuerpo.rows[0].cells[1].appendChild(document.createTextNode("FILA 0- CELDA 1"));
//celda 2
cuerpo.rows[0].insertCell(2);
cuerpo.rows[0].cells[2].appendChild(document.createTextNode("FILA 0- CELDA 2"));

//Fila 1
//Respetando la jerarquia DOM el contenedor superior es el cuerpo y su hijo natural es la fila
cuerpo.insertRow(1);
//celda 0
cuerpo.rows[1].insertCell(0); //Maneja las filas como un arreglo rows[0] y llama el metodo dom
cuerpo.rows[1].cells[0].appendChild(document.createTextNode("FILA 1- CELDA 0"));

/* Las columnas tambien se manejan como arreglo cells[0] las filas y las columnas me construyen una matriz
rows[0].cells[0] para poder invocar los metodos dom de la celda */

//celda 1
cuerpo.rows[1].insertCell(1);
cuerpo.rows[1].cells[1].appendChild(document.createTextNode("FILA 1- CELDA 1"));
//celda 2
cuerpo.rows[1].insertCell(2);
cuerpo.rows[1].cells[2].appendChild(document.createTextNode("FILA 1- CELDA 2"));

//Recordar siempre la jerarquia del dom
document.body.appendChild(mitabla);
mitabla.appendChild(cuerpo);
