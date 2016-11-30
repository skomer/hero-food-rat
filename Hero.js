
var Hero = function(name, health, favourite_food) {
    this.name = name;
    this.health = health;
    this.favouriteFood = favourite_food;
};

Hero.prototype = {
    talk: function() {
        return "I am " + this.name + ". Look at that beautiful light";
    },
    eat: function(food) {
        this.health += food.healthValue;
        return "yum";
    }
};




module.exports = Hero;