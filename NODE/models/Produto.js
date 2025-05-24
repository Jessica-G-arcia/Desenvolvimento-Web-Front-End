const mongoose = require('mongoose');
const Produto = mongoose.model('Produto', {
    nome: String,
    valor: Number,
    temEstoque: Boolean
}, "produto");
module.exports = Produto;