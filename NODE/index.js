// IMPORTAÇÃO
const express = require('express');
const calculadoraRoute = require('./routes/calculadora');
const produtoRoute = require('./routes/produto');
const usuarioRoute = require('./routes/usuario');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// CONFIGURAÇÃO DO SERVIDOR
const app = express();
app.use(express.json());
app.use(cors());

// CONFIGURAÇÃO DAS ROTAS
app.use('/calculadora', calculadoraRoute);
app.use('/produto', produtoRoute);
app.use('/usuario', usuarioRoute);


//BUSCA AS VARIÁVEIS DE AMBIENTE
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

//CRIAR SERVIDOR
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.lm6wonf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => {
app.listen(3000, () => {
console.log('Conectado ao mongoDB');
console.log('Servidor iniciado na porta 3000');
})
})
.catch((err) => {
console.log(err);
});


