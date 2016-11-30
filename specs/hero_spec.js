var assert = require('assert');
var Hero = require('../Hero.js');
var Food = require('../Food.js');

describe('Hero', function() {

    var skippy = new Hero("Skippy", 19, "fruit");

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



});