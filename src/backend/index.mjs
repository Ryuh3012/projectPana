import express from 'express'
import cors from 'cors';
import userRoute from './src/routes/user.route.mjs'
import usuariosRoute from './src/routes/usuariosRouter.mjs'

const app = express()

//midddlewares
try {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    //router
    app.use(userRoute)
    app.use(usuariosRoute)
    // app.use()

    app.listen(3001, () => console.log('conectado al puerto 3001'))

} catch (error) {
    console.log(error)
}