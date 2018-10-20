const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @swagger
 * definitions:
 *   Produto:
 *     type: object
 *     required:
 *       - name
 *       - price
 *     properties:
 *       name:
 *         type: string
 *       price:
 *         type: number
 *     items:
 *       $ref '#definitions/Produto'
 */

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true }
    },
    {
        collection: 'products',
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);