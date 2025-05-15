const express = require('express');
const router = express.Router();
const profController = require('../controllers/professorController');

router.get ('/', profController.listarProfessores);
router.get('/:id', profController.buscarProfessorPorId);
router.get('/:id/turmas', profController.buscarTurmas);
router.put('/:id',profController.editarProfessorPorId);
router.post('/:id/turmas',profController.novaTurma);
router.get('/departamento/:departamento',profController.listarProfessoresPorDepartamento);
router.delete('/:id', profController.excluirProfessorPorId);


module.exports = router;