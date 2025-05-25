const express = require('express');
const router = express.Router();
const personajeController = require('../controllers/personajeController');

router.get('/',personajeController.getAllPersonajes);
router.get('/:id', personajeController.getPersonajesById);
router.post('/', personajeController.postPersonaje);
router.put('/:id',personajeController.putPersonaje);
router.delete('/:id', personajeController.deletePersonaje);

module.exports = router;