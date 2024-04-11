import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "0000",
    database: "proyect",
    port: "5432",
});

export const getMatters = async (req, res) => {
    try {
        pool.connect()

        const {rows} = await pool.query("SELECT * FROM materias");
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

