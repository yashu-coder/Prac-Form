import express from 'express';
import { addRegistration, filterRegistration, updateRegistration, veiwRegistration } from '../controller/registration.js';
let router = express.Router();

router.post('/add',addRegistration)
router.get('/view',veiwRegistration)
router.get('/filter',filterRegistration)
router.put('/update',updateRegistration)

export default router;