const Personagem = require('../models/Personagem');
const mongoose = require('mongoose');


async function cadastrar(req, res) {

  try {
    const { nome, descricao } = req.body;

    if (typeof nome !== 'string' || !nome.trim()) {
      return res.status(400).json({
        mensagem: 'O nome é obrigatório.'
      });
    }

    const personagem = await Personagem.create({
      nome,
      descricao
    });

    res.status(201).json(personagem);

  } catch (error) {

    res.status(500).json({
      mensagem: 'Erro ao cadastrar personagem.'
    });

  }
}


async function listar(req, res) {

  try {
    const personagens = await Personagem.find();

    res.status(200).json(personagens);

  } catch (error) {

    res.status(500).json({
      mensagem: 'Erro ao listar personagens.'
    });

  }
}


async function editar(req, res) {

  try {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        mensagem: 'ID inválido.'
      });
    }

    if (typeof nome !== 'string' || !nome.trim()) {
      return res.status(400).json({
        mensagem: 'O nome é obrigatório.'
      });
    }

    const personagem = await Personagem.findByIdAndUpdate(
      id,
      { nome, descricao: descricao ?? '' },
      { returnDocument: 'after', runValidators: true }
    );

    if (!personagem) {
      return res.status(404).json({
        mensagem: 'Personagem não encontrado.'
      });
    }

    res.status(200).json(personagem);

  } catch (error) {

    res.status(500).json({
      mensagem: 'Erro ao editar personagem.'
    });

  }
}


async function excluir(req, res) {

  try {

    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        mensagem: 'ID inválido.'
      });
    }

    const personagem = await Personagem.findByIdAndDelete(id);

    if (!personagem) {
      return res.status(404).json({
        mensagem: 'Personagem não encontrado.'
      });
    }

    res.status(200).json({
      mensagem: 'Personagem excluído com sucesso.'
    });

  } catch (error) {

    res.status(500).json({
      mensagem: 'Erro ao excluir personagem.'
    });

  }
}


module.exports = {
  cadastrar,
  listar,
  editar,
  excluir
};