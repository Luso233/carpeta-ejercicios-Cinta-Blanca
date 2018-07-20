let boton = document.getElementById("boton");
let Numero1 = document.getElementById("Numero1");
let Numero2 = document.getElementById("Numero2");
let resultado = document.getElementById("resultado");
let total = 0;


boton.addEventListener("click",() =>{
total=Number(Numero1.value) + Number(Numero2.value)
	resultado.innerHTML = total;

});





