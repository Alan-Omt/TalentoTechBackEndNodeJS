# Talento Tech BackEnd con Node JS

### NOTAs:
- al dia de la fecha (4 de octubre) el sitio web fake storeAPI estaba caido, en su reemplazo utilize MockApi.io para simular las consultas
- no importa si esta en minuscula o mayusula los comandos fetch
- faltaron verificacion de datos, que los precios sean numeros, minimo de letras para el nombre

## End points

### GET:
- Traer todos los productos:
```
npm start get
```

- Traer producto individual:
```
npm start get [numero entero]
```

### POST

- Publicar un producto, es necesario por lo menos 1 argumento para el nombre, los otros 2 pueden ser opcionales:
```
npm start post [argumento 1: nombre (obligatorio)] [argumeto 2: precio (default: 0)] [argumento 3: catigoria (default: "varios")]
```

### DELETE

- Borrar un producto individual, devuelve el Producto eliminado
```
npm start delete [numero entero]
```