const Product = require('../../../models/product.model');


module.exports = new class ProductRepository {
    getAll() {
        return Product.find();
    }

    getById(id) {
        return Product.findById(id);
    }

    create(product) {
        return Product.create(product)
    }

    update(id, product) {
        const updatedProduct = {
            name: product.name,
            price: product.price,
        }
        return Product.findOneAndUpdate(id, updatedProduct, { new: true });
    }

    delete(id) {
        return Product.findOneAndDelete(id);
    }
}