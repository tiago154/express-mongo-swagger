const productRepository = require('../repositories/mongodb/products/products.repository');

/**
 * @swagger
 * /produtos:
 *   get:
 *     description: Retorna uma lista de produtos
 *     tags:
 *       - Produtos
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Sucesso
 *         schema:
 *           $ref: '#/definitions/Produto'
 */

exports.get = async (_req, res) => {
    try {
        const product = await productRepository.getAll();
        return res.status(200).send(product);
    }
    catch (err) {
        return res.status(500).send(err);
    }
};

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     description: Retorna um produto específico
 *     tags:
 *       - Produtos
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Object id from MongoDB of the product to retrieve
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *         schema:
 *           $ref: '#/definitions/Produto'
 */

exports.getById = async (req, res) => {
    try {
        const product = await productRepository.getById(req.params.id);
        return res.status(200).send(product);
    }
    catch (err) {
        return res.status(500).send(err);
    }
};

exports.post = async (req, res) => {
    try {
        const body = req.body;
        const product = await productRepository.create(body);
        return res.status(201).send(product);
    }
    catch (err) {
        return res.status(500).send(err);
    }
};


exports.put = async (req, res) => {
    try {
        const body = req.body;
        const product = await productRepository.update(req.params.id, body);
        return res.status(200).send(product);
    }
    catch (err) {
        return res.status(500).send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        await productRepository.delete(req.params.id);
        return res.status(200).send('Produto Excluído');
    }
    catch (err) {
        return res.status(500).send(err);
    }
};