import { Router } from 'express'
import { createEval, getConsul } from '../controllers/evaluaciones/evaluations.mjs'


const router = Router()

router.post('/eval', createEval)
router.get('/eval', getConsul)

export default router