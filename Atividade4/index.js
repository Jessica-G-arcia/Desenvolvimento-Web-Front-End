// IMPORTAÇÃO
const express = require('express');
const professorRoute = require('./routes/professor');
const cors = require('cors');

// CONFIGURAÇÃO DO SERVIDOR
const app = express();
app.use(express.json());
app.use(cors());

// CONFIGURAÇÃO DAS ROTAS
app.use('/professor', professorRoute);




app.listen(3000, () =>
    console.log('Servidor está rodando na porta 3000')
);