var assert = require('assert');
var Hero = require('../Hero.js');
var Food = require('../Food.js');



describe('Hero', function() {

    var hero1 = new Hero("Skippy", 19, "fruit");

    it('hero has name', function() {
        assert.equal("Skippy", hero1.name);
    });
    it('hero has health', function() {
        assert.equal(19, hero1.health);
    });
    it('hero has favourite food', function() {
        assert.equal("fruit", hero1.favouriteFood);
    });



});