//AQUI O CÓDIGO É PARA CRIAR OS MÉTODOS QUE ACONTECEM DE MODO ASSÍNCRONO E ESTÃO CONECTADOS AO BANCO DE DADOS MONGODB

// Importar modelo de usuário (simulando um banco de dados, etc.)
const UsuarioModel = require('../models/usuario');

// Lógica para criar um novo usuário
exports.inserir = async (req, res) => {
    const { nome, email, senha, ativo } = req.body;
    const usuario = {
        nome, email, senha, ativo
    }
    try {
        await UsuarioModel.create(usuario);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.obterTodos = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.excluirUsuarioPorEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const usuario = await UsuarioModel.findOneAndDelete({ email: email });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json({ message: 'Usuário excluído com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.obterPorEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const usuario = await UsuarioModel.findOne({ email: email });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(usuario);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.autenticarUsuario = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const usuario = await UsuarioModel.findOne({ email: email, senha: senha });
        if (!usuario) {
            return res.status(401).json({ message: 'Usuário ou senha inválidos' });
        }
        res.status(200).json({ message: 'Usuário autenticado com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}