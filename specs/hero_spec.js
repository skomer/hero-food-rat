var assert = require('assert');
var Hero = require('../Hero.js');
var Food = require('../Food.js');



describe('Hero', function() {

    var hero1 = new Hero("Skippy", 19, "fruit");

    it('has name', function() {
        assert.equal("Skippy", hero1.name);
    });
    it('has health', function() {
        assert.equal(19, hero1.health);
    });
    it('has favourite food', function() {
        assert.equal("fruit", hero1.favouriteFood);
    });
    it('uses prototype talk method', function() {
        assert.equal("I am Skippy. Look at that beautiful light", hero1.talk());
    });



});