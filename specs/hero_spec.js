var assert = require('assert');
var Hero = require('../Hero.js');
var Food = require('../Food.js');

describe('Hero', function() {

    var skippy;
    var sausages;

    beforeEach(function() {
       skippy = new Hero('Skippy', 19, 'fruit');
       sausages = new Food('sausages', 7, 0);
       fruit = new Food("fruit", 2, 0);
    });

    it('has name', function() {
        assert.equal("Skippy", skippy.name);
    });
    it('has health', function() {
        assert.equal(19, skippy.health);
    });
    it('has favourite food', function() {
        assert.equal("fruit", skippy.favouriteFood);
    });
    it('uses prototype talk method', function() {
        assert.equal("I am Skippy. Look at that beautiful light", skippy.talk());
    });
    it('uses prototype eat method', function() {
        assert.equal('yum', skippy.eat(sausages));
    });
    it('health goes up when hero eats', function() {
        skippy.eat(sausages);
        assert.equal(26, skippy.health);
    });
    it('eating favourite food gives 1.5 x health benefit', function() {
        skippy.eat(fruit);
        assert.equal(22, skippy.health);
    });


});







