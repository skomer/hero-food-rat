
var Hero = function(name, health, favouriteFood) {
    this.name = name;
    this.health = health;
    this.favouriteFood = favouriteFood;
};

Hero.prototype = {
    talk: function() {
        return "I am " + this.name + ". Look at that beautiful light";
    },
    eat: function(food) {
        if (food.name === this.favouriteFood) {
            this.health += 1.5*(food.healthValue);
        } else {
        this.health += food.healthValue;
        }
        return "yum";
    }
};




module.exports = Hero;