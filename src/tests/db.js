const expect = require('chai').expect;
const assert = require('chai').assert;
const invoiceDB = require('../db/invoices');

const INVOICE = {
    tax: 21,
    net: 1000
};

describe('DB - INVOICE', function() {
    it('Dummy Test', function() {
        expect(1).eq(1);
    });

    it('CREATE - Should create an Invoice and return it', async function() {
        const date = new Date();

        let invoiceNew = await invoiceDB.create(INVOICE);
        expect(invoiceNew).has.property('_id');
        expect(invoiceNew).has.property('tax', 21);
        expect(invoiceNew).has.property('net', 1000);
        expect(invoiceNew).has.property('total', 1210);
        expect(invoiceNew).has.property('date');
        expect(invoiceNew.date.getDay()).eq(date.getDay());
        expect(invoiceNew.date.getMonth()).eq(date.getMonth());
        expect(invoiceNew.date.getYear()).eq(date.getYear());
        expect(invoiceNew).has.property('number', 1);

        invoiceNew = await invoiceDB.create(INVOICE);
        expect(invoiceNew).has.property('number', 2);
    });

    it('DELETE - Should delete an Invoice and returns a object with "deleted" property equals true', async function() {
        const invoiceNew = await invoiceDB.create(INVOICE);
        const result = await invoiceDB.deleteById(invoiceNew._id);
        expect(result).has.property('deleted', true);
    });

    it('GET BY _id - Should return a Invoice object', async function() {
        const invoiceNew = await invoiceDB.create(INVOICE);
        const invoice = await invoiceDB.getById(invoiceNew._id);
        assert.isNotNull(invoice);
        expect(invoice).has.property('_id', invoiceNew._id);
    });

    it('GET BY number - Should return a Invoice object', async function() {
        const invoiceNew = await invoiceDB.create(INVOICE);
        const invoice = await invoiceDB.getByNumber(invoiceNew.number);
        assert.isNotNull(invoice);
        expect(invoice).has.property('number', invoiceNew.number);
    });
});
