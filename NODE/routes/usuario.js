const express = require ('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.inserir);
router.get ('/', usuarioController.obterTodos);
router.get('/:email', usuarioController.obterPorEmail);
router.post('/autenticar', usuarioController.autenticarUsuario);
// router.get('/:id', usuarioController.buscarProdutoPorId);
// router.get('/temEstoque', usuarioController.buscarEmEstoque);
router.delete('/:email', usuarioController.excluirUsuarioPorEmail);
// router.put('/:id',usuarioController.editarProdutoPorId);


module.exports = router;