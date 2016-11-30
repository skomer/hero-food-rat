var assert = require('assert');
var Food = require('../Food.js');

describe('Food', function() {

    var sausages;
    var mushrooms;

    beforeEach(function() {
        sausages = new Food('sausages', 7, 'none');
        mushrooms= new Food('mushrooms', 1, 'middle');
    });

    it('has name', function() {
        assert.equal('sausages', sausages.name);
    });
    it('has health value', function() {
        assert.equal(7, sausages.healthValue);
    });
    it('has poison level', function() {
        assert.equal('none', sausages.poisonLevel);
        assert.equal('middle', mushrooms.poisonLevel);
    });




});