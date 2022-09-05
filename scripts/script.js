alert("Inicio..")

let opcion = 0;

const fecha = new Date();
anioActual = fecha.getFullYear();

while (opcion <= 5) {
    // Menu //
    console.log("Menu");
    console.log("----");
    console.log("1. Comparador de Edad");
    console.log("2. Sumas aplicando For");
    console.log("3. Concatenador de Palabras usando While");
    console.log("4. Pruebas con swithc case");
    console.log("5. Salir");
    opcion = parseInt(prompt("Ingrese Opción: "));
    console.log("Usted ingreso la opcion " + opcion +"...")  

    if (opcion == 1){
      anioNacimiento = parseInt(prompt("Ingrese Su año de Nacimiento: "));
      edad = anioActual - anioNacimiento;
      alert("Estamos cursando el año " + anioActual + ", por lo tanto su edad es " + edad);
      alert("Continuar");
      console.clear;
    }

    if (opcion == 2){
      desde = parseInt(prompt("Ingrese Desde: "));
      hasta = parseInt(prompt("Ingrese Hasta: "));
      n = 0;
      for (var i = desde; i < hasta; i++){
        console.log("El valor de i es: " + i)
        n = n + 1;
      }
      console.log("El ciclo itero " + n + " Veces")
      alert("Continuar");
    }

    if (opcion == 3){
      frase = "";
      console.log("Su frase Inicial es " + frase)
      sino="s"
      while (sino == "s" || sino == "n") {
        sino = (prompt("Desea concatenar una palabra[s=Si, n=No] "));
        if (sino == "s"){
          palabra = prompt("Ingrese Palabra a concatenar: ");
          frase = frase + palabra + " "
          console.log("Su nueva frase es: '" + frase + "'")
        }
        else
          break;

      }
       
   }

   
   if (opcion == 4){
    let op = parseInt(prompt("Que receta desea: \n 1.Asado Alemán \n 2.Piscola \n 3. Hot dog"));
    switch(op){
      case 1:
        alert("El Asado alemán se hace con carne molida, huevo, pimienta y en el horno")
      break;
      case 2:
        alert("La piscola solo es pisco con coca cola")
      break;
      case 3:
         alert("El hotdog se hace con pan, vienesa, palta, tomate y mayonesa")
      break;
    }
     
 }
    
     if (opcion == 5){
       alert("Adios");
      break
    }

    if (opcion < 1 && opcion > 6){
      alert("Ingrese opción correcta (1..6)...");

   }

  }

  console.log("Fin. Ahora sale menu para ingresar una cantidad de productos, se debe ingresar el nombre del producto, luego la cantidad en existencia y finalmente el precio unitario. Luego se utiliza una funcion y se muestra el array.");



let cantidadProductos = parseInt(prompt("Ingrese numero de Productos: "));
console.log ("Ud. Ingresara " + cantidadProductos + " Productos")

let productos = [];
let cantidades = [];
let precios = [];
let totalizados = [];

for (var i = 1; i < cantidadProductos+1; i++){
    console.log(i);
    let producto = prompt("Ingrese Producto "+ i + ":");
    productos.push(producto);
    let cantidad = parseInt(prompt("Ingrese Cantidad "+ i + ":"));
    cantidades.push(cantidad);
    let precio = parseInt(prompt("Ingrese Precio "+ i + ":"));
    precios.push(precio);
    x = CantidadXPrecio(cantidad, precio)
    totalizados.push(x);
}



console.log("--");
console.log(productos);
console.log(cantidades);
console.log(precios);

console.log(totalizados);



function CantidadXPrecio(a,b){
    return a*b
}




