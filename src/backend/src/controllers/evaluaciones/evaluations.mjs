import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "0000",
    database: "proyect",
    port: "5432",
});

export const createEval = async (req, res) => {

    try {
        pool.connect()
        const { titulo, porcentaje, estatus, nota, fechadeinicio, fechafinal } = req.body
        const select = await pool.query('select notas.idnota, notas.userid, notas.materiaid from notas join materias on notas.materiaid = materias.idmateria')
        const { idnota, userid, materiaid, } = select.rows[0]
        const { rows } = await pool.query('INSERT INTO evaluaciones(titulo, porcentaje, estatus, nota, fechadeinicio, fechafinal, materiaid, notaid, notasusers, notamateriaid) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
            [titulo, porcentaje, estatus, nota, fechadeinicio, fechafinal, materiaid, idnota, userid, materiaid]
        )
        return  res.status(200).json({
            mesenger: 'Evaluacion Creada Exitosamente' 
        })
    } catch (error) {
        console.log(error)
    }


}

export const getConsul = async (req, res)=>{

    try {
        pool.connect()
        const {rows} = await pool.query("SELECT * FROM evaluaciones");
        return res.status(200).json({
            message: rows
        });          
    } catch (error) {
        console.log(error)
    }

}