const express = require('express');
const server = express();
const mongodb = require('./repositories/mongodb/mongoose-connect');
const bodyParser = require('body-parser');
const config = require('./config');
const registerRoutes = require('./helpers/register-routes');
const path = require('path');
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./models/swagger-definition');


//#region Middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
//#endregion Middleware

//#region Routes
registerRoutes(server, path.join(__dirname, './routes'));
//#endregion Routes

//#region Swagger
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//#endregion Swagger

//#region MongoDb
mongodb.createConnection();
//#endregion

server.listen(config.api.port, () => console.log(`Server listening on port ${config.api.port}`))