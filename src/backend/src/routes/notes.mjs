import { Router } from 'express'
import { getNotes, updateNotes } from '../controllers/notas/notes.mjs'


const router = Router()

router.get('/notes', getNotes)
router.put('/notes', updateNotes)

export default router