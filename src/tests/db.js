const expect = require('chai').expect;
const invoiceDB = require('../db/invoices');

describe('DB - INVOICE', function() {
    it('Dummy Test', function() {
        expect(1).eq(1);
    });

    it('CREATE - Should create an Invoice and return it', async function() {
        const date = new Date();
        const invoice = {
            tax: 21,
            net: 1000
        };
        let invoiceNew = await invoiceDB.create(invoice);
        expect(invoiceNew).has.property('_id');
        expect(invoiceNew).has.property('tax', 21);
        expect(invoiceNew).has.property('net', 1000);
        expect(invoiceNew).has.property('total', 1210);
        expect(invoiceNew).has.property('date');
        expect(invoiceNew.date.getDay()).eq(date.getDay());
        expect(invoiceNew.date.getMonth()).eq(date.getMonth());
        expect(invoiceNew.date.getYear()).eq(date.getYear());
        expect(invoiceNew).has.property('number', 1);

        invoiceNew = await invoiceDB.create(invoice);
        expect(invoiceNew).has.property('number', 2);
    });

    it('DELETE - Should delete an Invoice and return it', async function() {
        const invoice = {
            tax: 21,
            net: 1000
        };
        const invoiceNew = await invoiceDB.create(invoice);

        await invoiceDB.delete(invoiceNew._id);
    });
});
