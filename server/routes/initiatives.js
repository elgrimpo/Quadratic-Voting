import express from 'express'

//App imports
import {getInitiatives, createInitiative} from '../controllers/initiatives.js'

const router = express.Router();

router.get('/', getInitiatives);
router.post('/createinitiative', createInitiative)

export default router