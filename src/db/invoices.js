class Invoices {
    constructor() {}

    create(invoice) {
        return new Invoice({ ...invoice });
    }
}

module.exports = new Invoices();

class Invoice {
    constructor({ net, tax }) {
        this.net = net;
        this.tax = tax;
    }
}
