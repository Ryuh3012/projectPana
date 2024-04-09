import { Router } from 'express'
import { getUser } from '../controllers/user/indexControllers.mjs'
import { getUsuarios } from '../controllers/clients/clients.mjs'

const router = Router()

router.get('/clients', getUsuarios)
export default router