const maximumFitness = 10
const minimumHungerLevel = 0
const fitnessIncrease = 4
const fitnessDecrease = 3
const hungerLevel = 5
const gettingOlder = 1
const keepingFed = 3

function Pet(name) {

    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10; 
  
  }
Pet.prototype = {
    get isAlive() {
        return this.fitness > 0 && this.hunger < 10 && this.age < 30 ? true : false;
    }
}

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet died :(')
    };
    this.age += gettingOlder;
    this.hunger += hungerLevel;
    this.fitness -= fitnessDecrease;
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet died :(');
    };
    if ((this.fitness + fitnessIncrease ) <= maximumFitness ) {
        this.fitness += fitnessIncrease;
    } else {
        this.fitness = maximumFitness;
    };
};

Pet.prototype.eatingFood = function() {
    if (!this.isAlive) {
        throw new Error('Your pet died :(');
    };
    if ((this.hunger - keepingFed ) >= minimumHungerLevel) {
        this.hunger -= keepingFed;
    } else {
        this.hunger = minimumHungerLevel;
    };
};

Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet died :(');
    };

    if(this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry AND I need a walk';
    };
    if(this.fitness <= 3) {
        return 'I need a walk';
    };
    if(this.hunger >= 5) {
        return 'I am hungry';
    };
    return 'I feel great!'
};

module.exports = Pet;