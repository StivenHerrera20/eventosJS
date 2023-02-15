const mitabla = document.createElement("table");
const cuerpo = document.createElement("tbody");
const btnCrear = document.createElement("button");
btnCrear.innerText = "Crear tabla";
btnCrear.setAttribute("class", "btn btn-success m-3");
mitabla.setAttribute("style", "background-color:peru; border: 2px solid black");
document.body.appendChild(btnCrear);

btnCrear.addEventListener("click", () => {
  //Fila 1
  cuerpo.insertRow(0);

  cuerpo.rows[0].insertCell(0);
  cuerpo.rows[0].cells[0].appendChild(
    document.createTextNode("FILA 0- COLUMNA 0")
  );

  cuerpo.rows[0].insertCell(1);
  cuerpo.rows[0].cells[1].appendChild(
    document.createTextNode("FILA 0- COLUMNA 1")
  );

  cuerpo.rows[0].insertCell(2);
  cuerpo.rows[0].cells[2].appendChild(
    document.createTextNode("FILA 0- COLUMNA 2")
  );
  //Fila 2
  cuerpo.insertRow(1);

  cuerpo.rows[1].insertCell(0);
  cuerpo.rows[1].cells[0].appendChild(
    document.createTextNode("FILA 1- COLUMNA 0")
  );

  cuerpo.rows[1].insertCell(1);
  cuerpo.rows[1].cells[1].appendChild(
    document.createTextNode("FILA 1- COLUMNA 1")
  );

  cuerpo.rows[1].insertCell(2);
  cuerpo.rows[1].cells[2].appendChild(
    document.createTextNode("FILA 1- COLUMNA 2")
  );
  //Fila 3
  cuerpo.insertRow(2);

  cuerpo.rows[2].insertCell(0);
  cuerpo.rows[2].cells[0].appendChild(
    document.createTextNode("FILA 2- COLUMNA 0")
  );

  cuerpo.rows[2].insertCell(1);
  cuerpo.rows[2].cells[1].appendChild(
    document.createTextNode("FILA 2- COLUMNA 1")
  );

  cuerpo.rows[2].insertCell(2);
  cuerpo.rows[2].cells[2].appendChild(
    document.createTextNode("FILA 2- COLUMNA 2")
  );
  //Fila 4
  cuerpo.insertRow(3);

  cuerpo.rows[3].insertCell(0);
  cuerpo.rows[3].cells[0].appendChild(
    document.createTextNode("FILA 3- COLUMNA 0")
  );

  cuerpo.rows[3].insertCell(1);
  cuerpo.rows[3].cells[1].appendChild(
    document.createTextNode("FILA 3- COLUMNA 1")
  );

  cuerpo.rows[3].insertCell(2);
  cuerpo.rows[3].cells[2].appendChild(
    document.createTextNode("FILA 3- COLUMNA 2")
  );
  //Fila 5
  cuerpo.insertRow(4);

  cuerpo.rows[4].insertCell(0);
  cuerpo.rows[4].cells[0].appendChild(
    document.createTextNode("FILA 4- COLUMNA 0")
  );

  cuerpo.rows[4].insertCell(1);
  cuerpo.rows[4].cells[1].appendChild(
    document.createTextNode("FILA 4- COLUMNA 1")
  );

  cuerpo.rows[4].insertCell(2);
  cuerpo.rows[4].cells[2].appendChild(
    document.createTextNode("FILA 4- COLUMNA 2")
  );
  cuerpo.rows[4].insertCell(3);
  cuerpo.rows[4].cells[3].appendChild(
    document.createTextNode("FILA 4- COLUMNA 3")
  );
});

document.body.appendChild(mitabla);
mitabla.appendChild(cuerpo);
