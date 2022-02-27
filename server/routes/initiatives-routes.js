import express from 'express'

//App imports
import {getInitiatives, createInitiative} from '../controllers/initiatives-controller.js'

const router = express.Router();

router.get('/', getInitiatives);
router.post('/', createInitiative)

export default router