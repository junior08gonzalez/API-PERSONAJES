--ejecutar este script en mysql
-- Crear base de datos
CREATE DATABASE IF NOT EXISTS tutoriales;

-- Usar la base de datos
USE tutoriales;

-- Crear tabla personajes
CREATE TABLE IF NOT EXISTS personajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    edad INT NOT NULL,
    altura DECIMAL(5,2) NOT NULL, -- Ejemplo: 170.50 cm
    peso DECIMAL(5,2) NOT NULL,   -- Ejemplo: 65.25 kg
    nombre VARCHAR(100) NOT NULL
);