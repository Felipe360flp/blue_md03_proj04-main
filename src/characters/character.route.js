const router = require('express').Router();

const charactersController = require('../characters/character.controllers');
const { validId, validObjectBody } = require('../characters/character.middleware');
const authmiddleware = require("../auth/auth.middleware")

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/', charactersController.allCharactersController);
router.get('/find/:id', validId, charactersController.characterByIdController);
router.get('/search/:name', charactersController.characterByNameController);
router.post('/create',authmiddleware,charactersController.createCharacterController);
router.put('/update/:id', validId, validObjectBody, charactersController.updateCharacterController);
router.delete('/delete/:id', validId, charactersController.deleteSingleController);

module.exports = router;
