const express = require('express')

const app = express()

app.use(express.json());

const port = 1500



//Parametros de consulta y de ruta
app.post('/:domicilio', (req, res) => {
  const CC = req.query.CC;
  let nombre = req.query.nombre;
  let apellido = req.query.apellido;
  let domicilio = req.params.domicilio
  return res.status(200).json({
    'Status': 'ok registrado', 
    domicilio: domicilio, 
    CC: CC, 
    nombre: nombre, 
    apellido: apellido
  })
})


app.post('/:id/:peso', (req, res) => {
  let id = req.params.id;
  let peso = req.params.peso;
  let ancho = req.body.ancho;
  let alto = req.body.alto;
  return res.status(200).json({
    ancho: ancho,
    alto: alto,
    id: id,
    peso: peso
  })
})

app.delete('/ejercicio3', (req, res) => {
  let CC = req.query.CC;
  let motivo = req.body.motivo;
  let ID = req.header("Authorization")
  return res.status(200).json({
    CC: CC, 
    motivo: motivo, 
    ID: ID
  })
})

app.put('/ejercicio4', (req, res) => {
  let CC = req.query.CC;
  let apellido = req.body.apellido;
  let domicilio = req.header("Authorization")
  return res.status(200).json({
    CC: CC, 
    apellido: apellido, 
    domicilio: domicilio
  })
})

app.get('/:cantidad/:marca', (req, res) => {
  let precio = req.query.precio;
  let cantidad = req.params.cantidad;
  let marca = req.params.marca; 
  let domicilio = req.header("Authorization")
  return res.status(200).json({
    precio: precio, 
    cantidad: cantidad,
    marca: marca,
    domicilio: domicilio
  })
})


app.listen(port, () => {
  console.log("Servidor iniciado en el puerto ${port}")
})
