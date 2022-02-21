import { getProductById, getProducts } from '../controllers/productContorller.js'

import express from 'express';

const router = express.Router()


router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router