//import express from 'express'; - ES6
const express = require('express'); //cjs commond java script
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('./modules/users/users.routes')
require('dotenv').config();

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.get('/', (req, res)=>{
    res.send('ok');
})

app.use(userRoutes)

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})
