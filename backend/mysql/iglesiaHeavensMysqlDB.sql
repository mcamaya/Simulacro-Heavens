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

INSERT INTO `departamentos` (`id_departamento`, `nombre_departamento`) VALUES ('1', 'Santander'), ('2', 'Cundinamarca');

INSERT INTO `municipios` (`id_municipio`, `nombre_municipio`, `fk_id_departamento`) VALUES ('1', 'Bucaramanga', '1'), ('2', 'Floridablanca', '1'), ('3', 'Bogotá', '2');

INSERT INTO `comunas` (`id_comuna`, `nombre_comuna`, `fk_id_municipio`) VALUES ('1', 'Comuna 1 Norte', '1'), ('2', 'Comuna 2 Nororiental', '1'), ('3', 'Comuna 10 Provenza', '1'), ('4', 'Comuna  11 Sur', '1');

INSERT INTO `barrios` (`id_barrio`, `nombre_barrio`, `fk_id_comuna`) VALUES ('1', 'El Rocío', '4'), ('2', 'Provenza', '3'), ('3', 'Kennedy', '1'), ('4', 'Regadero Norte', '2');

INSERT INTO `creyentes` (`id_creyente`, `nombre_creyente`, `email_creyente`, `celular_creyente`, `direccion_creyente`, `fk_id_barrio`) VALUES ('1', 'Jorge Ramirez', 'jorgito@example.com', '3120451987', 'Calle 106 #54-12', '2'), ('2', 'Sara Lizarazo', 'saralizarazo@example.com', '3195421009', 'Cra 43 #27-43', '4');