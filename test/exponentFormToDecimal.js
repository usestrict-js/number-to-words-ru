const exponentFormToDecimal = require('../index').exponentFormToDecimal;
const assert = require('assert');

describe('SIMPLE DIGIT', () => {
    it('0', () => {assert.equal(exponentFormToDecimal(0), '0')});
    it('1', () => {assert.equal(exponentFormToDecimal(1), '1')});
    it('2', () => {assert.equal(exponentFormToDecimal(2), '2')});
    it('3', () => {assert.equal(exponentFormToDecimal(3), '3')});
    it('4', () => {assert.equal(exponentFormToDecimal(4), '4')});
    it('5', () => {assert.equal(exponentFormToDecimal(5), '5')});
    it('6', () => {assert.equal(exponentFormToDecimal(6), '6')});
    it('7', () => {assert.equal(exponentFormToDecimal(7), '7')});
    it('8', () => {assert.equal(exponentFormToDecimal(8), '8')});
    it('9', () => {assert.equal(exponentFormToDecimal(9), '9')});
});

describe('DIGIT 34', () => {
    it('1e33', () => {assert.equal(exponentFormToDecimal(1e+33), '1000000000000000000000000000000000')});
});

