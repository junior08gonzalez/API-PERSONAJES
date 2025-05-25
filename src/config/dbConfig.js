const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user:'admin',
    password:'admin',
    database:'tutoriales',
    port:3307
});

db.connect((error)=>{
    if(error){
         console.error("Error al conectar a la base de datos:", error.message);
        process.exit(1); // Sale del proceso con código de error
    }

    console.log("Conexion a MySQL Exitosa");
});

module.exports = db;