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
