
const personajeModel = require('../models/personajeModel');
module.exports = {
    getAllPersonajes: (request, response)=>{
        personajeModel.getAllPersonajes((error,result)=>{
            if(error){
                response.status(500).json({error: error.message});
                return;
            }

            response.status(200).json({data: result});
        });
    },

    getPersonajesById: (request, response)=>{
        const {id} = request.params;
        personajeModel.getPersonajeById(id, (error,result)=>{
            if(error){
                response.status(500).json({error: error.message});
                return;
            }
            if(result.length === 0){
                response.status(404).json({message:'Personaje no encontrado'});
                return;
            }
            response.status(200).json({data: result});
        });
    },

    postPersonaje: (request, response)=>{
        const {edad, altura, peso, nombre} = request.body;
        personajeModel.postPersonaje(edad, altura, peso, nombre, (error,result)=>{
            if(error){
                response.status(500).json({
                    error: error.message
                });
                return;
            }
            response.status(201).json({message: 'Personaje creado con exito!', data:{idInsertado: result}});
        });
    },

    putPersonaje: (request, response)=>{
        const {id} = request.params;
        const {nombre, edad, altura, peso} = request.body;
        personajeModel.putPersonaje(id,nombre, edad, altura, peso, (error,result)=>{
            if(error){
                response.status(500).json({
                    error: error.message
                });
                return;
            }
            if(result.affectedRows === 0){
                response.status(404).json({message:'Personaje no encontrado'});
                return;
            }
            response.status(200).json({message: 'Personaje actualizado con exito!'});
        });
    },

    deletePersonaje:  (request, response)=>{
         const {id} = request.params;
         personajeModel.deletePersonaje(id,(error, result)=>{
             if(error){
                response.status(500).json({
                    error: error.message
                });
                return;
            }
             if(result.affectedRows === 0){
                response.status(404).json({message:'Personaje no encontrado'});
                return;
            }
             response.status(200).json({message: 'Personaje eliminado con exito!'});
         });
    }
    
}