// La idea original era tener la funcion fetch aqui, por falta de tiempo y problemas importar la funcion asincrona desde otro archivo la meneje en el index
const URLBASE = "https://692fa585778bbf9e006e0ac2.mockapi.io/api/comerce/productos"

function cuerpoFetch(params) {
  
}

function objetoProducto(nombre, precio = 0,categoria = "varios"){
  return {
    nombre: nombre,
    precio: precio,
    categoria: categoria
  }
}

function normalizar(params) {
  //coloca el metodo en matuscula, y los otros en minuscula
  if(params.length == 0){
    return
  }else{
    for (let indice = 0; indice < params.length; indice++) {
      if(indice == 0){
        params[indice] = params[indice].toUpperCase()
      }else{
        params[indice] = params[indice].toLowerCase()
      }
    }
  }
  return params
}

function getUrlBase() {
  return URLBASE
}

export { normalizar, getUrlBase, objetoProducto, URLBASE }