//Dom
const logo = document.querySelector("#logo");

//evento click
logo.addEventListener("click", () => {
  console.log("click en el logo!!!");
});

logo.addEventListener("mousemove", () => {
  console.log("Estas moviendo el raton");
});

logo.addEventListener("mouseout", () => {
  console.log("sale de la imagen");
});

logo.addEventListener("mouseover", () => {
  console.log("estas SOBRE la imagen");
});
