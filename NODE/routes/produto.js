const express = require ('express');
const router = express.Router();
const prodController = require('../controllers/produtoController');

router.post('/', prodController.novoProduto);
router.get ('/', prodController.listarProdutos);
router.get('/:id', prodController.buscarProdutoPorId);
router.get('/temEstoque', prodController.buscarEmEstoque);
router.delete('/:id', prodController.excluirProdutoPorId);
router.put('/:id',prodController.editarProdutoPorId);


module.exports = router;