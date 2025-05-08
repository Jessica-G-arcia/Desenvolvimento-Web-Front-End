// IMPORTAÇÃO
const express = require('express');
const calculadoraRoute = require('./routes/calculadora');
const produtoRoute = require('./routes/produto');
const cors = require('cors');

// CONFIGURAÇÃO DO SERVIDOR
const app = express();
app.use(express.json());
app.use(cors());

// CONFIGURAÇÃO DAS ROTAS
app.use('/calculadora', calculadoraRoute);
app.use('/produto', produtoRoute);




app.listen(3000, () =>
    console.log('Servidor está rodando na porta 3000')
);