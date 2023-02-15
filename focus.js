//Dom
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");

input1.addEventListener("blur", () => {
  alert("debes llenar el input con un valor");
});
input2.addEventListener("blur", () => {
  input2.setAttribute(
    "style",
    "border-radius: 5px; border: 1px solid red; display: inline; margin-top: 3px"
  );
  const need = document.createElement("p");
  const capa = document.createElement("div");
  need.innerHTML = " *";
  need.setAttribute("style", "color:red; display: inline;");
  document.body.appendChild(capa);
  capa.appendChild(input2);
  capa.appendChild(need);
});
input3.addEventListener("blur", () => {});
