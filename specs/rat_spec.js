var assert = require('assert');
var Rat = require('../Rat.js');
var Food = require('../Food.js');

describe('Rat', function() {

    var brownRat;
    var sausages;
    var mushrooms;

    beforeEach(function() {
        brownRat = new Rat('brown', 'middle');
        sausages = new Food('sausages', 7, 'none');
        mushrooms = new Food('mushrooms', 1, 'middle');
    });

    it('has type', function() {
        assert.equal('brown', brownRat.type);
    });
    it('has diseaseLevel', function() {
        assert.equal('middle', brownRat.diseaseLevel);
    });
    it('can touch food and make it poisonous', function() {
        brownRat.touchFood(sausages);
        assert.equal('middle', sausages.poisonLevel);
    });

});