const uuidv4 = require('uuid/v4');

let incrementalInvoiceNumer = 0;

const getInvoiceNumber = () => ++incrementalInvoiceNumer;

class Invoices {
    constructor() {
        this.invoices = [];
    }

    async create(invoice) {
        const invoiceNew = new Invoice({ ...invoice });
        this.invoices.push(invoiceNew);
        return invoiceNew;
    }

    async getById(_id) {
        const invoices = this.invoices.filter(i => i._id === _id)[0];
        return invoices || [];
    }

    async getByNumber(number) {
        const invoices = this.invoices.filter(i => i.number === parseInt(number))[0];
        return invoices || [];
    }
    async deleteById(_id) {
        const result = { _id, deleted: true };
        const invoiceIdx = this.invoices.findIndex(i => i._id === _id);
        if (invoiceIdx >= 0) {
            this.invoices.splice(invoiceIdx, 1);
        } else {
            result.deleted = false;
        }
        return result;
    }
    async list(params) {
        return this.invoices.filter(i => i.date < params.end && i.date > params.begin);
    }
}

module.exports = new Invoices();

class Invoice {
    constructor({ net, tax }) {
        this._id = uuidv4();
        this.date = new Date();
        this.number = getInvoiceNumber();
        this.net = parseFloat(net.toFixed(2));
        this.tax = tax;
        this.total = parseFloat((net * (1 + tax / 100)).toFixed(2));
    }
}
