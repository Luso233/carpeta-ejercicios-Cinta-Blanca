// 1.- Hacer una función que convierta de grados centígrados a Farenheit.

// function CtoF(num1) {
// 	return  (num1 * 1.8) + 32;
// }
// 2.- Hacer una función que muestre la tabla de multiplicar de un número

// function tablas(num1) {
//  for (let i = 0; i < 10; i++) {
// 	console.log (num1*(i+1))
// }
// }
// tablas (prompt("Numero prro"));
// 3.- Leer un array de enteros y sacar su media
function Arrayy(n) {
	let total = 0
		for (var i = 0 ; i < n.length; i++) {
			total = total + n[i]	
		}
	return total/n.length}
	console.log(Arrayy([1,2,3]))
