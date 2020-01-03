const expect = require('chai').expect;
const invoiceDB = require('../db/invoices');
describe('DB - INVOICE', function() {
    it('Dummy Test', function() {
        expect(1).eq(1);
    });

    it('CREATE - Should create and Invoice and return it', async function() {
        const invoice = {
            tax: 21,
            net: 1000
        };
        const invoiceNew = await invoiceDB.create(invoice);
        expect(invoiceNew).has.property('tax', 21);
        expect(invoiceNew).has.property('net', 1000);
    });
});
