import express from 'express'
import cors from 'cors';
import authRoute from './src/routes/auth.router.mjs'
import userRoute from './src/routes/user.route.mjs'
import matters from './src/routes/matters.mjs'


const app = express()

//midddlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//router
app.use(userRoute)
app.use(authRoute)
app.use(matters)

app.listen(3001, () => console.log('conectado al puerto 3001'))
