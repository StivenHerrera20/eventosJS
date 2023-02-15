const input = document.querySelector("#input");
//El parametro e almacena
input.addEventListener("keyup", (e) => {
  /*console.log(e); //todo el arreglo de caracteristicas del evento
  console.log(e.code); //Tabla de caracteres unicode -ASCII
  console.log(e.keyCode); //Obsoleto: pero muestra el codigo unicode -ASCII
  console.log(e.key); //La tecla presionada*/

  if (e.keyCode === 87) {
    alert("ganaste!!");
  } else {
    console.log("Siga jugando");
  }
});

input.addEventListener("keydown", () => {});

input.addEventListener("keypress", () => {});
