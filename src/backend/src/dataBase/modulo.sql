CREATE DATABASE modulo;  
    
    
 CREATE TABLE users(
        idUser serial PRIMARY KEY not null,
        expediente VARCHAR(45) UNIQUE NOT NULL,
        cedula VARCHAR(45) UNIQUE NOT NULL,
        nombre VARCHAR(500) NOT NULL,
        segundoNombre VARCHAR(500) NOT NULL,
        apellido VARCHAR(500) NOT NULL,
        segundoApellido VARCHAR(500) NOT NULL,
        direccion VARCHAR(500) NOT NULL,
        telefono VARCHAR(11) NOT NULL,
        email VARCHAR(700) NOT NULL,
        lugarDeNacimiento VARCHAR(500) NOT NULL,
        añoDeGraduacion VARCHAR(500) NOT NULL,
        plantelDeProcedencia VARCHAR(500) NOT NULL,
        genderiD INT NOT NULL,
    );

    CREATE TABLE genders(
        idgender SERIAL PRIMARY KEY NOT NULL,
        gender VARCHAR(10) NOT NULL
    );

    CREATE TABLE usuarios (
        idusuario SERIAL PRIMARY KEY not null,
        usuario VARCHAR(300) NOT NULL,
        password VARCHAR(500) NOT NULL,
        userId int not null,
        genderid int not null
    );


    CREATE TABLE notas (
        idNota SERIAL PRIMARY KEY not null,
        nota VARCHAR(45) NOT NULL,
        userId INT NOT NULL,
        genderId INT NOT NULL,
        materiaId INT NOT NULL
        
    );


    CREATE TABLE materias (
        idMateria SERIAL PRIMARY KEY not null,
        codMateria VARCHAR(7)  NOT NULL,
        materia VARCHAR(100) NOT NULL,
        cedito VARCHAR(2) NOT NULL,
    );


    CREATE TABLE materisXNiveles (
        idMaterisXNiveles SERIAL PRIMARY KEY not null,
        semestre VARCHAR(2) NOT NULL,
        materiaId INT NOT NULL,
        seccionID INT NOT NULL
    );

    CREATE TABLE secciones (
        idSeccion SERIAL PRIMARY KEY NOT NULL,
        seccion VARCHAR(1) NOT NULL,
    );

    CREATE TABLE evaluaciones (
        idEvaluacion SERIAL PRIMARY KEY not null,
        titulo VARCHAR(100) NOT NULL
        porcentaje VARCHAR(100) NOT NULL
        estatus VARCHAR(100) NOT NULL
        notaMinima VARCHAR(100) NOT NULL
        notaMaxima VARCHAR(100) NOT NULL
        fechaDeInicio DATE NOT NULL
        fechaFinal DATE NOT NULL
    )

    INSERT INTO gender( gender)
        VALUES ( 'Masculino'),( 'Femenino');


    INSERT INTO secciones( seccion)
        VALUES ( 'A'),( 'B'),('C');


