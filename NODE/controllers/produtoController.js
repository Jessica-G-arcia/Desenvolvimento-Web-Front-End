const produtos = [
    {   id:1,
        nome: "Produto 1",
        valor: 50,
        temEstoque: true
    }
];
let ultimoId = 1;
exports.novoProduto = (req, res) =>{
    const {nome, valor, temEstoque} = req.body;
    const produto = {id: ultimoId,nome, valor, temEstoque};
    ultimoId++;
    produtos.push(produto);
    res.status(201).json(produto);
};

exports.listarProdutos = (req, res) => {
    res.json(produtos);
};

exports.buscarProdutoPorId = (req, res) => {
    const {id} = req.params;
    const produto = produtos.find(p => p.id == id);
    if (!produto) {
        return res.status(404).send('Produto não encontrado');
    }
    res.json(produto);
};

exports.buscarEmEstoque = (req, res) => {
    const produtosEmEstoque = produtos.filter(p => p.temEstoque == true);
    return res.json(produtosEmEstoque);
};

exports.excluirProdutoPorId = (req, res) => {
    const {id} = req.params;
    const produtoIndex = produtos.findIndex(p => p.id == id);
    if (produtoIndex === -1) {
        return res.status(404).send('Produto não encontrado');
    }
    produtos.splice(produtoIndex, 1);
    res.status(204).send();
};

exports.editarProdutoPorId = (req, res) => {
    const { id } = req.params;
    const { nome, valor, temEstoque } = req.body;
    const produto = produtos.find((p) => p.id == id);
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    produto.nome = nome;
    produto.valor = valor;
    produto.temEstoque = temEstoque;
    res.json(produto);
};