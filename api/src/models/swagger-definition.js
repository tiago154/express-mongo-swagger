const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'REST - Swagger',
            version: '1.0.0',
            description: 'REST API with Swagger doc',
            contact: {
                email: 'tiago.toya@hotmail.com'
            }
        }
    },
    apis: [
        './src/controllers/*.controller.js',
        './src/models/*.model.js'
    ]
}

module.exports = swaggerJSDoc(options) ;