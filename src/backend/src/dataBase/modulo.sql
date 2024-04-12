CREATE DATABASE proyect;  
    
    
 CREATE TABLE users(
        idUser serial PRIMARY KEY not null,
        cedula VARCHAR(45) UNIQUE NOT NULL,
        nombre VARCHAR(500) NOT NULL,
        segundoNombre VARCHAR(500) NOT NULL,
        apellido VARCHAR(500) NOT NULL,
        segundoApellido VARCHAR(500) NOT NULL,
        direccion VARCHAR(500) NOT NULL,
        telefono VARCHAR(11) NOT NULL,
        email VARCHAR(700) NOT NULL,
        lugarDeNacimiento VARCHAR(500) NOT NULL,
        añoDeGraduacion DATE NOT NULL,
        plantelDeProcedencia VARCHAR(500) NOT NULL,
        genderiD INT NOT NULL
    );

    CREATE TABLE genders(
        idgender SERIAL PRIMARY KEY NOT NULL,
        gender VARCHAR(10) NOT NULL
    );

    CREATE TABLE usuarios (
        idusuario SERIAL PRIMARY KEY not null,
        usuario VARCHAR(300) UNIQUE NOT NULL,
        password VARCHAR(500) NOT NULL,
        tipoDeUsuario VARCHAR(8) NOT NULL,
        userId int not null,
        genderid int not null
    );

    CREATE TABLE notas (
        idNota SERIAL PRIMARY KEY not null,
        nota VARCHAR(45),
        userId INT NOT NULL,
        genderId INT NOT NULL,
        materiaId INT NOT NULL
        
    );


    CREATE TABLE materias (
        idMateria SERIAL PRIMARY KEY not null,
        codMateria VARCHAR(7)  NOT NULL,
        materia VARCHAR(100) NOT NULL,
        cedito VARCHAR(2) NOT NULL
    );


    CREATE TABLE materisXNiveles (
        idMaterisXNiveles SERIAL PRIMARY KEY not null,
        semestre VARCHAR(2) NOT NULL,
        materiaId INT NOT NULL,
        seccionID INT NOT NULL
    );

    CREATE TABLE secciones (
        idSeccion SERIAL PRIMARY KEY NOT NULL,
        seccion VARCHAR(1) NOT NULL
    );

    CREATE TABLE evaluaciones (
        idEvaluacion SERIAL PRIMARY KEY not null,
        titulo VARCHAR(100) NOT NULL,
        porcentaje VARCHAR(100) NOT NULL,
        estatus VARCHAR(100) NOT NULL,
        nota VARCHAR(100),
        fechaDeInicio DATE NOT NULL,
        fechaFinal DATE NOT NULL,
        materiaId int not null,
        notaid int not null,
        notasUsers int not null,
        notaMateriaId int not null
        
    );

    INSERT INTO genders( gender)
        VALUES ( 'Masculino'),( 'Femenino');


    INSERT INTO secciones( seccion)
        VALUES ( 'A'),( 'B'),('C');
    
    INSERT INTO materias (codMateria,materia,cedito)
        VALUES('ALP-365', 'ALGORITMO Y PROGRAMACIÓN II', '15')


