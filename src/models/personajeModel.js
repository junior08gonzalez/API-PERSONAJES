const db = require("../config/dbConfig");

class Personaje{

     constructor() {
        this.sentence = "SELECT * FROM personajes";
    }
    //list
    getAllPersonajes(callback){
        db.query(this.sentence, callback);
    }
    //search
    getPersonajeById(id,callback){
        db.query(this.sentence + " where id = ?",[id], callback);
    }

    //create
    postPersonaje(edad, altura, peso, nombre, callback){
        const sentence = 'INSERT INTO personajes( edad, altura, peso, nombre) VALUES(?, ?, ?, ?)';
        db.query(sentence, [edad, altura, peso, nombre], (error, result)=>{
            if(error){
                return callback(error,null);
            }

            callback(null, result.insertId);
        });
    }
    //update
    putPersonaje(id, nombre, edad, altura, peso, callback){
        const sentence = 'UPDATE personajes SET nombre = ?, edad = ?, altura = ? , peso = ? WHERE id = ?';
        db.query(sentence, [nombre, edad, altura, peso, id], callback);
    }
    //delete
    deletePersonaje(id, callback){
        const sql = 'delete from personajes where id = ?';
        db.query(sql,[id], callback);
    }
}

module.exports = new Personaje(); // Exportamos una instancia