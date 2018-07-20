let eleccionUser = prompt("Elige: piedra, papel o tijera")
// Determina la elección de la PC
let eleccionPC = ""
let destiny = Math.floor((Math.random() * 3) + 1);
if (destiny === 1) { eleccionPC="piedra" }
if (destiny === 2) { eleccionPC="tijera" }
if (destiny === 3) { eleccionPC="papel" }
// Corrige errores en el input
eleccionUser = eleccionUser.toLowerCase()
eleccionPC = eleccionPC.toLowerCase()
eleccionUser = eleccionUser.trim()
eleccionPC = eleccionPC.trim()
// PC elige lo mismo que USER
if
  (eleccionPC === eleccionUser) {
    console.log("Empate");
    console.log("User : "+ eleccionUser);
    console.log("PC : "+ eleccionPC);
  // Gana PC
  }else if(
    eleccionPC === "tijera" && eleccionUser === "papel" ||
    eleccionPC === "papel" && eleccionUser === "piedra" ||
    eleccionPC === "piedra" && eleccionUser === "tijera") {
      console.log("Gana PC");
      console.log("User : "+ eleccionUser);
      console.log("PC : "+ eleccionPC);
  // Gana User
  }else if(
    eleccionUser === "tijera" && eleccionPC === "papel" ||
    eleccionUser === "papel" && eleccionPC === "piedra" ||
    eleccionUser === "piedra" && eleccionPC === "tijera") {
      console.log("Gana User");
      console.log("User : "+ eleccionUser);
      console.log("PC : "+ eleccionPC);
  }else{
      console.log("Escribe bien >=(");
      console.log("User : "+ eleccionUser);
      console.log("PC : "+ eleccionPC);
}
