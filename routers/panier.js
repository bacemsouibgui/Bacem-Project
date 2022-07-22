
const express = require("express");
const router = express.Router();
const isAuth = require('../Middlewares/isAuth');
const Panier = require('../models/Panier')
const Product = require('../models/Product');

router.post('/', isAuth, async (req, res) => {
    const user = req.user.id;
    const item = {
        product: req.body.product,
        quantity: req.body.quantity
    };
    try {
        const panierEx = await Panier.findOne({ user: user });
    
        //Update existing Panier
        if (panierEx) {
            let products = panierEx.listProducts.map(item => item.product + "");
            if (products.includes(item.product)) {
                await Panier.findOneAndUpdate({
                    user: user,
                    listProducts: {
                        $elemMatch: { product: item.product }
                    }
                },
                    {
                        $inc: { 'listProducts.$.quantity': item.quantity }
                    }
                )
                return res.status(200).json({ msg: "Quantity updated", panierEx })
            } else {
                panierEx.listProducts.push(item);
                await panierEx.save();
                return res.status(201).json({ msg: "Product added to panier", panierEx });
            }
        }

        //Create new Panier
        else {
            const panier = new Panier({
                user: user,
                listProducts: [item]
            });
            await panier.save()
            return res.status(200).send({ msg: "Panier added", panier });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
})



router.get('/', isAuth, async (req, res) => {
    const user = req.user.id
    try {
        const panier = await Panier.findOne({ user: user }).populate({ path: 'listProducts.product', select: ['name','imgUrl','price'] });
        res.send({ msg: "this is your Cart", panier });
    } catch (error) {
        res.json({ msg: "error" });
    }

})

// DELETE PANIER
router.delete('/delete/:id', isAuth, async (req, res) => {
    const { id } = req.params;
    try {
        const panier = await Panier.findByIdAndDelete(id);
        res.json({ msg: "panier deleted", panier });
    } catch (error) {
        res.json({ msg: "error" });
    }
})


module.exports = router;
