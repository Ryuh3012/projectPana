import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "0000",
    database: "proyect",
    port: "5432",
});


export const createUser = async (req, res) => {

    try {
        pool.connect()
        const {cedula,nombre, segundoNombre, apellido, segundoApellido, direccion, telefono, email, lugarDeNacimiento, añoDeGraduacion, plantelDeProcedencia, gender, password, tipoDeusuario } = req.body?.data;
        const genderId = gender === 'masculino' ? 1 : 2

        //creacion de personas y usuarios
        const {rows} = await pool.query(
        "INSERT INTO users(cedula,nombre, segundoNombre, apellido, segundoApellido, direccion,telefono,email, lugarDeNacimiento, añoDeGraduacion, plantelDeProcedencia, genderiD ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING iduser;", 
        [cedula,nombre, segundoNombre, apellido, segundoApellido, direccion, telefono, email, lugarDeNacimiento, añoDeGraduacion, plantelDeProcedencia, genderId],
        );
        const respon = await pool.query('INSERT INTO usuarios( usuario, password, tipodeusuario,userid, genderid) values($1,$2,$3,$4,$5 )',[cedula, password, tipoDeusuario ,rows[0].iduser, genderId])
        //Creacion de notas
        const materiaid = await pool.query('select idmateria from materias')
        const {idmateria} = materiaid.rows[0]
        console.log(materiaid.rows[0].id)
        const nota = await pool.query('INSERT INTO notas(userid, genderid, materiaid)VALUES ($1,$2,$3)',[rows[0].iduser,genderId,idmateria])   

        return res.status(200).json({
            message: "usuario agregado exitosamente",
        });
    } catch (error) {
        console.log(error)
    }

};

export const getUser = async (req, res) => {
    try {
        pool.connect()

        const respon = await pool.query("SELECT * FROM users");
        return res.status(200).json({
            res: respon?.rows
        });          
    } catch (error) {
        console.log(error)
    }
   
};

export const getConsul = async (req, res) => {
    try {
        pool.connect()
        const cedula = req.params.cedula;
        const respon = await pool.query("SELECT * FROM users WHERE cedula = $1", [cedula]);
        res.json(respon.rows);
        
    } catch (error) {
        console.log(error);
    }
};

export const deleteUser = async (req, res) => {
    try {
        pool.connect()
        const cedula = req.params.cedula;
        const respon = await pool.query("delete from users where cedula= $1", [cedula]);
        console.log(respon)
        res.json(`Usuario ${cedula} eliminado exitosamente`);
        
    } catch (error) {
        console.log(error);
    }
};

export const UpdateUser = async (req, res) => {
    try {
        pool.connect()
        const cedula = req.params.cedula;
        const {
            nombre,
            email
        } = req.body;
        const respon = await pool.query(
            "UPDATE users SET nombre = $1, email = $2 WHERE cedula = $3",
            [nombre, email, cedula]
        );
        console.log(respon);
        res.json("actualización de usuario");
        
    } catch (error) {
        console.log(error);
    }
};
