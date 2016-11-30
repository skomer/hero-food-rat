var assert = require('assert');
var Rat = require('../Rat.js');
var Food = require('../Food.js');

describe('Rat', function() {

    brownRat = new Rat('brown', 'middle');

    it('has type', function() {
        assert.equal('brown', brownRat.type);
    });
    it('has diseaseLevel', function() {
        assert.equal('middle', brownRat.diseaseLevel);
    });


});