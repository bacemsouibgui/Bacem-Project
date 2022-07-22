const express = require('express');
const isAdmin = require('../Middlewares/isAdmin');
const router = express.Router();
const Product = require('../models/Product');

// ADD PRODUCT
router.post('/add', isAdmin, async (req, res) => {
    const { name, imgUrl, price, countInStock, category } = req.body;

    try {

        const newProduct = new Product({
            name, imgUrl, price, countInStock, category
        });
        const product = await newProduct.save();

        res.json({ msg: "Product added", product });
    } catch (error) {
        res.json({ msg: "error" });
    }

})



// FETCH DATA
router.get('/', async (req, res) => {

    try {
        const product = await Product.find().populate('category', ['name']);
        res.json({ msg: "data fetched", product });
    } catch (error) {
        res.json({ msg: "error" });
    }

})



router.get('/:catId', async (req, res) => {
    try {
        const product = await Product.find({ category: req.params.catId });
        res.json({ msg: "data fetched", product });
    } catch (error) {
        res.json({ msg: "error" });
    }

})


// DELETE PRODUCT
router.delete('/delete/:id', isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete({ _id: id });
        res.json({ msg: "Product deleted", product });
    } catch (error) {
        res.json({ msg: "error" });
    }

})

//EDIT PRODUCT
router.put('/edit/:_id', isAdmin, async (req, res) => {
    const { _id } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(_id, { $set: req.body }, { new: true, $upsert: true });
        res.json({ msg: "Product edited", product });
    } catch (error) {
        res.json({ msg: "error" });
    }

})

module.exports = router;

