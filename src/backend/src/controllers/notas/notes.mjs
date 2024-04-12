import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "0000",
    database: "proyect",
    port: "5432",
});


export const getNotes = async (req, res) => {
    try {
        pool.connect()

        const {rows} = await pool.query("SELECT * FROM notas");
        return res.status(200).json({
            res: rows
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

export const updateNotes = async (req, res) => {
    try {
        pool.connect()
        const cedula = req.params.id;
        const {nombre,email} = req.body;
        const respon = await pool.query(
            "UPDATE notas SET notas = $1 WHERE userid=$2",
            []
        );
        console.log(respon);
        res.json("actualización de usuario");
        
    } catch (error) {
        console.log(error);
    }
};
