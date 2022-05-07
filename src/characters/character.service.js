const rNmCharacter = require('../characters/rNmCharacters');

const allCharactersService = async (req, res) => {
    return await rNmCharacter.find();
}

const characterByIdService = async (idParam) => {
    return await rNmCharacter.findById(idParam);
};

const characterByNameService = async (nome) => {
    return await rNmCharacter.findOne({ nome: nome });
};


const createCharacterService = async (nome,url,userId) => {
return await rNmCharacter.create({nome,url,user:userId});
};

const updateCharacterService = async (idParam, editCharacter) => {
    const characterUpdated = await rNmCharacter.findByIdAndUpdate(idParam, editCharacter);
    return editCharacter;
};

const deleteSingleService = async (idParam) => {
    return await rNmCharacter.findByIdAndDelete(idParam);
};

module.exports = {
    allCharactersService,
    characterByIdService,
    characterByNameService,
    createCharacterService,
    updateCharacterService,
    deleteSingleService,
};
