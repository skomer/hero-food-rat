var assert = require('assert');
var Food = require('../Food.js');

describe('Food', function() {

    var sausages = new Food("sausages", 7);

    it('has name', function() {
        assert.equal("sausages", sausages.name);
    });
    it('has health value', function() {
        assert.equal(7, sausages.healthValue);
    });





});