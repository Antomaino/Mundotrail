// carrito de productos
let nombreusuario;
let continuar;
let opcion;
let precio;
let cantidad;
let resultado;
let total = 0;
const Producto1 = 1
const Producto2 = 2

//bienvenida
nombreusuario = prompt('Ingresa tu nombre')

if (nombreusuario != '') {
    continuar = prompt('Bienvenid@ ' + nombreusuario + ' al carrito de compras, desea agregar productos? Si/No')
}else {
    prompt('Por favor ingresa tu nombre para continuar');
    continuar = prompt('Bienvenid@ ' + nombreusuario + ' al carrito de compras, desea agregar productos? Si/No');
}

opcion = parseInt(prompt(`Elige tu producto:\n 1-Producto1\n 2-Producto2`));

//elija su opcion
switch (opcion) {

    case Producto1:
        precio = 10.5;
        cantidad = parseFloat(prompt('Cantidad:'));
        total = total + precio * cantidad;
        continuar = prompt('Desea agregar otro item al carrito? Si/No');
        while (continuar === 'Si') {
           cantidad = parseFloat(prompt('Cantidad:'));
           resultado = total + precio * cantidad;
            continuar = prompt('Desea agregar otro item al carrito? Si/No');
        }

        alert(`El resumen de tu carrito es: \n` + `Productos:\n ${precio}\n ${cantidad}\n ${total}\n `);
        break;

    case Producto2:
        precio = 20.5;
        cantidad = parseFloat(prompt('Cantidad:'));
        total = total + precio * cantidad;
        continuar = prompt('Desea agregar otro item al carrito? Si/No');
        while (continuar === 'Si') {
            cantidad = parseFloat(prompt('Cantidad:'));
            total = total + precio * cantidad;
            continuar = prompt('Desea agregar otro item al carrito? Si/No');
        }

        alert(`El resumen de tu carrito es: \n` + `Productos:\n ${precio}\n ${cantidad}\n ${total}\n `);
        break;

        console.log('El resumen de tu carrito es:' + total);


}















