var assert = require('assert');
var Rat = require('../Rat.js');
var Food = require('../Food.js');

describe('Rat', function() {

    var brownRat;
    var sausages;
    var mushrooms;

    beforeEach(function() {
        brownRat = new Rat('brown', 2);
        sausages = new Food('sausages', 7, 0);
        mushrooms = new Food('mushrooms', 1, 2);
    });

    it('has type', function() {
        assert.equal('brown', brownRat.type);
    });
    it('has diseaseLevel', function() {
        assert.equal(2, brownRat.diseaseLevel);
    });
    it('can touch food and make it poisonous', function() {
        brownRat.touchFood(sausages);
        assert.equal(2, sausages.poisonLevel);
    });

});