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
  const CC = req.query.CC;
  let motivo = req.body.motivo;
  const ID = req.header("Authorization")
  return res.status(200).json({
    'Status': 'ok registrado', 
    CC: CC, 
    motivo: motivo, 
    ID: ID
  })
})

app.listen(port, () => {
  console.log("Servidor iniciado en el puerto ${port}")
})

