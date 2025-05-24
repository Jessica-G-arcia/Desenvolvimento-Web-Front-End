//AQUI O CÓDIGO FUNCIONA COM O THUNDER CLIENT
// const produtos = [
//     {   id:1,
//         nome: "Produto 1",
//         valor: 50,
//         temEstoque: true
//     }
// ];
// let ultimoId = 1;
// exports.novoProduto = (req, res) =>{
//     const {nome, valor, temEstoque} = req.body;
//     const produto = {id: ultimoId,nome, valor, temEstoque};
//     ultimoId++;
//     produtos.push(produto);
//     res.status(201).json(produto);
// };

// exports.listarProdutos = (req, res) => {
//     res.json(produtos);
// };

// exports.buscarProdutoPorId = (req, res) => {
//     const {id} = req.params;
//     const produto = produtos.find(p => p.id == id);
//     if (!produto) {
//         return res.status(404).send('Produto não encontrado');
//     }
//     res.json(produto);
// };

// exports.buscarEmEstoque = (req, res) => {
//     const produtosEmEstoque = produtos.filter(p => p.temEstoque == true);
//     return res.json(produtosEmEstoque);
// };

// exports.excluirProdutoPorId = (req, res) => {
//     const {id} = req.params;
//     const produtoIndex = produtos.findIndex(p => p.id == id);
//     if (produtoIndex === -1) {
//         return res.status(404).send('Produto não encontrado');
//     }
//     produtos.splice(produtoIndex, 1);
//     res.status(204).send();
// };

// exports.editarProdutoPorId = (req, res) => {
//     const { id } = req.params;
//     const { nome, valor, temEstoque } = req.body;
//     const produto = produtos.find((p) => p.id == id);
//     if (!produto) {
//         return res.status(404).json({ error: 'Produto não encontrado' });
//     }
//     produto.nome = nome;
//     produto.valor = valor;
//     produto.temEstoque = temEstoque;
//     res.json(produto);
// };

//AQUI O CÓDIGO CONECTA NO MONGODB
const ProdutoModel = require('../models/Produto');

exports.novoProduto = async (req, res) => {
    const { nome, valor, temEstoque } = req.body;
    const produto = {
        nome,
        valor,
        temEstoque
    }
    try {
        await ProdutoModel.create(produto);
        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.listarProdutos = async (req, res) => {
    try {
        const produtos = await ProdutoModel.find();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};  

exports.buscarProdutoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const produto = await ProdutoModel.findById(id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.buscarEmEstoque = async (req, res) => {
    try {
        const produtosEmEstoque = await ProdutoModel.find({ "temEstoque":true});
        res.status(200).json(produtosEmEstoque);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.excluirProdutoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const produto = await ProdutoModel.findByIdAndDelete(id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.editarProdutoPorId = async (req, res) => {
    const { id } = req.params;
    const { nome, valor, temEstoque } = req.body;
    try {
        const produto = await ProdutoModel.findByIdAndUpdate(id, { nome, valor, temEstoque }, { new: true });
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};