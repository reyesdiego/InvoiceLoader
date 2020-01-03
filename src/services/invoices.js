const invoiceDB = require('../db/invoices');
const { UUID } = require('../constants');

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
