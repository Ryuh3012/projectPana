import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    host: "localhost",
    user: "postgres",   
    password: "0000",
    database: "proyect",
    port: "5432",
});

export const authVerify = async (req, res) => {

    const { user, password } = req.body

    try {
        pool.connect()
        const {rows} = await pool.query(`SELECT * FROM usuarios WHERE usuario=$1 AND password=$2`, [user, password]);

        if(rows.length == 0) return res.status(401).json({ res: 'Usuario o clave invalidos' })

       return res.status(200).json({
            res: rows
        });
    } catch (error) {
        console.log(error)
    }

};

export const getAuth = async(req, res)=>{
    try {
        const usuario = req.params.usuario;
        const {rows}= await pool.query('SELECT password FROM usuarios WHERE usuario = $1',[usuario])
        // console.log(resp)
        
        return res.status(200).json({
            messenger: rows
        });
    } catch (error) {
        console.log(error)
    }
}

export const updateAuth= async(req, res)=>{

    try {
        pool.connect()
        const usuario = req.params.usuario;
        const {password} = req.body;
        const respon = await pool.query(
            "UPDATE usuarios SET password =$1  WHERE usuario = $2",
            [password, usuario]
        );
        console.log(respon);
        res.status(200).json("actualización de usuario");
        
    } catch (error) {
        console.log(error);
    }
}