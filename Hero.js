
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
        var getFoodHealth;
        var getFoodPoison;

        if (food.name === this.favouriteFood) {
            getFoodHealth = 1.5*(food.healthValue);
        } else {
        getFoodHealth = food.healthValue;
        }
        getFoodPoison = food.healthValue * food.poisonLevel;
        this.health += (getFoodHealth - getFoodPoison);
        return "yum";
    }
};

module.exports = Hero;