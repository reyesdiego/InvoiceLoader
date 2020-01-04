const invoicesService = require('../services/invoices');

module.exports.create = async (req, res) => {
    try {
        res.send(await invoicesService.create({ ...req.body }));
    } catch (err) {
        res.status(400).send(err.message);
    }
};

module.exports.retrieve = async (req, res) => {
    try {
        res.send(await invoicesService.retrieve(req.params.invoiceNumber));
    } catch (err) {
        res.status(400).send(err.message);
    }
};

module.exports.delete = async (req, res) => {
    try {
        res.send(await invoicesService.delete(req.params.invoiceNumber));
    } catch (err) {
        res.status(400).send(err.message);
    }
};

module.exports.list = async (req, res) => {
    let result = [];

    const { limit, begin, end } = req.query;
    try {
        if (Object.keys(req.query).length) {
            result = await invoicesService.list({ limit, begin, end });
        }
        res.send(result);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
