const invoiceDB = require('../db/invoices');
const { UUID } = require('../constants');
const moment = require('moment');

module.exports.create = async invoice => {
    try {
        return await invoiceDB.create(invoice);
    } catch (err) {
        throw err;
    }
};

module.exports.retrieve = async invoiceNumber => {
    try {
        if (UUID.V4.test(invoiceNumber)) {
            return await invoiceDB.getById(invoiceNumber);
        } else {
            return await invoiceDB.getByNumber(invoiceNumber);
        }
    } catch (err) {
        throw err;
    }
};

module.exports.delete = async invoiceId => {
    try {
        return await invoiceDB.deleteById(invoiceId);
    } catch (err) {
        throw err;
    }
};

module.exports.list = async ({ limit, begin, end }) => {
    try {
        if (begin || end) {
            return await invoiceDB.getByDateRange({
                limit,
                begin: moment(begin),
                end: moment(end)
            });
        }
    } catch (err) {
        throw err;
    }
};
