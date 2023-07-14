//VARIABLES
const productos = [
	{
		id: "1",
		nombre: "Remera",
		marca: "Montagne",
		precio: 50,
		descripcion: "Remera montagne ideal para montaña",
	},
	{
		id: "2",
		nombre: "Campera",
		marca: "Adidas",
		precio: 100,
		descripcion: "Campera hombre ideal para tus entrenamientos al aire libre",
	},
	{
		id: "3",
		nombre: "Campera",
		marca: "Adidas",
		precio: 150,
		descripcion: "Campera mujer ideal para tus entrenamientos al aire libre",
	},
	{
		id: "4",
		nombre: "Calza",
		marca: "Nike",
		precio: 120,
		descripcion: "Calza deportiva con ajuste en cintura",
	},
	{
		id: "5",
		nombre: "Zapatilla",
		marca: "Hoka",
		precio: 250,
		descripcion: "Zapatillas de suela ideal para tus entrenamientos de Montaña",
	},
	{
		id: "6",
		nombre: "Remera",
		marca: "Montagne",
		precio: 70,
		descripcion: "Remera de hombre deportiva. ",
	},
];


let carrito = [];
let cantidad;
let total = 0;
let opcion;
let agregar;

//FUNCIONES

function calculo(total, producto, cantidad) {
	return total + producto * cantidad;
}

alert("Bienvenido a nuestro carrito, presione aceptar para comenzar");

function agregarProductos () {
do {
	const listaStringProductos = productos.map(
		(product, index) => `
                        ${index + 1}: ${product.nombre} precio: ${product.precio}
    `);
	opcion = parseInt(
		prompt("Que producto desea elegir?" + "\n" + listaStringProductos.join('\n')));

	while (opcion <= 0 || opcion > productos.length) { }

	cantidad = parseInt(prompt("Ingrese la cantidad que desea"));
	total = total + productos[opcion - 1].precio * cantidad;

	agregar = prompt("Deseas agregar mas productos al carrito? si/no")
} while (agregar == "si");

alert("El total a pagar de su compra es de: $" + total)

}

//LOGICA

agregarProductos ();