import { Router } from 'express'
import { getConsul, getMatters } from '../controllers/caseContract/materias.mjs'

const router = Router()

router.get('/matters', getMatters)
router.get('/matters/:codmateria', getConsul)

export default router