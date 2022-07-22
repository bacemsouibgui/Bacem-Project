const mongoose = require('mongoose');

const PanierSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    listProducts: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product"
            },
            quantity: Number
        }
    ],
}
)

module.exports = Panier = mongoose.model('paniers', PanierSchema)