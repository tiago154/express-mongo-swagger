const validatePost = (body) => {
    const errors = [];

    if (!body.name)
        errors.push({ message: 'Informe o nome do produto', path: 'body.name' });

    if (body.name && body.name.length < 4)
        errors.push({ message: 'Nome do produto deve ter no mínimo 4 caracteres', path: 'body.name' });

    if (!body.price)
        errors.push({ message: 'Informe o preço do produto', path: 'body.price' });

    if (body.price && body.price < 1)
        errors.push({ message: 'Preço do produto deve ser igual ou maior que 1.00', path: 'body.price' });

    return errors;
};

const validateHashId = (params) => {
    const errors = [];

    if (!params.id)
        errors.push({ message: 'Requisição necessita de id na querystring', path: 'querprice' });
};

exports.post = (req, res, next) => {
    const result = validatePost(req.body);
    if (result.length > 0)
        res.status(400).send({ errors: result });
    else
        return next();
};