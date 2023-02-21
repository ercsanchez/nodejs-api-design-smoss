import { Router } from 'express';
import { body } from "express-validator";
import { handleInputErrors } from './modules/middleware';

// not a constructor & just a regular function | capitalized coz of bad coding conventions
const router = Router();

router.get('/product', (req, res) => {res.json({message: 'products'})})

router.get('/product/:id', () => {})
router.put(
  '/product/:id',
  body('name').isString(),
  handleInputErrors,
  (req, res) => {}
) // req.body (a json) should have a field called name

router.post('/product', () => {})
router.delete('/product/:id', () => {})

router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', () => {})
router.post('/update', () => {})
router.delete('/update/:id', () => {})

router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', () => {})
router.post('/updatepoint', () => {})
router.delete('/updatepoint/:id', () => {})

export default router;