import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public route
const getProducts = asyncHandler(async(req, res)=>{
    const products = await Product.find({})
    res.json(products)
})

// @desc Fetch Single product
// @route GET /api/products
// @access Public route
const getProductById = asyncHandler(async(req, res)=>{
    console.log('called')
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
})

export {getProducts, getProductById}