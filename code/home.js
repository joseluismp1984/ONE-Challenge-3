// Bloque que muestra y esconde menu hamburgesa.

const menuHome = document.getElementById("menu-abierto");
/* const btnAbrir = document.getElementById("btn-abrir"); */

function menuHamburgesa() {
  menuHome.classList.toggle("mostrar-menu");
}
