import * as aux from "./auxiliares.js"
console.log("Talento Tech BackEnd con JS");

const argumentos = aux.normalizar(process.argv.slice(2));

if (argumentos == undefined) {
  console.log("No se ingresaron argumentos")
}else if (argumentos[0] == "GET" && argumentos[1] == undefined){
  console.log("Trayendo todos los productos:")

  try {
    const call = await fetch(aux.URLBASE)
    if (!call.ok) {
      throw new Error(`Error en la solicitud: ${call.status}`)
    }
    let dato = await call.json()
    console.log(dato)
  } catch (error) {
    console.error(error.message)
  }

}else if (argumentos[0] == "GET" && argumentos[1] != undefined){

  console.log(`Producto Individual id: ${argumentos[1]}`)
  try {
    const call = await fetch(`${aux.URLBASE}/${argumentos[1]}`)
    if (!call.ok) {
      throw new Error(`Error en la solicitud: ${call.status}`)
    }
    let dato = await call.json()
    console.log(dato)
  } catch (error) {
    console.error(error.message)
  }

}else if (argumentos[0] == "POST" && argumentos[1] != undefined){

  console.log(`Creacion de producto`)
  try {
    const call = await fetch(aux.URLBASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(aux.objetoProducto(argumentos[1], argumentos[2], argumentos[3]))
    })
    if (!call.ok) {
      throw new Error(`Error en la solicitud: ${call.status}`)
    }
    let dato = await call.json()
    console.log(dato)
    console.log("Producto creado!")
  } catch (error) {
    console.error(error.message)
  }

}else if (argumentos[0] == "DELETE" && argumentos[1] != undefined){

  console.log(`Eliminar producto id: ${argumentos[1]}`)
  try {
    const call = await fetch(`${aux.URLBASE}/${argumentos[1]}`, {
      method: "DELETE"
    })
    if (!call.ok) {
      throw new Error(`Error en la solicitud: ${call.status}`)
    }
    let dato = await call.json()
    console.log(dato)
    console.log("Producto eliminado!")
  } catch (error) {
    console.error(error.message)
  }

}else{
  console.log("Argumentos incorrectos, no se puede operar")
}