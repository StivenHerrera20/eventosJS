//Dom para el btn Enviar
const btnEnviar = document.querySelector("#btnEnviar");

//escuchador de eventos
btnEnviar.addEventListener("click", () => {
  console.log("Usaste el evento click! en el boton");
});

//Evento ui de carga
//Se carga en la llamada inicial del sitio
window.addEventListener("load", () => {
  //console.log("He cargado la pagina exitosamente");
  alert("Bienvenido a mi pagina");
});

//Al cambiar el tamaño de la window
window.addEventListener("resize", () => {
  console.log("has redimencionado el tamaño de la pagina");
});

//Scroll al enrollar el contenido de window
window.addEventListener("scroll", () => {
  console.log("estas haciendo scroll en el contenido");
});
