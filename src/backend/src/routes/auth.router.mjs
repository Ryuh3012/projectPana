import { Router } from 'express'
import { authVerify, getAuth, updateAuth } from '../controllers/auth/authVerify.mjs'

const router = Router()



router.post('/auth', authVerify)
router.get('/auth/:usuario', getAuth)
router.put('/auth/:usuario', updateAuth)
export default router