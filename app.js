const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('peticion recibida');
  res.send('hola');
});

const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
  console.log(`El servidor esta esuchando en el puerto ${PUERTO}...`);
});
