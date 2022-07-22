const express = require('express');
const isAdmin = require('../Middlewares/isAdmin');
const { categoryRules, validator } = require('../Middlewares/validator');
const router = express.Router();
const Category = require('../models/Category');


// GET CATEGORY
router.get('/', async (req, res) => {

    try {
        const category = await Category.find();
        res.json({ msg: "data fetched", category });
    } catch (error) {
        res.json({ msg: "error" });
    }
})

// DELETE CATEGORY

router.delete('/delete/:id', isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findByIdAndDelete(id);
        res.json({ msg: "Category deleted", category });
    } catch (error) {
        res.json({ msg: "error" });
    }
})

// ADD CATEGORY

router.post('/', isAdmin, categoryRules(), validator, async (req, res) => {
    const { name, imgUrl, description } = req.body
    try {
        const newCategory = new Category({
            name,
            imgUrl,
            description
        });
        await newCategory.save();
        res.json({ msg: "Category added", newCategory });
    } catch (error) {
        res.json({ msg: "error" }, error.message);
    }
})

// EDIT CATEGORY

router.put('/edit/:_id', isAdmin, async (req, res) => {
    const { _id } = req.params;
    try {
        const category = await Category.findByIdAndUpdate(_id, { $set: req.body }, { new: true, $upsert: true });
        res.json({ msg: "Category edited", category });
    } catch (error) {
        res.json({ msg: "error" });
    }

})

module.exports = router;