CREATE DATABASE iglesiaHeavensMysqlDB;

USE iglesiaHeavensMysqlDB;

CREATE TABLE departamentos (
    id_departamento INT PRIMARY KEY AUTO_INCREMENT,
    nombre_departamento VARCHAR (50) NOT NULL
);

CREATE TABLE municipios (
    id_municipio INT PRIMARY KEY AUTO_INCREMENT,
    nombre_municipio VARCHAR (50) NOT NULL,
    fk_id_departamento INT NOT NULL,

    FOREIGN KEY (fk_id_departamento) REFERENCES departamentos(id_departamento)
);

CREATE TABLE comunas (
    id_comuna INT PRIMARY KEY AUTO_INCREMENT,
    nombre_comuna VARCHAR (50) NOT NULL,
    fk_id_municipio INT NOT NULL,

    FOREIGN KEY (fk_id_municipio) REFERENCES municipios(id_municipio)
);

CREATE TABLE barrios (
    id_barrio INT PRIMARY KEY AUTO_INCREMENT,
    nombre_barrio VARCHAR (50) NOT NULL,
    fk_id_comuna INT NOT NULL,

    FOREIGN KEY (fk_id_comuna) REFERENCES comunas(id_comuna)
);

CREATE TABLE creyentes (
    id_creyente INT PRIMARY KEY AUTO_INCREMENT,
    nombre_creyente VARCHAR (80) NOT NULL,
    email_creyente VARCHAR(100) NOT NULL,
    celular_creyente INT (10) NOT NULL,
    direccion_creyente VARCHAR (150),
    fk_id_barrio INT NOT NULL,

    FOREIGN KEY (fk_id_barrio) REFERENCES barrios(id_barrio)
);