const controller = require('../../controllers/products.controller');
const validator = require('./products.validator');
const urlBase = '/produtos';

module.exports = [
    {
        method: 'get',
        path: urlBase,
        action: controller.get
    },
    {
        method: 'get',
        path: `${urlBase}/:id`,
        action: controller.getById
    },
    {
        method: 'post',
        path: urlBase,
        middleware: [validator.post],
        action: controller.post
    },
    {
        method: 'put',
        path: `${urlBase}/:id`,
        action: controller.put
    },
    {
        method: 'delete',
        path: `${urlBase}/:id`,
        action: controller.delete
    }
]