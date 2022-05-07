const charactersService = require('../characters/character.service');
const mongoose = require('mongoose');

const allCharactersController = async (req, res) => {
  const allCharacters = await charactersService.allCharactersService();
  res.send(allCharacters);
};

const characterByIdController = async (req, res) => {
    const chosenCharacter = await charactersService.characterByIdService(req.params.id);
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
    res.send(chosenCharacter);
};

const characterByNameController = async (req, res) => {
    const chosenCharacter = await charactersService.characterByNameService(req.params.name);
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
    res.send(chosenCharacter);
};
// testando
const createCharacterController = async (req, res) => {
  try {
    const {nome,url} = req.body;

    if (!nome,!url) {
      res.status(400).send({
        message: "Envie todos os dados necessário para a criação do personagem",
      });
    }

    const {id} = await charactersService.createCharacterService(nome,url, req.userId);

    return res.status(201).send({
      message: "personagem criado com sucesso!",
      character: {id,nome,url}
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateCharacterController = async (req, res) => {
    const chosenCharacter = await charactersService.characterByIdService(req.params.id);
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
    const updatedCharacter = await charactersService.updateCharacterService(req.params.id, req.body);
    res.status(200).send(updatedCharacter);
};

const deleteSingleController = async (req, res) => {
    const chosenCharacter = await charactersService.characterByIdService(req.params.id);
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
    await charactersService.deleteSingleService(req.params.id);
    res.send({ message: 'The character has been successfully deleted!' });
};

module.exports = {
    allCharactersController,
    characterByIdController,
    characterByNameController,
    createCharacterController,
    updateCharacterController,
    deleteSingleController,
};
